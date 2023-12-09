interface Props {
    title: string;
    adress: string;
}

const UnitCard = ({adress, title} : Props) => {
    return (
        <div className="mt-4 border p-3 rounded-lg shadow-lg lg:flex-wrap">
            <h4 className="font-semibold font-titulo text-dourado text-xl lg:text-2xl">
                {title}
            </h4>
            <p className="font-medium xl:text-lg">
                <b className="lg:text-lg xl:text-xl">Endereço:</b> {adress}
            </p>
        </div>
    )
}

export default UnitCard