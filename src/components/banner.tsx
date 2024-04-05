import { useLocation } from "react-router-dom";

export function Banner() {
  const location = useLocation();
  const backgroundHome = location.pathname === "/" ? 'bg-home' : ""
  const backgroundAbout = location.pathname === "/sobre" ? 'bg-about' : ""
  const backgroundMenu = location.pathname === "/cardapio" ? 'bg-menu' : ""
  const backgroundUnits = location.pathname === "/unidades" ? 'bg-units' : ""

  return (
    <div className={`banner ${backgroundHome} ${backgroundMenu} ${backgroundUnits} ${backgroundAbout}`}>
      <div className="w-2/5 px-1">
        <p className="text-white text-5xl xl:text-6xl font-cursive font-medium">
          {location.pathname === "/" && "Sabores que contam histórias"}
          {location.pathname === "/sobre" && "Mais sobre o Lecaru"}
          {location.pathname === "/cardapio" && "Confira nosso Menu"}
          {location.pathname === "/unidades" && "Venha visitar uma de nossas unidades"}
        </p>
      </div>
    </div>
  )
}