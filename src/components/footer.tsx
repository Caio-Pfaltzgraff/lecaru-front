import { FaFacebook, FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="w-full bg-lecaru-blue-dark mt-12 border-t-2 border-lecaru-gold">
      <div className="max-w-screen-xl mx-auto py-4 paddingPage space-y-6">
        <div className="flex flex-col gap-8 md:gap-2 md:flex-row md:justify-between">
          <div className="space-y-4">
            <p className="text-gray-200 text-lg text-center md:text-start">Navegue</p>
            <div className="grid gap-6">
              <Link className="text-gray-200 md:hover:text-lecaru-blue-light" to='/'>Home</Link>
              <Link className="text-gray-200 md:hover:text-lecaru-blue-light" to='/sobre'>Sobre</Link>
              <Link className="text-gray-200 md:hover:text-lecaru-blue-light" to='/cardapio'>Cardápio</Link>
              <Link className="text-gray-200 md:hover:text-lecaru-blue-light" to='/unidades'>Unidades</Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-200 text-lg text-center md:text-start">Unidades</p>
            <div className="grid grid-cols-2 gap-y-6 md:gap-x-3">
              <Link className="text-gray-200 text-sm md:hover:text-lecaru-blue-light" to='/unidades'>Barra da Tijuca</Link>
              <Link className="text-gray-200 text-sm md:hover:text-lecaru-blue-light" to='/unidades'>Nova Iguaçu</Link>
              <Link className="text-gray-200 text-sm md:hover:text-lecaru-blue-light" to='/unidades'>Cabo Frio</Link>
              <Link className="text-gray-200 text-sm md:hover:text-lecaru-blue-light" to='/unidades'>Bela Vista</Link>
              <Link className="text-gray-200 text-sm md:hover:text-lecaru-blue-light" to='/unidades'>Balneário Camboriú</Link>
              <Link className="text-gray-200 text-sm md:hover:text-lecaru-blue-light" to='/unidades'>Belo Horizonte</Link>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-200 text-lg text-center md:text-start">Links</p>
            <div className="flex flex-col gap-4">
              <a href="https://instagram.com" target="_blank" className="flex gap-2 items-center p-2 border rounded-sm rounded-bl-xl rounded-tr-xl text-gray-200 md:hover:text-lecaru-blue-light md:hover:border-lecaru-blue-light">
                <FaInstagram className="size-6" />
                <span className="text-sm">@restaurantelecaru</span>
              </a>
              <a href="https://facebook.com" target="_blank" className="flex gap-2 items-center p-2 border rounded-sm rounded-bl-xl rounded-tr-xl text-gray-200 md:hover:text-lecaru-blue-light md:hover:border-lecaru-blue-light">
                <FaFacebook className="size-6" />
                <span className="text-sm">restaurantelecaru</span>
              </a>
              <a href="https://x.com" target="_blank" className="flex gap-2 items-center p-2 border rounded-sm rounded-bl-xl rounded-tr-xl text-gray-200 md:hover:text-lecaru-blue-light md:hover:border-lecaru-blue-light">
                <FaXTwitter className="size-6" />
                <span className="text-sm">lecaru</span>
              </a>
              <a href="https://whatsapp.com" target="_blank" className="flex gap-2 items-center p-2 border rounded-sm rounded-bl-xl rounded-tr-xl text-gray-200 md:hover:text-lecaru-blue-light md:hover:border-lecaru-blue-light">
                <FaWhatsapp className="size-6" />
                <span className="text-sm">+55 (21) 99999-9999</span>
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-500"/>

        <div className="flex flex-col gap-3">
          <p className="text-center text-gray-200">© Todos os direitos reservados - Lecaru - {new Date().getFullYear()}</p>
          <p className="text-center text-gray-200">Desenvolvido por <a href="https://github.com/Caio-Pfaltzgraff" target="_blank" className="underline text-lecaru-blue-light font-semibold">Caio Pfaltzgraff</a></p>
        </div>
      </div>
    </footer>
  )
}