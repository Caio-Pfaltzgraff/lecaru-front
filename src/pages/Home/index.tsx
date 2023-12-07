import Quality from "./Quality"
import textos from '../../data/history.json'
import { Link } from "react-router-dom"
import Title from "./Title"

const Home = () => {
    return (  
        <>
            <Quality/>

            <section className="mt-2">
                <Title>
                    Nossa história
                </Title>
                <div className="lg:flex">
                    <div className="w-full sm:flex sm:justify-center lg:justify-start lg:w-1/2 xl:w-153">
                        <img
                            className="object-cover w-full sm:max-w-lg xl:max-w-xl" 
                            src="/src/assets/historia.jpg" 
                            alt="Casal cozinhando" 
                        />
                    </div>
                    <div className="mt-3 lg:mt-0 lg:w-2/3">
                        <div className="flex flex-col gap-2 xl:gap-4 2xl:gap-6 xl:pl-8">
                            {textos.slice(0, 2).map((texto) => (
                                <p key={texto.id} className="font-medium leading-6 lg:ml-3 xl:ml-0 lg:text-lg 2xl:text-xl xl:leading-7 2xl:leading-8">
                                    {texto.content}{texto.id === 2 ? '..' : ''}
                                </p>
                            ))}
                        </div>
                        <div className="flex justify-center mt-2 lg:mt-6">
                            <Link 
                                to="/sobre"
                                className="bg-azul-escuro text-gray-200 lg:text-lg py-2 px-3 lg:py-3 lg:px-4 rounded-lg transition-transform duration-500  hover:scale-105"
                            >
                                Ver mais
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-8">
                <Title>
                    Sugestões da casa
                </Title>
            </section>

            <section className="mt-8">
                <Title>
                    Unidades
                </Title>
            </section>
        </>
    )
}

export default Home