/**
 * Catlife Design System - Pagination Dots Component
 * 
 * Atomic component extracted from Figma design
 * Navigation dots for carousels and multi-step forms
 */

import * as React from "react"
import { cn } from "@/lib/utils"

export interface PaginationDotsProps {
  total: number
  current: number
  onDotClick?: (index: number) => void
  className?: string
}

const CatlifePaginationDots = React.forwardRef<HTMLDivElement, PaginationDotsProps>(
  ({ total, current, onDotClick, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex items-center gap-[10px]", className)}
      >
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onDotClick?.(index)}
            className={cn(
              "h-4 w-4 rounded-full transition-colors duration-200",
              index === current
                ? "bg-[#F99830]"
                : "bg-[#D6D3D1] hover:bg-[#A8A29E]"
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current ? "true" : "false"}
          />
        ))}
      </div>
    )
  }
)
CatlifePaginationDots.displayName = "CatlifePaginationDots"

export { CatlifePaginationDots }
