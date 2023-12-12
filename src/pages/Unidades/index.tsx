import Title from "../../components/Title"
import Unit from "./Unit"

const Unidades = () => {
    return (
        <>
            <div className="flex gap-4 mt-4">
                <label>Busca</label>
                <input type="text" />
                <button>Rio de Janeiro</button>
                <button>São Paulo</button>
            </div>
            <section className="mt-5">
                <Title>Rio de Janeiro</Title>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <Unit 
                        title="Barra da Tijuca"
                        adress="Av. das Américas, 4666 - Barra da Tijuca, Rio de Janeiro - RJ, 22640-102"
                        tell="(21) 99090-9090"
                        />
                    <Unit 
                        title="Nova Iguaçu"
                        adress="Av. Abílio Augusto Távora, 1111 - Luz, Nova Iguaçu - RJ, 26255-620"
                        tell="(21) 99191-9191"
                        />
                    <Unit 
                        title="Cabo Frio"
                        adress="Av. Henrique Terra, 1700 - Palmeiras, Cabo Frio - RJ, 28911-320"
                        tell="(22) 99292-9292"
                        />
                </div>
            </section>

            <section className="mt-5 mb-8">
                <Title>São Paulo</Title>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <Unit 
                        title="Bela Vista"
                        adress="Av. Paulista, 1230 - Bela Vista, São Paulo - SP, 01310-100"
                        tell="(11) 99393-9393"
                    />
                </div>
            </section>
        </>
    )
}

export default Unidades