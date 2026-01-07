import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // ✅ necesario para nodemailer en Vercel

export async function POST(req: Request) {
  try {
    // ✅ log básico de entrada
    console.log("[/api/contact] POST called");

    const { name, company, email, message } = await req.json();

    if (!name || !email || !message) {
      console.warn("[/api/contact] Missing fields", { hasName: !!name, hasEmail: !!email, hasMessage: !!message });
      return NextResponse.json(
        { ok: false, error: "Datos incompletos" },
        { status: 400 }
      );
    }

    // ✅ validar env vars (sin cambiar tu estructura)
    const host = process.env.ZOHO_SMTP_HOST;
    const port = Number(process.env.ZOHO_SMTP_PORT || "465");
    const user = process.env.ZOHO_SMTP_USER;
    const pass = process.env.ZOHO_SMTP_PASS;
    const from = process.env.CONTACT_FROM;
    const toRaw = process.env.CONTACT_TO;

    if (!host || !user || !pass || !from || !toRaw) {
      console.error("[/api/contact] Missing ENV", {
        ZOHO_SMTP_HOST: !!host,
        ZOHO_SMTP_PORT: !!process.env.ZOHO_SMTP_PORT,
        ZOHO_SMTP_USER: !!user,
        ZOHO_SMTP_PASS: !!pass,
        CONTACT_FROM: !!from,
        CONTACT_TO: !!toRaw,
      });
      return NextResponse.json(
        { ok: false, error: "Faltan variables de entorno en Vercel (SMTP/CONTACT)" },
        { status: 500 }
      );
    }

    // ✅ soporta varios destinatarios separados por coma
    const to = toRaw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    console.log("[/api/contact] SMTP config", {
      host,
      port,
      user,
      toCount: to.length,
      from,
      secure: port === 465,
    });

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // ✅ 465 SSL; si usás 587, secure debe ser false
      auth: { user, pass },
    });

    // ✅ verifica conexión/autenticación (te da error exacto en logs)
    await transporter.verify();
    console.log("[/api/contact] SMTP verify OK");

    await transporter.sendMail({
      from,
      to, // ✅ ahora es array si hay varios
      replyTo: email,
      subject: `Nueva consulta web — ${name}${company ? ` (${company})` : ""}`,
      text: `
Nombre: ${name}
Empresa: ${company || "-"}
Email: ${email}

Mensaje:
${message}
      `,
    });

    console.log("[/api/contact] Mail sent OK");
    return NextResponse.json({ ok: true });
  } catch (error: any) {
    // ✅ log con detalle real
    console.error("[/api/contact] Mail error:", {
      message: error?.message,
      code: error?.code,
      response: error?.response,
      responseCode: error?.responseCode,
      command: error?.command,
      stack: error?.stack,
    });

    return NextResponse.json(
      { ok: false, error: error?.message || "Error enviando email" },
      { status: 500 }
    );
  }
}

