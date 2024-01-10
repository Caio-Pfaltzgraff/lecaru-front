interface Props {
    name: string
    photo: string
    alt: string
}

const CardFilter = ({name, photo, alt} : Props) => {
    return (
        <div className="h-36  p-2 flex flex-col gap-3 cursor-pointer">
            <div className="h-24">
                <img
                    className="rounded-lg aspect-auto" 
                    src={photo} alt={alt}
                />
            </div>
            <div className="flex justify-center items-center">
                <p className="text-vinho lg:text-lg font-bold border-b-2 border-vinho">
                    {name}
                </p>
            </div>
        </div>
    )
}

export default CardFilter