import { FaCheck } from "react-icons/fa";

const ItemDifferences = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="flex gap-2">
            <i className='text-green-600 p-1 md:text-lg xl:text-xl'><FaCheck /></i>
            <p className=" md:text-lg xl:text-xl">
                {children}
            </p>
        </div>
    )
}

export default ItemDifferences