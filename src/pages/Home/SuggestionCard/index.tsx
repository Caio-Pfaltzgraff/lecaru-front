interface Props {
  id: string;
  urlImage: string;
  title: string;
  description: string;
  pricing: number
}

export function SuggestionCard({description, pricing, title, urlImage} : Props) {
  return (
    <div className="grid grid-cols-2 p-1 max-w-sm lg:max-w-md xl:max-w-lg border rounded-xl shadow-lg cursor-pointer md:hover:bg-gray-200 md:hover:scale-105 transition-transform duration-500">
      <div>
        <img 
          className="aspect-square object-cover object-center size-full rounded-md"
          src={urlImage} alt={title}
        />
      </div>

      <div className="ml-2 flex flex-col gap-1.5 xl:gap-2">
        <h4 className="font-title text-red-600 font-semibold line-clamp-2 lg:text-lg">
          {title}
        </h4>

        <div>
          <p className="text-sm text-zinc-700 line-clamp-4 xl:line-clamp-5 xl:text-base">
            {description}
          </p>
        </div>

        <div>
          <span className="text-green-600 font-semibold">
            R$ {String(pricing.toFixed(2)).replace(".", ",")}
          </span>
        </div>
      </div>
    </div>
  )
}