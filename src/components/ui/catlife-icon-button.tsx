/**
 * Catlife Design System - Icon Button Component
 * 
 * Atomic component extracted from Figma design
 * Circular icon buttons with border and shadow
 */

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const iconButtonVariants = cva(
  "inline-flex items-center justify-center rounded-full border border-[#161616] transition-all duration-200 disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary:
          "bg-[#F99830] text-[#161616] shadow-[2px_2px_0_0_#161616] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#161616] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        secondary:
          "bg-[#161616] text-[#FFFAF3] shadow-[2px_2px_0_0_#F99830] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#F99830] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        outline:
          "bg-transparent text-[#161616] hover:bg-[rgba(255,250,243,0.2)]",
        ghost:
          "border-transparent bg-transparent text-[#161616] hover:bg-[rgba(255,250,243,0.2)]",
      },
      size: {
        sm: "h-8 w-8 p-2",
        md: "h-9 w-9 p-2",
        lg: "h-12 w-12 p-3",
        xl: "h-14 w-14 p-3.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  icon?: React.ReactNode
}

const CatlifeIconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    return (
      <button
        className={cn(iconButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {icon || children}
      </button>
    )
  }
)
CatlifeIconButton.displayName = "CatlifeIconButton"

export { CatlifeIconButton, iconButtonVariants }
