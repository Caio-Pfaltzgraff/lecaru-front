const Card = () => {
    return (
        <div className="flex flex-col gap-2 sm:gap-4 border shadow-lg rounded-lg p-2 max-w-xs cursor-pointer transition-transform hover:scale-105 duration-300">
            <div>
                <img 
                    className="rounded-lg aspect-square object-cover object-center"
                    src="/src/assets/hamburguer.png" alt="xtudo" 
                />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl text-red-600 font-titulo font-semibold line-clamp-2">
                    Duplo bacon
                </h3>
                <p className="font-medium line-clamp-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.
                </p>
                <div className="flex justify-between">
                    <h6 className="text-xl text-emerald-500 font-semibold">
                        R$ 35,00
                    </h6>
                    <p className="text-lg font-semibold text-gray-500">
                        2 Pessoas
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card