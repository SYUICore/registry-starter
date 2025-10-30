/**
 * Catlife Design System - Checkbox Item Component
 * 
 * Atomic component extracted from Figma design
 * Checkbox list item with label and custom styling
 */

import * as React from "react"
import { cn } from "@/lib/utils"

export interface CheckboxItemProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string
  variant?: "success" | "primary" | "secondary"
}

const CatlifeCheckboxItem = React.forwardRef<HTMLInputElement, CheckboxItemProps>(
  ({ className, label, variant = "success", ...props }, ref) => {
    const variantStyles = {
      success: "bg-[#10B981]",
      primary: "bg-[#F99830]",
      secondary: "bg-[#FFEED6]",
    }

    return (
      <label className={cn("flex items-center gap-[9.036px]", className)}>
        <div className="flex items-center justify-center rounded-[1506.024px] border-[0.904px] border-[#161616] bg-[#10B981] p-[0.904px] shadow-[1.807px_1.807px_0_0_#161616]">
          <div className="relative h-[36.145px] w-[36.145px]">
            <svg
              className="absolute left-[3px] top-[3px] h-[30px] w-[30px] fill-[#161616]"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.9518 17.7711L9.71386 14.5331C9.43775 14.257 9.08635 14.119 8.65964 14.119C8.23293 14.119 7.88153 14.257 7.60542 14.5331C7.32932 14.8092 7.19127 15.1606 7.19127 15.5873C7.19127 16.0141 7.32932 16.3655 7.60542 16.6416L11.8976 20.9337C12.1988 21.2349 12.5502 21.3855 12.9518 21.3855C13.3534 21.3855 13.7048 21.2349 14.006 20.9337L22.5151 12.4247C22.7912 12.1486 22.9292 11.7972 22.9292 11.3705C22.9292 10.9438 22.7912 10.5924 22.5151 10.3163C22.239 10.0402 21.8876 9.90211 21.4608 9.90211C21.0341 9.90211 20.6827 10.0402 20.4066 10.3163L12.9518 17.7711ZM15.0602 30.1205C12.9769 30.1205 11.0191 29.7252 9.18675 28.9345C7.35442 28.1438 5.76054 27.0708 4.40512 25.7154C3.0497 24.3599 1.97666 22.7661 1.18599 20.9337C0.395331 19.1014 0 17.1436 0 15.0602C0 12.9769 0.395331 11.0191 1.18599 9.18675C1.97666 7.35442 3.0497 5.76054 4.40512 4.40512C5.76054 3.0497 7.35442 1.97666 9.18675 1.18599C11.0191 0.395331 12.9769 0 15.0602 0C17.1436 0 19.1014 0.395331 20.9337 1.18599C22.7661 1.97666 24.3599 3.0497 25.7154 4.40512C27.0708 5.76054 28.1438 7.35442 28.9345 9.18675C29.7252 11.0191 30.1205 12.9769 30.1205 15.0602C30.1205 17.1436 29.7252 19.1014 28.9345 20.9337C28.1438 22.7661 27.0708 24.3599 25.7154 25.7154C24.3599 27.0708 22.7661 28.1438 20.9337 28.9345C19.1014 29.7252 17.1436 30.1205 15.0602 30.1205Z" />
            </svg>
          </div>
          <input
            type="checkbox"
            className="sr-only"
            ref={ref}
            {...props}
          />
        </div>
        <div className="flex items-center gap-[26.785px] rounded-[12.732px] border-2 border-[#161616] bg-[#FFFAF3] px-[21.687px] py-0 shadow-[2px_2px_0_0_#161616]">
          <span className="font-[family-name:var(--font-primary)] text-[36.145px] font-normal leading-[150%] text-[#161616]">
            {label}
          </span>
        </div>
      </label>
    )
  }
)
CatlifeCheckboxItem.displayName = "CatlifeCheckboxItem"

export { CatlifeCheckboxItem }
