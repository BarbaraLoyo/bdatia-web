export default function NotFound() {
  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700 }}>404</h1>
      <p style={{ marginTop: 12 }}>
        Esta página no existe.
      </p>
      <a href="/" style={{ display: "inline-block", marginTop: 16 }}>
        Volver al inicio
      </a>
    </main>
  );
}
