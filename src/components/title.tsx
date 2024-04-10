import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<'h2'> {}

export function Title(props : Props) {
  return (
    <h2 {...props} className={twMerge(
      'text-3xl font-title font-bold',
      props.className
    )} />
  )
}