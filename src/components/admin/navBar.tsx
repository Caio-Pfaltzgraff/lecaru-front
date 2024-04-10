import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handlerToggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="w-full bg-lecaru-blue-dark md:border-b-2 md:border-lecaru-gold py-4 paddingPage">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <h6 className="text-lecaru-blue-light text-2xl md:text-3xl font-medium font-logo">Administração</h6>

        <div className="md:hidden">
          {menuOpen 
            ? <MdClose className="text-gray-100 size-7 cursor-pointer" onClick={handlerToggleMenu}/>
            : <FaBars className="text-gray-100 size-7 cursor-pointer" onClick={handlerToggleMenu}/>
          }
        </div>

        <div className="hidden md:flex gap-4">
          <Link 
            to='/admin' 
            className='navLink'
          >
            Produtos
          </Link>
          <Link 
            to='/admin/subcategorias' 
            className='navLink'
          >
            Subcategorias
          </Link>
          <Link 
            to='/admin/restaurantes' 
            className='navLink'
          >
            Restaurantes
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="h-screen w-full md:hidden bg-lecaru-blue-dark">
          <div className="flex flex-col justify-center items-center h-full gap-16">
            <Link 
              to="/admin" 
              className='navLinkMobile'
              onClick={() => handlerToggleMenu()}
            >
              Produtos
            </Link>
            <Link 
              to="/admin/subcategorias" 
              className='navLinkMobile'
              onClick={() => handlerToggleMenu()}
            >
              Subcategorias
            </Link>
            <Link 
              to="/admin/restaurants" 
              className='navLinkMobile'
              onClick={() => handlerToggleMenu()}
            >
              Restaurantes
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}