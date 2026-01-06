"use client";

import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases Tailwind sin duplicados.
 */
function cn(...inputs: Array<string | undefined | null | false>) {
  return twMerge(clsx(inputs));
}

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

/**
 * Button (BDatia)
 * Editá variantes/colores acá si querés ajustar el estilo premium.
 */
export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-medium transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)] " +
    "disabled:opacity-50 disabled:pointer-events-none";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[color:var(--brand)] text-white hover:bg-[color:color-mix(in srgb, var(--brand) 90%, white 10%)]",
    secondary:
      "bg-white/10 text-white hover:bg-white/15 border border-white/10",
    outline:
      "border border-[color:var(--gold)] text-white hover:bg-white/10",
    ghost: "text-white hover:bg-white/10",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-5 text-base",
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}

