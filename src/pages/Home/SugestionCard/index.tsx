interface Props {
    urlImage: string;
    title: string;
    description: string;
    pricing: number
}

const SugestionCard = ({description, pricing, title, urlImage} : Props) => {
    
  return (
    <div className="mt-8 lg:mt-0 flex gap-3 hover:bg-gray-200 cursor-pointer p-3 rounded-lg lg:flex-grow lg:w-96 lg:justify-center xl:max-w-md shadow-lg border transition-transform hover:scale-105 duration-500">
        <div className="w-1/2">
            <img 
                className="rounded-xl object-cover object-center w-full md:max-w-xs lg:w-full h-48 md:h-64 lg:h-52"
                src={urlImage} alt="exemplo" 
            />
        </div>
        <div className="w-1/2 flex flex-col gap-2 md:justify-center">
            <h3 className="text-xl font-titulo font-semibold md:text-2xl text-red-600 line-clamp-2">
                {title}
            </h3>
            <div>
                <p className="text-sm font-medium line-clamp-5 md:text-base">
                    {description}
                </p>
            </div>
            <div>
                <h6 className="text-emerald-500 font-semibold text-lg md:text-xl">
                   R$ {String(pricing.toFixed(2)).replace(".", ",")}
                </h6>
            </div>
        </div>
    </div>
  )
}

export default SugestionCard