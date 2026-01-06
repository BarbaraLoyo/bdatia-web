"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body style={{ padding: 40 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700 }}>Error global</h1>
        <p style={{ marginTop: 12 }}>
          Se produjo un error inesperado a nivel aplicación.
        </p>

        <button
          onClick={() => reset()}
          style={{
            marginTop: 16,
            padding: "10px 14px",
            border: "1px solid #999",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Reintentar
        </button>
      </body>
    </html>
  );
}
