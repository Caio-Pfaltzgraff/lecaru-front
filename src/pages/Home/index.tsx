import Banner from "../../components/Banner"
import NavBar from "../../components/NavBar"

const Home = () => {
    return (
        <>
            <NavBar />
            <Banner>
                Sabores que contam histórias
            </Banner>
            <main className="flex flex-col gap-4">
                <section className="bg-emerald-700">
                    <h2>
                        Nossa história
                    </h2>
                </section>

                <section className="bg-emerald-500">
                    <h2>
                        Sugestões da casa
                    </h2>
                </section>

                <section className="bg-emerald-700">
                    <h2>
                        Unidades
                    </h2>
                </section>
            </main>
            <footer className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-orange-300 w-full h-11">
                <div className="flex justify-center items-center">
                    <p>Desenvolvido por Caio</p>
                </div>
            </footer>
        </>
    )
}

export default Home