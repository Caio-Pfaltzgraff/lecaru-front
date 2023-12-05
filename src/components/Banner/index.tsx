interface Props {
    children: React.ReactNode
}

const Banner = ({children}: Props) => {
    return(
        <header className={`hidden md:flex items-center bg-home bg-gray-700 bg-cover bg-no-repeat bg-center md:h-60 lg:h-64 xl:h-73 2xl:h-100 w-full mb-5`}>
                <div className="text-white font-cursiva font-medium text-5xl xl:text-6xl 2xl:text-7xl w-2/5 mx-10 2xl:mx-20">
                    {children}
                </div>
        </header>
    )
}

export default Banner