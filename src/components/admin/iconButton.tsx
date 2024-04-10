import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<'button'> {}

export function IconButton(props : Props) {
  return (
    <button {...props} className={twMerge(
      'border rounded-md p-1.5'
    )}/>
  )
}