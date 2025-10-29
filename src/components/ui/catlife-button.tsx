/**
 * Catlife Design System - Button Component
 * 
 * Atomic component extracted from Figma design
 * Supports multiple variants, sizes, and states
 */

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-bold transition-all duration-200 disabled:pointer-events-none disabled:opacity-40 font-[family-name:var(--font-primary)]",
  {
    variants: {
      variant: {
        primary:
          "bg-[#161616] text-[#FFFAF3] border border-[#F99830] shadow-[2px_2px_0_0_#F99830] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#F99830] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        secondary:
          "bg-[#F99830] text-[#161616] border border-[#161616] shadow-[2px_2px_0_0_#161616] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#161616] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        outline:
          "bg-[#FFFAF3] text-[#161616] border border-[#161616] shadow-[2px_2px_0_0_#161616] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#161616] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        ghost:
          "bg-transparent text-[#161616] hover:bg-[rgba(255,250,243,0.2)]",
        link:
          "text-[#161616] underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 rounded-[800px] px-[25.6px] py-4 text-[0.8125rem]",
        md: "h-10 rounded-[1000px] px-8 py-5 text-base",
        lg: "h-14 rounded-[1000px] px-8 py-5 text-xl",
        icon: "h-9 w-9 rounded-[1000px] p-2",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const CatlifeButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
CatlifeButton.displayName = "CatlifeButton"

export { CatlifeButton, buttonVariants }
