import React from "react"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/ui-base/lib/util/utils"
import CardActions, { CardActionsProps as ActionProps } from "./CardActions"
import CardBody, { CardBodyProps as BodyProps } from "./CardBody"
import CardImage from "./CardImage"
import CardTitle, { CardTitleProps as TitleProps } from "./CardTitle"

const cradVariants = cva("card", {
  variants: {
    compact: {
      true: "card-compact",
      xs: "xs:card-compact",
      sm: "sm:card-compact",
      md: "md:card-compact",
      lg: "lg:card-compact",
    },
    normal: {
      true: "card-normal",
      xs: "xs:card-normal",
      sm: "sm:card-normal",
      md: "md:card-normal",
      lg: "lg:card-normal",
    },
    side: {
      true: "card-side",
      xs: "xs:card-side",
      sm: "sm:card-side",
      md: "md:card-side",
      lg: "lg:card-side",
    },
  },
  defaultVariants: {},
})

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cradVariants> {
  bordered?: boolean
  imageFull?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { bordered = true, imageFull, normal, compact, side, className, ...props },
    ref
  ): JSX.Element => {
    const classes = cn(cradVariants({ normal, compact, side, className }), {
      "card-bordered": bordered,
      "image-full": imageFull,
    })

    return <div aria-label="Card" {...props} className={classes} ref={ref} />
  }
)

export type CardActionsProps = ActionProps
export type CardBodyProps = BodyProps
export type CardTitleProps = TitleProps

Card.displayName = "Card"

export default Object.assign(Card, {
  Actions: CardActions,
  Body: CardBody,
  Title: CardTitle,
  Image: CardImage,
})
