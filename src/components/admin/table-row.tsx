import { ComponentProps } from "react";

interface Props extends ComponentProps<'tr'> {}

export function TableRow(props : Props) {
  return (
    <tr {...props} className="border-b md:hover:bg-zinc-100"/>
  )
}