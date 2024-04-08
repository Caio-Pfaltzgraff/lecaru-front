import { ComponentProps } from "react";
import { FaSearch } from "react-icons/fa";

interface Props extends ComponentProps<'input'> {}

export function Search(props : Props) {
  return (
    <div className="flex items-center justify-between gap-2 bg-gray-300 max-w-md py-2 px-3 rounded-lg">
      <input 
        className="bg-transparent w-full focus:ring-0 outline-none lg:text-lg font-medium placeholder:font-semibold placeholder:text-gray-500" 
        {...props}
      />
      <div className="flex justify-center items-center">
        <FaSearch className="text-gray-500 size-5"/>
      </div>
    </div>
  )
}