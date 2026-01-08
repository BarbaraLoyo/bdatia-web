"use client";

import * as React from "react";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          {...props}
          className={[
            "h-11 w-full rounded-md border bg-white/5 px-4 text-sm text-text-light placeholder:text-muted outline-none",
            "border-white/15 focus:ring-2 focus:ring-white/20 focus:border-white/25",
            error ? "border-red-500/70 focus:border-red-500/70" : "",
            className,
          ].join(" ")}
          aria-invalid={!!error}
        />
        {error ? (
          <p className="mt-1 text-xs text-red-400">{error}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };

