import { LinkButton } from "../../components/linkButton";
import { Title } from "../../components/title";
import about from "../../data/about.json";
import { SuggestionCard } from "./SuggestionCard";
import { UnitCard } from "./UnitCard";

export function Home() {
  const qualities = [
    {
      id: 1,
      image: '/restaurant_icon1.png',
      text: 'A melhor Atmosfera'
    },
    {
      id: 2,
      image: '/restaurant_icon2.png',
      text: 'Ingredientes de Alta Qualidade'
    },
    {
      id: 3,
      image: '/restaurant_icon3.png',
      text: 'Sabor Incomparável'
    }
  ]

  return (
    <div className="space-y-6 lg:space-y-8 mt-4 lg:mt-6">
      <div className="flex justify-between gap-2 max-w-screen-xl mx-auto paddingPage">
        {qualities.map((quality) => (
          <div className="flex flex-col lg:flex-row gap-3 justify-center items-center" key={quality.id}>
            <div>
              <img className="size-[18vw] sm:size-[5.25rem]" src={quality.image} alt="Ícone de restaurante" />
            </div>

            <p className="text-sm sm:text-base text-center lg:text-base font-medium">{quality.text}</p>
          </div>
        ))}
      </div>

      <section>
        <div className="paddingPage max-w-screen-xl mx-auto space-y-4">
          <Title>Nossa História</Title>
          <div className="lg:flex">
            <div className="w-full sm:flex justify-center lg:justify-start lg:w-1/2 xl:w-[38.25rem]">
              <img 
                className="object-cover w-full sm:max-w-lg xl:max-w-xl rounded-sm"
                src='/about.jpg' 
                alt="Casal cozinhando" 
              />
            </div>

            <div className="mt-3 lg:w-2/3 flex justify-center items-center">
              <div className="flex flex-col gap-2 xl:gap-4">
                {about.slice(0, 2).map((text) => (
                  <p className="lg:pl-4 tracking-wide leading-relaxed xl:leading-loose" key={text.id}>
                    {text.content}{text.id === 2 ? '..' : ''}
                  </p>
                ))}
                <div className="flex justify-center">
                  <LinkButton to="/sobre">Ver mais</LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="paddingPage max-w-screen-xl mx-auto space-y-4">
          <Title>Sugestões da casa</Title>

          <div className="grid justify-center sm:justify-normal sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 xl:gap-9">
            {Array.from({ length: 4 }).map((_, i) => (
              <SuggestionCard 
                key={i + 1}
                id={String(i + 1)}
                description="lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor incididunt ut labore et, consectetur ut labore et dolore magna aliqua par"
                pricing={35.90}
                title="Hambúrguer Artesanal"
                urlImage="https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-gourmet.jpg"
              />
            ))}
          </div>
          
          <div className="flex justify-center pt-2 md:pt-4">
            <LinkButton to="/cardapio">Ver cardápio completo</LinkButton>
          </div>
        </div>
      </section>

      <section>
        <div className="paddingPage max-w-screen-xl mx-auto space-y-4">
          <Title>Reservas</Title>
          
          <div className="bg-[url('/reservas.jpg')] bg-cover bg-no-repeat bg-center">
            <div className="bg-lecaru-blue-dark/50 px-2 md:px-8 lg:px-16 xl:px-20 flex flex-col justify-center items-center text-center gap-4 lg:gap-8 xl:gap-10 h-60 md:h-72 lg:h-80 xl:h-96">
              <p className="text-white text-lg lg:text-2xl font-bold">                        
                Gostaria de reservar sua mesa para um dia especial ou até mesmo o nosso espaço de eventos?
              </p>
              <p className="text-white text-lg lg:text-2xl font-bold">
                Ligue para nossa central de atendimento através do número: (21) 99999-9999
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
      <div className="paddingPage max-w-screen-xl mx-auto space-y-4">
        <Title>Unidades</Title>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({length: 3}).map((_, i) => (
            <UnitCard 
              key={i + 1}
              id={String(i + 1)}
              title="Nova Iguaçu"
              address="Rua Felipe Camarão, 1111 - da Luz, Nova Iguaçu - RJ, 26255-620"
            />
          ))}
        </div>

        <div className="flex justify-center">
          <LinkButton to="/unidades">Ver mais</LinkButton>
        </div>
      </div>
      </section>
    </div>
  )
}