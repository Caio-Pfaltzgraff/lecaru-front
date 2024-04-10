import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<'th'> {}

export function TableHeader(props : Props) {
  return (
    <th {...props} className={twMerge(
      'py-3 px-4 font-medium text-left',
      props.className
    )}/>
  )
}