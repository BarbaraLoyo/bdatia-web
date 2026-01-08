"use client";

import { useMemo } from "react";

type Lang = { label: string; tl: "es" | "en" | "pt" | "zh-CN" };

const LANGS: Lang[] = [
  { label: "Español", tl: "es" },
  { label: "English", tl: "en" },
  { label: "Português", tl: "pt" },
  { label: "中文", tl: "zh-CN" },
];

// Genera URL traducida SIN widget (translate.goog)
function buildTranslateUrl(tl: Lang["tl"]) {
  if (typeof window === "undefined") return "#";

  // Si eligen Español, volvemos al dominio normal
  if (tl === "es") return window.location.origin + window.location.pathname + window.location.search + window.location.hash;

  const { protocol, host, pathname, search, hash } = window.location;

  // ejemplo: www.bdatia.com.ar -> www-bdatia-com-ar.translate.goog
  const translatedHost = host.replace(/\./g, "-") + ".translate.goog";

  const joiner = search && search.length > 0 ? "&" : "?";
  const params =
    `${joiner}_x_tr_sl=es&_x_tr_tl=${encodeURIComponent(tl)}&_x_tr_hl=${encodeURIComponent(tl)}&_x_tr_pto=wapp`;

  return `${protocol}//${translatedHost}${pathname}${search}${params}${hash}`;
}

export default function LanguageSwitcher() {
  const current = useMemo(() => "es", []);

  return (
    <div className="relative">
      <select
        defaultValue={current}
        onChange={(e) => {
          const tl = e.target.value as Lang["tl"];
          const url = buildTranslateUrl(tl);
          window.location.href = url;
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
