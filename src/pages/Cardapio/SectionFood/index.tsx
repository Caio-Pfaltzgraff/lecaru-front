import Title from "../../../components/Title"
import Card from "../Card"

const SectionFood = ({title} : {title: string}) => {
    return (
        <div>
            <Title>{title}</Title>
            <div className="mb-10 grid justify-center sm:justify-normal gap-6 sm:gap-8 xl:gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default SectionFood