import { useNavigate } from 'react-router-dom';
import notFoundImage from '/notfound.png';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center h-screen paddingPage'>
      <div className='flex flex-col md:flex-row md:border md:rounded-xl md:shadow-lg'>

        <div className='md:w-1/2'>
          <img src={notFoundImage} alt="Cozinheiro procurando algo" />
        </div>

        <div className='md:w-1/2 flex flex-col md:justify-center gap-2.5 md:bg-lecaru-blue-dark md:rounded-r-xl p-4'>
          <p className='text-3xl text-lecaru-blue-light font-bold font-title'>Oops...</p>
          <p className='text-3xl text-lecaru-blue-light font-bold font-title'>Página não encontrada.</p>
          <p className='md:text-white'>Tem certeza que o endereço do site está correto?</p>
          <div className='flex justify-center'>
            <button 
              onClick={() => navigate(-1)}
              className='bg-lecaru-blue-dark md:bg-lecaru-gold py-2 px-3 rounded-lg text-white md:text-black font-semibold tracking-wide mt-4 transition-transform md:hover:scale-110 duration-300'
            >
              Retornar
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}