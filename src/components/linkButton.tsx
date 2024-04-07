import { Link } from "react-router-dom";

interface Props {
  to: string
  children: React.ReactNode
}

export function LinkButton({to, children} : Props) {
  return (
    <Link 
      to={to} 
      children={children}
      className="flex gap-2 py-2 lg:py-3 px-3 lg:px-4 rounded-lg bg-lecaru-blue-dark font-medium text-gray-200 transition-transform duration-500 hover:scale-105"
    />
  )
}