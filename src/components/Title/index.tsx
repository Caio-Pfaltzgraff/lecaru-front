
const Title = ({children}: {children: React.ReactNode}) => {
    return(
        <h2 className="mb-4 lg:mb-6 text-3xl lg:text-4xl  font-titulo font-bold">
            {children}
        </h2>
    )
}

export default Title