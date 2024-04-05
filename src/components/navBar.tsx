import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  function handlerToggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-lecaru-blue-dark md:border-b-2 md:border-lecaru-gold py-3 paddingPage">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <Link to='/'>
          <h1 className="text-lecaru-blue-light text-3xl font-medium font-title italic md:hover:logoShadow">Lecaru</h1>
        </Link>

        <div className="md:hidden">
          {menuOpen 
            ? <MdClose className="text-gray-100 size-7 cursor-pointer" onClick={handlerToggleMenu}/>
            : <FaBars className="text-gray-100 size-7 cursor-pointer" onClick={handlerToggleMenu}/>
          }
        </div>

        <div className="hidden md:flex gap-4">
          <Link 
            to='/' 
            className={`navLink ${location.pathname === '/' && 'navLink-inPage'}`}
          >
            Home
          </Link>
          <Link 
            to='/sobre' 
            className={`navLink ${location.pathname === '/sobre' && 'navLink-inPage'}`}
          >
            Sobre
          </Link>
          <Link 
            to='/cardapio' 
            className={`navLink ${location.pathname === '/cardapio' && 'navLink-inPage'}`}
          >
            Cardápio
          </Link>
          <Link 
            to='/unidades' 
            className={`navLink ${location.pathname === '/unidades' && 'navLink-inPage'}`}
          >
            Unidades
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="h-screen w-full absolute md:hidden bg-lecaru-blue-dark">
          <div className="flex flex-col justify-center items-center h-full gap-16">
            <Link 
              to="/" 
              className={`navLinkMobile ${location.pathname === '/' && 'text-lecaru-blue-light'}`}
            >
              Home
            </Link>
            <Link 
              to="/sobre" 
              className={`navLinkMobile ${location.pathname === '/sobre' && 'text-lecaru-blue-light'}`}
            >
              Sobre
            </Link>
            <Link 
              to="/cardapio" 
              className={`navLinkMobile ${location.pathname === '/cardapio' && 'text-lecaru-blue-light'}`}
            >
              Cardápio
            </Link>
            <Link 
              to="/unidades" 
              className={`navLinkMobile ${location.pathname === '/unidades' && 'text-lecaru-blue-light'}`}
            >
              Unidades
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}