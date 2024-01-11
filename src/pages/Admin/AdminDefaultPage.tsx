import { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6";
import { Link, Outlet, useLocation } from "react-router-dom"

const AdminDefaultPage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation()
    
    useEffect(() => {
        setMenuOpen(false);
    }, [location])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <>
            <nav className="bg-azul-escuro md:border-b-2 md:border-dourado">
                <div className="espacamento py-3 lg:py-4">
                    <div className="flex items-center justify-between md:justify-start">
                        <h5 className="text-xl lg:text-2xl font-medium text-azul-claro font-logo -mt-1">
                            Administração
                        </h5>
                        <div className="hidden md:block ml-2 lg:ml-5 xl:ml-10">
                            <div className="flex items-center md:gap-8 lg:gap-12 xl:gap-16">
                                <Link to="/admin" className="navLink text-sm lg:text-base">Produtos</Link>
                                <Link to="produtos/novo" className="navLink text-sm lg:text-base">Novo Produto</Link>
                                <Link to="subcategorias" className="navLink text-sm lg:text-base">Categorias</Link>
                                <Link to="subcategorias/novo" className="navLink text-sm lg:text-base">Nova Categoria</Link>
                                <Link to="restaurantes" className="navLink text-sm lg:text-base">Restaurantes</Link>
                                <Link to="restaurantes/novo" className="navLink text-sm lg:text-base">Novo Restaurante</Link>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button
                            className="inline-flex mr-2 items-center justify-center rounded-md text-gray-100 text-3xl hover:text-dourado"
                            onClick={toggleMenu}
                            >
                                {menuOpen ? <FaXmark /> : <FaBars />}
                            </button>
                        </div>
                        </div>
                    </div>
                {menuOpen && (
                    <div className="md:hidden">
                        <div className="flex flex-col gap-4 px-2 pt-2 pb-3 sm:px-3">
                            <Link to="/admin" className="navLinkMobile">Produtos</Link>
                            <Link to="produtos/novo" className="navLinkMobile">Novo Produto</Link>
                            <Link to="categorias" className="navLinkMobile">SubCategorias</Link>
                            <Link to="categorias/novo" className="navLinkMobile">Nova SubCategoria</Link>
                            <Link to="restaurantes" className="navLinkMobile">Restaurantes</Link>
                            <Link to="restaurantes/novo" className="navLinkMobile">Novo Restaurante</Link>
                        </div>
                    </div>
                )}
            </nav>

            <main className="mt-5 mx-2 sm:mx-6 md:mx-12 lg:mx-24 xl:mx-52">
                <Outlet />
            </main>
        </>
    )
}

export default AdminDefaultPage