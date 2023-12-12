import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import DefaultPage from './components/DefaultPage'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Cardapio from './pages/Cardapio'
import Unidades from './pages/Unidades'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

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
            <Footer />
            <ScrollToTop />
        </BrowserRouter>
    )
}

export default AppRouter