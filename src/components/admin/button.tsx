import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<'button'> {}

export function Button(props: Props) {
  return (
    <button {...props} className={twMerge(
      'flex gap-2 items-center border-none py-2 px-1.5 font-medium tracking-wide rounded-lg',
      props.className
    )}/>
  )
}