
const Values = ({title, content} : {title: string, content: string}) => {
    return (
        <div>
            <h3 className='font-bold text-dourado text-lg md:text-xl xl:text-2xl'>{title}</h3>
            <p className="md:text-lg">
                {content}    
            </p>
        </div>
    )
}

export default Values