import React, { ReactElement } from "react"

import { cn } from "@/ui-base/lib/util/utils";

export type TableRowProps = React.TableHTMLAttributes<HTMLTableRowElement> & {
  children?: ReactElement[]
  active?: boolean
  hover?: boolean
}

const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, active, hover, className, ...props }, ref): JSX.Element => {
    const classes = cn(className, {
      active: active,
      hover: hover,
    })

    return (
      <tr {...props} className={classes} ref={ref}>
        {children?.map((child, i) =>
          i < 1 ? <th key={i}>{child}</th> : <td key={i}>{child}</td>
        )}
      </tr>
    )
  }
)

TableRow.displayName = "TableRow"

export default TableRow
