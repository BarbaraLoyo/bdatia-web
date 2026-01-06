import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, company, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Datos incompletos" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST,
      port: Number(process.env.ZOHO_SMTP_PORT),
      secure: true, // 465 = SSL
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM,
      to: process.env.CONTACT_TO,
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

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json(
      { ok: false, error: "Error enviando email" },
      { status: 500 }
    );
  }
}
