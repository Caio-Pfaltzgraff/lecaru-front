interface Props {
    urlImage: string;
    title: string;
    description: string;
    tag: 'Carnes' | 'Massas' | 'Sobremesas' | 'Hamburguers'
}

const SugestionCard = ({description, tag, title, urlImage} : Props) => {
    let color = ''
    
    switch(tag) {
        case 'Carnes':
            color = 'bg-black'
            break
        case 'Hamburguers':
            color = 'bg-amber-500'
            break
        case 'Massas':
            color = 'bg-red-500'
            break

        case 'Sobremesas':
            color = 'bg-sky-500'
            break
        default:
            color = 'bg-white'
        
    }
  return (
    <div>
        <div className="flex gap-3">
            <div className="w-1/2">
                <img 
                    className="rounded-xl object-cover h-48"
                    src={urlImage} alt="exemplo" 
                />
            </div>
            <div className="w-1/2 flex flex-col gap-2">
                <h3 className=" text-xl font-titulo font-semibold">
                    {title}
                </h3>
                <div>
                    <p className="text-sm font-medium">
                        {description}
                    </p>
                </div>
                <div>
                    <button className={`${color} text-white px-1 py-0.5 text-sm rounded-full`}>
                        {tag}
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SugestionCard