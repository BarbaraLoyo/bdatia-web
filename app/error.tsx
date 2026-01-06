"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main style={{ padding: 40 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700 }}>Ocurrió un error</h1>
      <p style={{ marginTop: 12 }}>
        Algo falló al renderizar esta página.
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
    </main>
  );
}
