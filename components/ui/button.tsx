import * as React from "react"
import { VariantProps, cva } from "class-variance-authority"
import { ClassProp } from "class-variance-authority/dist/types"
import RadixUI from '@radix-ui/react-icons';
import { ColorOptions } from "@/types/theme"
import { cn } from "@/lib/util/utils";

const buttonVariantsStyle = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
        subtle:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
        ghost:
          "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
      color: {
        primary: "bg-primary text-primaryText hover:bg-primary/75",
        secondary: "bg-secondary text-secondaryText hover:bg-secondary/75",
        accent: "bg-accent text-accentText hover:bg-accent/75",
        neutral: "bg-neutral text-neutralText hover:bg-neutral/75",
        info: "bg-info text-infoText hover:bg-info/75",
        success: "bg-success text-successText hover:bg-success/75",
        warning: "bg-warning text-warningText hover:bg-warning/75",
        error: "bg-error text-errorText hover:bg-error/75",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        color: "primary",
        className:
          "bg-transparent border border-primary text-primary hover:bg-primary hover:text-primaryText",
      },
      {
        variant: "outline",
        color: "secondary",
        className:
          "bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-secondaryText",
      },
      {
        variant: "outline",
        color: "accent",
        className:
          "bg-transparent border border-accent text-accent hover:bg-accent hover:text-accentText",
      },
      {
        variant: "outline",
        color: "neutral",
        className:
          "bg-transparent border border-neutral text-neutral hover:bg-neutral hover:text-neutralText",
      },
      {
        variant: "outline",
        color: "info",
        className:
          "bg-transparent border border-info text-info hover:bg-info hover:text-infoText",
      },
      {
        variant: "outline",
        color: "success",
        className:
          "bg-transparent border border-success text-success hover:bg-success hover:text-successText",
      },
      {
        variant: "outline",
        color: "warning",
        className:
          "bg-transparent border border-warning text-warning hover:bg-warning hover:text-warningText",
      },
      {
        variant: "outline",
        color: "error",
        className:
          "bg-transparent border border-error text-error hover:bg-error hover:text-errorText",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const buttonVariants = (
  objs: VariantProps<typeof buttonVariantsStyle> & ClassProp
) => {
  return cn(buttonVariantsStyle(objs))
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariantsStyle> {
  color?: ColorOptions
  icon?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, color, icon, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ color, variant, size, className })}
        ref={ref}
        {...props}
      >
        {props.children}
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
