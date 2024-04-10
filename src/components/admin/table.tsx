import { ComponentProps } from "react";

interface Props extends ComponentProps<'table'> {}

export function Table(props : Props) {
  return (
    <div className="border rounded-xl shadow-md overflow-x-auto bg-white">
      <table className="w-full table-auto min-w-[640px]" {...props}/>
    </div>
  )
}