import Title from "../../components/Title"
import { CgSearch } from 'react-icons/cg';
import SectionFood from "./SectionFood";
import filters from "../../data/categoriesMenu.json";
import CardFilter from "./CardFilter";

const Cardapio = () => {
    return (
        <>
            <div className="mt-8">
                <Title>
                    Cardápio
                </Title>
                <div>
                    <div className="flex items-center gap-3 rounded-lg max-w-md h-10 justify-between px-3 bg-gray-300">
                        <input 
                            className="bg-gray-300 border-none outline-none text-xl placeholder:font-semibold w-full placeholder:text-gray-500"
                            placeholder="Buscar"
                        />
                        <CgSearch size={24}/>
                    </div>
                    <div className="mt-3 flex gap-3 overflow-x-scroll whitespace-nowrap p-2 sm:hidden">
                        <button className="bg-azul-escuro text-white p-2 rounded-xl font-bold shadow-lg">Carnes</button>
                        <button className="bg-azul-escuro text-white p-2 rounded-xl font-bold shadow-lg">Petiscos</button>
                        <button className="bg-azul-escuro text-white p-2 rounded-xl font-bold shadow-lg">Massas</button>
                        <button className="bg-azul-escuro text-white p-2 rounded-xl font-bold shadow-lg">Guarnições</button>
                        <button className="bg-azul-escuro text-white p-2 rounded-xl font-bold shadow-lg">Bebidas</button>
                        <button className="bg-azul-escuro text-white p-2 rounded-xl font-bold shadow-lg">Sobremesas</button>
                    </div>
                    
                    <div className="mt-3 hidden sm:grid grid-cols-6 gap-2 lg:gap-4 max-w-3xl">
                        {filters.map(filter => <CardFilter {...filter} key={filter.id}/>)}
                    </div>
                </div>
            </div>
            <section className="mt-8">
                <SectionFood title="Bovinas" />
                <SectionFood title="Suinas" />
            </section>
        </>
    )
}

export default Cardapio