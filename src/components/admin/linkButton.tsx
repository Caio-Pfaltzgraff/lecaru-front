import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface Props {
  to: string
  children: ReactNode
  className?: string
}

export function LinkButton({to, className, children} : Props) {
  return (
    <Link to={to} className={twMerge(
      'flex gap-2 items-center border-none py-2 px-1.5 font-medium tracking-wide rounded-lg',
      className
    )}>
      {children}
    </Link>
  )
}