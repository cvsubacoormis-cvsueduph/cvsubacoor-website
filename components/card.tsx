import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva("rounded-lg border bg-card text-card-foreground shadow-sm", {
  variants: {
    variant: {
      default: "border",
      secondary: "bg-secondary text-secondary-foreground",
      destructive: "border-destructive bg-destructive text-destructive-foreground",
      outline: "border-input bg-background shadow-sm",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

const cardHeaderVariants = cva("flex flex-col space-y-1.5 p-6")

const cardTitleVariants = cva("text-2xl font-semibold leading-none tracking-tight", {
  variants: {
    size: {
      default: "",
      sm: "text-lg",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

const cardDescriptionVariants = cva("text-sm text-muted-foreground")

const cardContentVariants = cva("p-6 pt-0")

const cardFooterVariants = cva("flex items-center p-6 pt-0")

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof cardTitleVariants> {}
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant, ...props }, ref) => (
  <div className={cn(cardVariants({ variant, className }))} ref={ref} {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({ className, ...props }, ref) => (
  <div className={cn(cardHeaderVariants({ className }))} ref={ref} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(({ className, size, ...props }, ref) => (
  <h3 className={cn(cardTitleVariants({ size, className }))} ref={ref} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(({ className, ...props }, ref) => (
  <p className={cn(cardDescriptionVariants({ className }))} ref={ref} {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => (
  <div className={cn(cardContentVariants({ className }))} ref={ref} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({ className, ...props }, ref) => (
  <div className={cn(cardFooterVariants({ className }))} ref={ref} {...props} />
))
CardFooter.displayName = "CardFooter"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground border-transparent",
        secondary: "border-muted text-muted-foreground",
        destructive: "border-destructive/50 bg-destructive text-destructive-foreground hover:border-destructive",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({ className, variant, ...props }, ref) => (
  <span className={cn(badgeVariants({ variant, className }))} ref={ref} {...props} />
))
Badge.displayName = "Badge"

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Badge }

