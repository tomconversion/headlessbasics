import React from "react"

import { cn } from "@/ui-base/lib/util/utils";
import TableBody from "./TableBody"
import TableFooter from "./TableFooter"
import TableHead from "./TableHead"
import TableRow from "./TableRow"

export type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {
  compact?: boolean
  zebra?: boolean
}

const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ children, compact, zebra, className, ...props }, ref): JSX.Element => {
    const classes = cn("table", className, {
      "table-zebra": zebra,
      "table-compact": compact,
    })

    return (
      <table {...props} className={classes} ref={ref}>
        {children}
      </table>
    )
  }
)

Table.displayName = "Table"

export default Object.assign(Table, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Footer: TableFooter,
})
