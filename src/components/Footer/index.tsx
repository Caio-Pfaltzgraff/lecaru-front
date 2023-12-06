import { FaInstagram, FaXTwitter, FaYoutube  } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-azul-escuro py-3 espacamento">
        <div className="flex justify-between items-center flex-col md:flex-row gap-2">
            <div className="flex gap-5 text-gray-300">
                <a className="text-3xl" href="#"><FaInstagram /></a>
                <a className="text-3xl" href="#"><FaFacebookF /></a>
                <a className="text-3xl" href="#"><FaXTwitter /></a>
                <a className="text-3xl" href="#"><FaYoutube /></a>
            </div>
            <div className="mt-2">
                <p className="text-gray-300">
                    © Todos os direitos reservados - Lecaru - 2023
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
