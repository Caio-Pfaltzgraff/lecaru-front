import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation()

    useEffect(() => {
      setMenuOpen(false)
    }, [location])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return(
        <nav className='bg-azul-escuro'>
        <div className='espacamento py-2 md:py-3 lg:py-4'>
          <div className="flex items-center justify-between">
            <div className="flex items-center ">
              <h1 className="flex-shrink-0">
                <Link to="/" className="logo">Lecaru</Link>
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center md:gap-12 lg:gap-16 xl:gap-20">
                <Link to="/" className={`navLink ${location.pathname === '/' ? 'border-b-2 border-azul-claro' : ''}`}>
                  Home
                </Link>
                <Link to="/sobre" className={`navLink ${location.pathname === '/sobre' ? 'border-b-2 border-azul-claro' : ''}`}>
                  Sobre
                </Link>
                <Link to="/cardapio" className={`navLink ${location.pathname === '/cardapio' ? 'border-b-2 border-azul-claro' : ''}`}>
                  Cardápio
                </Link>
                <Link to="/unidades" className={`navLink ${location.pathname === '/unidades' ? 'border-b-2 border-azul-claro' : ''}`}>
                  Unidades
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex mr-2 items-center justify-center rounded-md text-gray-100 text-3xl"
                onClick={toggleMenu}
              >
                {menuOpen ? <FaXmark /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-5 sm:px-3">
              <Link to="/" className={`navLinkMobile ${location.pathname === '/' ? 'text-azul-claro' : ''}`}>
                Home
              </Link>
              <Link to="/sobre" className={`navLinkMobile ${location.pathname === '/sobre' ? 'text-azul-claro' : ''}`}>
                Sobre
              </Link>
              <Link to="/cardapio" className={`navLinkMobile ${location.pathname === '/cardapio' ? 'text-azul-claro' : ''}`}>
                Cardápio
              </Link>
              <Link to="/unidades" className={`navLinkMobile ${location.pathname === '/unidades' ? 'text-azul-claro' : ''}`}>
                Unidades
              </Link>
            </div>
          </div>
        )}
      </nav>
    )
}

export default NavBar