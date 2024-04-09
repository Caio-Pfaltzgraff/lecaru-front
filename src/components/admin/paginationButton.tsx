import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<'button'> {}

export function PaginationButton(props : Props) {
  return (
    <button 
      {...props}
      className={twMerge(
        'border p-1.5 rounded-md',
        props.disabled ? 'opacity-50' : null
      )}
    />
  )
}