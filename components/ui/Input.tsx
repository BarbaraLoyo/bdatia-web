import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases Tailwind sin duplicados.
 */
function cn(...inputs: Array<string | undefined | null | false>) {
  return twMerge(clsx(inputs));
}

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Input (BDatia)
 * - Base minimalista/institucional, con foco visible y estilo premium sobrio.
 * - Editá colores y bordes acá si querés ajustar la estética.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
           "h-11 w-full rounded-xl border bg-black/5 px-3 text-sm text-black",
  "border-[#7A1F2B] placeholder:text-black/50",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1F2B]/30 focus-visible:border-[#7A1F2B]",
  "disabled:cursor-not-allowed disabled:opacity-50", 
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
