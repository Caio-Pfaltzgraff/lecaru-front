import { FaInstagram, FaXTwitter, FaYoutube  } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-azul-escuro py-3 md:py-5 espacamento border-t-2 border-dourado">
        <div className="flex justify-between items-center flex-col md:flex-row gap-2">
            <div className="flex gap-4 text-white">
                <a className="text-2xl bg-gray-700 hover:bg-opacity-80 p-2 rounded-full" href="#"><FaInstagram /></a>
                <a className="text-2xl bg-gray-700 hover:bg-opacity-80 p-2 rounded-full" href="#"><FaFacebookF /></a>
                <a className="text-2xl bg-gray-700 hover:bg-opacity-80 p-2 rounded-full" href="#"><FaXTwitter /></a>
                <a className="text-2xl bg-gray-700 hover:bg-opacity-80 p-2 rounded-full" href="#"><FaYoutube /></a>
            </div>
            <div className="mt-4 md:mt-0">
                <p className="text-white">
                    © Todos os direitos reservados - Lecaru - 2023
                </p>
            </div>
            <div className="mt-4 md:mt-0">
                <p className="text-white">
                    Desenvolvido por <a className="font-bold hover:underline" href="https://github.com/Caio-Pfaltzgraff/" target="_blank">Caio</a>
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
