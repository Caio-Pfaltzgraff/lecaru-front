import { LuArrowDownUp, LuSlidersHorizontal } from "react-icons/lu";
import { Search } from "../../components/search";
import { Title } from "../../components/title";

export function Menu() {
  return (
    <div  className="space-y-6 lg:space-y-8 mt-4">
      <div className="max-w-screen-xl mx-auto paddingPage space-y-4">
        <Title>Cardápio</Title>
        <Search placeholder="Buscar"/>
        <div>
          <button><LuSlidersHorizontal /> Filtrar</button>
          <button><LuArrowDownUp /> Ordenar</button>
        </div>
      </div>
    </div>
  )
}