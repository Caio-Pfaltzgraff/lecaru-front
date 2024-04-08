import { LuArrowDownUp, LuSlidersHorizontal } from "react-icons/lu";
import { Search } from "../../components/search";
import { Title } from "../../components/title";
import filters from '../../data/categoriesMenu.json';
import { Card } from "./Card";

export function Menu() {
  return (
    <div  className="space-y-14 mt-6 md:mt-10 lg:mt-12">
      <div className="max-w-screen-xl mx-auto paddingPage space-y-6 -mb-3">
        <Title>Cardápio</Title>

        <div className="space-y-6">
          <Search placeholder="Buscar"/>
          <div className="flex gap-5 ml-1 sm:hidden">
            <button className="flex gap-2 items-center px-3 py-2 rounded-xl bg-lecaru-blue-dark text-white text-sm font-medium tracking-wide outline-none"><LuSlidersHorizontal /> Filtrar</button>
            <button className="flex gap-2 items-center px-3 py-2 rounded-xl bg-lecaru-blue-dark text-white text-sm font-medium tracking-wide outline-none"><LuArrowDownUp /> Ordenar</button>
          </div>

          <div className="hidden sm:grid sm:grid-cols-6 gap-4 max-w-3xl">
            {filters.map((filter) => (
              <div className="flex flex-col gap-3 cursor-pointer" key={filter.id}>
                <div className="flex justify-center">
                  <img 
                    src={filter.photo} 
                    alt={filter.alt} 
                    className="aspect-square rounded-lg size-[5.25rem] md:size-24 xl:size-[6.25rem]"
                  />
                </div>

                <div>
                  <p className="text-lecaru-wine font-bold underline underline-offset-2 text-center">
                    {filter.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="max-w-screen-xl mx-auto paddingPage space-y-6">
        <Title>Carnes Bovinas</Title>
        <div className="grid justify-center md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-3 xl:gap-x-8 xl:gap-y-12">
          {Array.from({ length: 10 }).map((_, index) => (
            <Card 
              key={index}
              id={String((index + 1))}
              name="Hambúrguer Artesanalxl"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit sapien sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu sapien sed diam nonumy eirmod"
              photo="https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-gourmet.jpg"
              price={35.90}
              serving={2}
            />
          ))}
        </div>
      </section>

      <div className="h-px bg-zinc-300 max-w-screen-xl mx-auto"/>

      <section className="max-w-screen-xl mx-auto paddingPage space-y-6">
        <Title>Carnes Suinas</Title>
        <div className="grid justify-center md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-3 xl:gap-x-8 xl:gap-y-12">
          {Array.from({ length: 10 }).map((_, index) => (
            <Card 
              key={index}
              id={String((index + 1))}
              name="Hambúrguer Artesanalxl"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit sapien sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu sapien sed diam nonumy eirmod"
              photo="https://churrasco.coz.br/wp-content/uploads/2021/01/hamburguer-gourmet.jpg"
              price={35.90}
              serving={2}
            />
          ))}
        </div>
      </section>
    </div>
  )
}