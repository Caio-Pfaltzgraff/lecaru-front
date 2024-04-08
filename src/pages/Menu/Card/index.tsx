interface Props {
  id: string
  name: string
  description: string
  photo: string
  price: number
  serving: number
}

export function Card({name, description, photo, price, serving} : Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 md:gap-2 max-w-md border p-1 rounded-xl shadow-md bg-gray-50 cursor-pointer">

      <div className="md:p-1">
        <img src={photo} alt={name} className="aspect-square object-cover object-center size-full rounded-md"/>
      </div>

      <div className="flex flex-col justify-between gap-1 pl-2 md:gap-2 xl:gap-3 sm:pr-1 md:px-2">
        <h3 className="text-red-600 font-title font-semibold line-clamp-2 sm:text-lg lg:text-xl">
          {name}
        </h3>
        <p className="text-sm sm:text-base text-zinc-700 line-clamp-5">
          {description}
        </p>
        <div className="flex justify-between items-center flex-wrap gap-x-1 gap-y-2">
          <p className="text-green-600 font-semibold sm:text-lg">
            R$ {String(price.toFixed(2)).replace(".", ",")}
          </p>
          <p className="text-zinc-500 font-semibold text-sm sm:text-base">
            {serving} Pessoa{serving > 1 && 's'}
          </p>
        </div>
      </div>
    </div>
  )
}