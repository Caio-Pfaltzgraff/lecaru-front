import Quality from "./Quality"
import textos from '../../data/history.json'
import Title from "./Title"
import SugestionCard from "./SugestionCard"
import Button from "../../components/Button"
import UnitCard from './UnitCard';

const Home = () => {
    return (  
        <>
            <Quality/>

            <section className="mt-8">
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
                            <Button component="Link">Ver mais</Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-8 xl:mt-16">
                <Title>
                    Sugestões da casa
                </Title>
                <div className="lg:flex lg:flex-wrap lg:gap-6">
                    <SugestionCard 
                        title="Nome do Prato"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa."
                        urlImage="src/assets/hamburguer.png"
                        pricing={34.90}
                    />
                    <SugestionCard 
                        title="Nome do Prato"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa."
                        urlImage="src/assets/hamburguer.png"
                        pricing={34.90}
                    />
                    <SugestionCard 
                        title="Nome do Prato"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa."
                        urlImage="src/assets/hamburguer.png"
                        pricing={34.90}
                    />                
                    <SugestionCard 
                        title="Nome do Prato"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa."
                        urlImage="src/assets/hamburguer.png"
                        pricing={34.90}
                    />
                </div>
                <div className="flex justify-center pt-4 md:pt-6">
                    <Button component="Link" to="/cardapio">Ver cardápio completo</Button>
                </div>
            </section>

            <section className="mt-8 xl:mt-16">
                <Title>
                    Reservas
                </Title>
                <div className="bg-home-reservas">
					<div className="bg-azul-escuro bg-opacity-60 px-2 md:px-8 lg:px-16 xl:px-24 2xl:px-32  flex flex-col justify-center items-center text-center gap-4 lg:gap-8 xl:gap-10 2xl:gap-14 h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-128">
						<p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">                        
							Gostaria de reservar sua mesa para um dia especial ou até mesmo o nosso espaço de eventos?
						</p>
						<p className="text-white text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
							Ligue para nossa central de atendimento através do número: (21) 99999-9999
						</p>
					</div>
                </div>
            </section>

			<section className="mt-8 xl:mt-16">
				<Title>
					Unidades
				</Title>
                <div className="lg:flex lg:gap-3">
                    <UnitCard 
                        title="Nova Iguaçu"
                        adress="Av. Abílio Augusto Távora, 1111 - Luz, Nova Iguaçu - RJ, 26255-620"
                    />
                    <UnitCard 
                        title="Barra da Tijuca"
                        adress="Av. das Américas, 4666 - Barra da Tijuca, Rio de Janeiro - RJ, 22640-102"
                    />
                    <UnitCard 
                        title="Cabo Frio"
                        adress="Av. Henrique Terra, 1700 - Palmeiras, Cabo Frio - RJ, 28911-320"
                    />
                </div>
                <div className="my-6 flex justify-center">
                    <Button component="Link" to="/unidades">Ver mais</Button>
                </div>
			</section>
        </>
    )
}

export default Home