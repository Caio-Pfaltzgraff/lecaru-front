import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import DefaultPage from './components/DefaultPage'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Cardapio from './pages/Cardapio'
import Unidades from './pages/Unidades'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    <Route index element={<Home />} />
                    <Route path='sobre' element={<Sobre />} />
                    <Route path='cardapio' element={<Cardapio />} />
                    <Route path='unidades' element={<Unidades />} />
                </Route>
            </Routes>
            <footer className="absolute bottom-0 left-1/2 -translate-x-1/2  bg-orange-300 w-full h-11">
                <div className="flex justify-center items-center">
                    <p>Desenvolvido por Caio</p>
                </div>
            </footer>
        </BrowserRouter>
    )
}

export default AppRouter