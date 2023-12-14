import Title from "../../components/Title"
import { CgSearch } from 'react-icons/cg';
import SectionFood from "./SectionFood";

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
                        <div className="h-36  p-2 flex flex-col gap-3 cursor-pointer">
                            <div className="h-24">
                                <img
                                    className="rounded-lg aspect-auto" 
                                    src="/src/assets/cardapio/carnes.jpg" alt="Prato de carne" 
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="text-vinho lg:text-lg font-bold border-b-2 border-vinho">
                                    Carnes
                                </p>
                            </div>
                        </div>
                        <div className="h-36  p-2 flex flex-col gap-3 cursor-pointer">
                            <div className="h-24">
                                <img
                                    className="rounded-lg aspect-auto" 
                                    src="/src/assets/cardapio/petiscos.png" alt="Prato de Petisco" 
                                />
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="text-vinho lg:text-lg font-bold">
                                    Petiscos
                                </p>
                            </div>
                        </div>
                        <div className="h-36  p-2 flex flex-col gap-3 cursor-pointer">
                            <div className="h-24">
                                <img
                                    className="rounded-lg aspect-auto" 
                                    src="/src/assets/cardapio/massas.jpg" alt="Prato de massas" 
                                    />
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="text-vinho lg:text-lg font-bold">
                                    Massas
                                </p>
                            </div>
                        </div>
                        <div className="h-36  p-2 flex flex-col gap-3 cursor-pointer">
                            <div className="h-24">
                                <img
                                    className="rounded-lg aspect-auto" 
                                    src="/src/assets/cardapio/guarnicoes.png" alt="Arroz" 
                                    />
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="text-vinho lg:text-lg font-bold">
                                    Guarnições
                                </p>
                            </div>
                        </div>
                        <div className="h-36  p-2 flex flex-col gap-3 cursor-pointer">
                            <div className="h-24">
                                <img
                                    className="rounded-lg aspect-auto" 
                                    src="/src/assets/cardapio/bebidas.png" alt="Bebidas" 
                                    />
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="text-vinho lg:text-lg font-bold">
                                    Bebidas
                                </p>
                            </div>
                        </div>
                        <div className="h-36  p-2 flex flex-col gap-3 cursor-pointer">
                            <div className="h-24">
                                <img
                                    className="rounded-lg aspect-auto" 
                                    src="/src/assets/cardapio/sobremesas.png" alt="Sanduíche de Brownie" 
                                    />
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="text-vinho lg:text-lg font-bold">
                                    Sobremesas
                                </p>
                            </div>
                        </div>
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