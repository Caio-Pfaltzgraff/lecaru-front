import { useLocation } from "react-router-dom"

const Banner = () => {
  const location = useLocation()
  const rota = location.pathname
  const backgroundHome = rota === "/" ? 'bg-home' : ""
  const backgroundSobre = rota === "/sobre" ? 'bg-sobre' : ""
  const backgroundCardapio = rota === "/cardapio" ? 'bg-home' : ""
  const backgroundUnidades = rota === "/unidades" ? 'bg-home' : ""

  return(
    <header className={`headerBanner ${backgroundHome} ${backgroundSobre} ${backgroundCardapio} ${backgroundUnidades}`}>
          <div className="text-white font-cursiva font-medium text-5xl xl:text-6xl 2xl:text-7xl w-2/5">
              <h3>
                {location.pathname === "/" && "Sabores que contam histórias"}
                {location.pathname === "/sobre" && "Mais sobre o Lecaru"}
                {location.pathname === "/cardapio" && "Confira nosso Menu"}
                {location.pathname === "/unidades" && "Venha visitar uma de nossas unidades"}
              </h3>
          </div>
    </header>
  )
}

export default Banner