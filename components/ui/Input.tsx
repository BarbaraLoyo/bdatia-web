import * as React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: Array<string | undefined | null | false>) {
  return twMerge(clsx(inputs));
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", error, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <input
          ref={ref}
          type={type}
          className={cn(
            // ✅ borde normal (acá podés dejarlo bordó si querés)
            "h-11 w-full rounded-xl border bg-black/5 px-3 text-sm text-black",
            "placeholder:text-black/50",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)]",
            "disabled:cursor-not-allowed disabled:opacity-50",
            // ✅ si hay error, borde rojo
            error && "border-red-500 focus-visible:ring-red-500",
            // ✅ si NO hay error, tu borde suave actual
            !error && "border-gold/10",
            className
          )}
          {...props}
        />
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </div>
    );
  }
);

Input.displayName = "Input";

