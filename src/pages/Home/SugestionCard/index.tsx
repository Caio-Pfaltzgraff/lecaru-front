interface Props {
    urlImage: string;
    title: string;
    description: string;
    pricing: number
}

const SugestionCard = ({description, pricing, title, urlImage} : Props) => {
    
  return (
    <div className="grid grid-cols-2 p-1 max-w-sm lg:max-w-md 2xl:max-w-lg border rounded-md shadow-md cursor-pointer hover:bg-gray-200 hover:scale-105 transition-transform duration-500">
        <div className="w/12">
            <img 
                className="rounded-lg aspect-square object-cover object-center w-full"
                src={urlImage} alt={title} 
            />
        </div>
        <div className="w1/2 ml-2 flex flex-col gap-2 lg:gap-1 xl:gap-2">
            <h3 className="font-titulo text-red-600 text-lg md:text-xl lg:text-lg xl:text-xl font-semibold line-clamp-2">
                {title}
            </h3>
            <div>
                <p className="text-sm md:text-base lg:text-sm xl:text-base line-clamp-4">
                    {description}
                </p>
            </div>
            <div>
                <h6 className="text-emerald-500 font-semibold md:text-lg xl:text-xl">
                   R$ {String(pricing.toFixed(2)).replace(".", ",")}
                </h6>
            </div>
        </div>
    </div>
  )
}

export default SugestionCard