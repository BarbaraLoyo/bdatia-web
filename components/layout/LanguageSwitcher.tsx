"use client";

import { useMemo } from "react";

type TL = "es" | "en" | "pt" | "zh-CN";
type Lang = { label: string; tl: TL };

const LANGS: Lang[] = [
  { label: "Español", tl: "es" },
  { label: "English", tl: "en" },
  { label: "Português", tl: "pt" },
  { label: "中文", tl: "zh-CN" },
];

// Elegimos un solo “dominio fuente” para traducir (tu dominio final)
const PRIMARY_HOST = "www.bdatia.com.ar";

function getCurrentLang(): TL {
  if (typeof window === "undefined") return "es";

  // Si estamos en translate.goog, intentamos leer el idioma destino desde querystring
  const isTranslate = window.location.host.endsWith("translate.goog");
  if (isTranslate) {
    const params = new URLSearchParams(window.location.search);
    const tl = params.get("_x_tr_tl") as TL | null;
    if (tl && ["es", "en", "pt", "zh-CN"].includes(tl)) return tl;
  }

  return "es";
}

// Genera URL traducida SIN widget (translate.goog)
function buildTranslateUrl(tl: TL) {
  if (typeof window === "undefined") return "#";

  const { protocol, pathname, search, hash } = window.location;

  // Español: volvemos al dominio real
  if (tl === "es") {
    return `${protocol}//${PRIMARY_HOST}${pathname}${search}${hash}`;
  }

  // Proxy translate.goog
  const translatedHost = PRIMARY_HOST.replace(/\./g, "-") + ".translate.goog";

  // Importante: siempre agregamos params con ? o &
  const joiner = search && search.length > 0 ? "&" : "?";
  const params =
    `${joiner}_x_tr_sl=es&_x_tr_tl=${encodeURIComponent(tl)}&_x_tr_hl=${encodeURIComponent(tl)}&_x_tr_pto=wapp`;

  return `${protocol}//${translatedHost}${pathname}${search}${params}${hash}`;
}

export default function LanguageSwitcher() {
  const current = useMemo(() => getCurrentLang(), []);

  return (
    <div className="relative">
      <select
        defaultValue={current}
        onChange={(e) => {
          const tl = e.target.value as TL;
          window.location.href = buildTranslateUrl(tl);
        }}
        className="h-9 rounded-md border border-white/15 bg-white/5 px-3 text-sm text-white/90 outline-none hover:bg-white/10 focus:ring-2 focus:ring-white/20"
        aria-label="Seleccionar idioma"
      >
        {LANGS.map((l) => (
          <option key={l.tl} value={l.tl} className="text-black">
            {l.label}
          </option>
        ))}
      </select>
    </div>
  );
}

