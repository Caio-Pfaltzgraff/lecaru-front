import { useNavigate } from "react-router-dom";
import imageNotFound from '../../assets/notfound/notfound_amarelo.png';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen p-3">
      <div className="flex flex-col md:flex-row md:border md:rounded-xl md:shadow-md">
        <div className="md:w-1/2">
          <img src={imageNotFound} alt="Cozinheiro procurando algo na cozinha" />
        </div>
        <div className="flex flex-col md:justify-center gap-2 md:bg-azul-escuro md:w-1/2 rounded-r-xl md:p-4">
          <p className="text-4xl text-azul-claro font-bold font-titulo">Oops...</p>
          <h2 className="text-4xl text-azul-claro font-bold font-titulo">Página não encontrada.</h2>
          <p className="text-lg md:text-gray-100 lg:mt-3">Tem certeza que o endereço do site está correto?</p>
          <div className="flex justify-center">
            <button 
              type="button"
              onClick={() => navigate(-1)}
              className="font-semibold bg-azul-escuro text-gray-100 md:text-black lg:text-lg md:bg-dourado p-2 rounded-lg w-28 mt-4"
            >
              Retornar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
