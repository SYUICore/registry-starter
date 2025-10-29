/**
 * Catlife Design System - Select/Dropdown Component
 * 
 * Atomic component extracted from Figma design
 * Custom select with rounded styling and dropdown indicator
 */

import * as React from "react"
import { cn } from "@/lib/utils"

export interface CatlifeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean
}

const CatlifeSelect = React.forwardRef<HTMLSelectElement, CatlifeSelectProps>(
  ({ className, error, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(
            "flex h-14 w-full appearance-none items-center gap-2 rounded-[1000px] border border-[#FFFAF3] bg-[rgba(255,250,243,0.30)] px-6 py-2 pr-12 font-[family-name:var(--font-primary)] text-base font-medium leading-[150%] text-[#161616] focus:border-[#F99830] focus:outline-none focus:ring-2 focus:ring-[#F99830] focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-[11px] fill-[#57534E]"
          >
            <path d="M5.575 6.55C5.44167 6.55 5.31667 6.52917 5.2 6.4875C5.08333 6.44583 4.975 6.375 4.875 6.275L0.275 1.675C0.0916667 1.49167 0 1.25833 0 0.975C0 0.691667 0.0916667 0.458333 0.275 0.275C0.458333 0.0916667 0.691667 0 0.975 0C1.25833 0 1.49167 0.0916667 1.675 0.275L5.575 4.175L9.475 0.275C9.65833 0.0916667 9.89167 0 10.175 0C10.4583 0 10.6917 0.0916667 10.875 0.275C11.0583 0.458333 11.15 0.691667 11.15 0.975C11.15 1.25833 11.0583 1.49167 10.875 1.675L6.275 6.275C6.175 6.375 6.06667 6.44583 5.95 6.4875C5.83333 6.52917 5.70833 6.55 5.575 6.55Z" />
          </svg>
        </div>
      </div>
    )
  }
)
CatlifeSelect.displayName = "CatlifeSelect"

export { CatlifeSelect }
