import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return(
        <nav className='bg-azul-escuro'>
        <div className='max-w-7xl mx-auto px-4 md:px-6  py-2 md:py-4'>
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ">
              <div className="flex-shrink-0">
                <a href="/" className="text-azul-claro font-logo font-semibold italic text-3xl md:text-4xl lg:text-5xl hover:logo-shadow">Lecaru</a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center md:gap-12">
                <a href="/" className="text-bege font-semibold text-xl lg:text-2xl hover:text-azul-claro border-b-2 border-azul-claro">
                  Home
                </a>
                <a href="/" className="text-bege font-semibold text-xl lg:text-2xl hover:text-azul-claro">
                  Sobre
                </a>
                <a href="/" className="text-bege font-semibold text-xl lg:text-2xl hover:text-azul-claro">
                  Cardápio
                </a>
                <a href="/" className="text-bege font-semibold text-xl lg:text-2xl hover:text-azul-claro">
                  Unidades
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-bege text-3xl"
                onClick={toggleMenu}
              >
                {menuOpen ? <FaXmark /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-4 sm:px-3">
              <a href="/" className="text-azul-claro font-semibold text-xl block text-center hover:text-azul-claro">
                Home
              </a>
              <a href="/" className="text-bege font-semibold text-xl block text-center hover:text-azul-claro">
                Sobre
              </a>
              <a href="/" className="text-bege font-semibold text-xl block text-center hover:text-azul-claro">
                Cardápio
              </a>
              <a href="/" className="text-bege font-semibold text-xl block text-center hover:text-azul-claro">
                Unidades
              </a>
            </div>
          </div>
        )}
      </nav>
    )
}

export default NavBar