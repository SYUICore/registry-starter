/**
 * Catlife Design System - Card Component
 * 
 * Atomic component extracted from Figma design
 * Container component with border, shadow, and background variants
 */

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "flex flex-col border border-[#161616] transition-all duration-200",
  {
    variants: {
      variant: {
        primary: "bg-[#F99830] shadow-[2px_2px_0_0_#161616]",
        secondary: "bg-[#FFD094] shadow-[2px_2px_0_0_#161616]",
        tertiary: "bg-[#F27100] shadow-[2px_2px_0_0_#161616]",
        light: "bg-[#FFFAF3] shadow-[2px_2px_0_0_#161616]",
        soft: "bg-[#FFEED6] shadow-[2px_2px_0_0_#161616]",
        outline: "bg-transparent border-[#161616]",
        translucent: "bg-[rgba(255,250,243,0.20)] shadow-[2px_2px_0_0_#161616]",
      },
      size: {
        sm: "rounded-[25.6px] p-4",
        md: "rounded-[32px] p-6",
        lg: "rounded-[40px] p-8",
        xl: "rounded-[48px] p-10",
        "2xl": "rounded-[56px] p-12",
      },
      hover: {
        true: "hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_#161616] cursor-pointer",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      hover: false,
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const CatlifeCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, hover, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, size, hover, className }))}
        {...props}
      />
    )
  }
)
CatlifeCard.displayName = "CatlifeCard"

const CatlifeCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-4", className)}
    {...props}
  />
))
CatlifeCardHeader.displayName = "CatlifeCardHeader"

const CatlifeCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "font-[family-name:var(--font-primary)] text-2xl font-medium leading-[110%] text-[#161616]",
      className
    )}
    {...props}
  />
))
CatlifeCardTitle.displayName = "CatlifeCardTitle"

const CatlifeCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "font-[family-name:var(--font-primary)] text-lg font-normal leading-[110%] text-[#161616]",
      className
    )}
    {...props}
  />
))
CatlifeCardDescription.displayName = "CatlifeCardDescription"

const CatlifeCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-4", className)} {...props} />
))
CatlifeCardContent.displayName = "CatlifeCardContent"

const CatlifeCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-4", className)}
    {...props}
  />
))
CatlifeCardFooter.displayName = "CatlifeCardFooter"

export {
  CatlifeCard,
  CatlifeCardHeader,
  CatlifeCardFooter,
  CatlifeCardTitle,
  CatlifeCardDescription,
  CatlifeCardContent,
}
