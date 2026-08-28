import React from "react";
import { cn } from "@/lib/utils";
import { ButtonVariant, ButtonSize } from "@/types";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080c14] disabled:opacity-45 disabled:pointer-events-none cursor-pointer select-none active:scale-[0.98]";

    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        "bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold shadow-sm hover:shadow-sky-500/20 focus-visible:ring-sky-400 border border-sky-300/40",
      secondary:
        "bg-[#131c2e] hover:bg-[#1a263d] text-slate-200 border border-[#1e293b] hover:border-slate-600 focus-visible:ring-sky-400",
      ghost:
        "text-slate-300 hover:text-white hover:bg-[#131c2e]/60 focus-visible:ring-sky-400 border border-transparent",
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-sm px-4 py-2 gap-2",
      lg: "text-base px-6 py-2.5 gap-2.5",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
