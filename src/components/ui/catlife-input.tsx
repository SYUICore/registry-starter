/**
 * Catlife Design System - Input Component
 * 
 * Atomic component extracted from Figma design
 * Form input with consistent styling
 */

import * as React from "react"
import { cn } from "@/lib/utils"

export interface CatlifeInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const CatlifeInput = React.forwardRef<HTMLInputElement, CatlifeInputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full items-center gap-2 rounded-[1000px] border border-[#FFFAF3] bg-[rgba(255,250,243,0.20)] px-4 py-1 text-center font-[family-name:var(--font-primary)] text-lg text-[#78716C] placeholder:text-[#78716C] focus:border-[#F99830] focus:outline-none focus:ring-2 focus:ring-[#F99830] focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
CatlifeInput.displayName = "CatlifeInput"

export { CatlifeInput }
