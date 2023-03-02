import { cn } from "@/ui-base/lib/util/utils";

export type CountdownProps = React.HTMLAttributes<HTMLSpanElement> & {
  value: number
}

const Countdown = ({
  value = 99,
  className,
  ...props
}: CountdownProps): JSX.Element => {
  const classes = cn("countdown", className)

  const countdownStyle: Record<string, number> = { "--value": value }

  return (
    <span role="timer" {...props} className={classes}>
      <span style={countdownStyle} />
    </span>
  )
}

Countdown.displayName = "CountDown"
export default Countdown
