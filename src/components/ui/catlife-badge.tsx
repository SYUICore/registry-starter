/**
 * Catlife Design System - Badge Component
 * 
 * Atomic component extracted from Figma design
 * Small pill-shaped badges for labels, status indicators, and discount tags
 */

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-[1034.542px] border font-[family-name:var(--font-primary)] font-bold text-center shadow-[1.241px_1.241px_0_0_#161616] transition-colors",
  {
    variants: {
      variant: {
        success:
          "border-[1.241px] border-[#161616] bg-[#10B981] text-[#161616]",
        primary:
          "border-[1.241px] border-[#161616] bg-[#F99830] text-[#161616]",
        secondary:
          "border-[1.241px] border-[#161616] bg-[#FFEED6] text-[#161616]",
        outline:
          "border-[1.241px] border-[#161616] bg-transparent text-[#161616]",
      },
      size: {
        sm: "h-[33.398px] px-[8.276px] py-[7.242px] text-[0.875rem] leading-[90%]",
        md: "h-9 px-3 py-2 text-base leading-[90%]",
        lg: "h-10 px-4 py-2.5 text-lg leading-[90%]",
      },
    },
    defaultVariants: {
      variant: "success",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function CatlifeBadge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  )
}

export { CatlifeBadge, badgeVariants }
