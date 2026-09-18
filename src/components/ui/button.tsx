import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "pill";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-600 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFFFF] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";

    const variantClasses = {
      default:
        "bg-black text-black shadow-lg shadow-black/25 hover:bg-neutral-600 hover:shadow-neutral-600/35 hover:-translate-y-0.5",
      secondary:
        "border border-neutral-300 bg-neutral-100/80 text-neutral-800 hover:border-slate-400 hover:bg-neutral-200 hover:text-black hover:-translate-y-0.5",
      outline:
        "border border-neutral-200/80 bg-white/60 text-neutral-700 hover:border-neutral-600/50 hover:bg-neutral-100/80 hover:text-black hover:-translate-y-0.5",
      ghost:
        "text-neutral-600 hover:bg-neutral-200/60 hover:text-black",
      pill:
        "rounded-lg px-4 py-1.5 text-xs sm:text-sm font-medium transition-all text-neutral-600 hover:text-black hover:bg-neutral-200/60",
    };

    const sizeClasses = {
      default: "px-6 py-3 text-sm sm:text-base",
      sm: "px-4 py-2 text-xs sm:text-sm rounded-lg",
      lg: "px-7 py-3.5 text-base font-semibold",
      icon: "h-10 w-10 p-0 rounded-xl",
    };

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
