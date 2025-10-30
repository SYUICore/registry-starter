/**
 * Catlife Design System - Form Container Component
 * 
 * Atomic component extracted from Figma design
 * Container for form elements with consistent styling
 */

import * as React from "react"
import { cn } from "@/lib/utils"

export interface FormContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
}

const CatlifeFormContainer = React.forwardRef<HTMLDivElement, FormContainerProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex w-64 flex-col items-center justify-center gap-4 rounded-[32px] bg-[rgba(255,250,243,0.20)] p-4",
          className
        )}
        {...props}
      >
        {title && (
          <div className="w-full text-center font-[family-name:var(--font-primary)] text-xl font-medium leading-[120%] text-[#161616]">
            {title}
          </div>
        )}
        {children}
      </div>
    )
  }
)
CatlifeFormContainer.displayName = "CatlifeFormContainer"

export { CatlifeFormContainer }
