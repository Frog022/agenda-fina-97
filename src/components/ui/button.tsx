import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-smooth",
  {
    variants: {
      variant: {
        // Botão principal com gradiente dourado
        default: "bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105 shadow-primary",
        
        // Botão hero para chamadas principais
        hero: "bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105 shadow-primary text-lg px-8 py-4 rounded-xl",
        
        // Botão secundário elegante
        secondary: "bg-card text-card-foreground border border-primary/20 hover:border-primary/40 hover:bg-primary/5",
        
        // Botão outline sofisticado
        outline: "border-2 border-primary/30 bg-transparent text-foreground hover:border-primary hover:bg-primary/10 hover:shadow-primary",
        
        // Botão ghost sutil
        ghost: "hover:bg-primary/10 hover:text-primary text-muted-foreground",
        
        // Link com underline animado
        link: "text-primary hover:text-primary-glow underline-offset-4 hover:underline font-normal",
        
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-12 px-6 py-3 text-sm rounded-lg",
        sm: "h-9 px-4 py-2 text-xs rounded-md",
        lg: "h-14 px-8 py-4 text-base rounded-xl",
        xl: "h-16 px-12 py-5 text-lg rounded-2xl",
        icon: "h-12 w-12 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
