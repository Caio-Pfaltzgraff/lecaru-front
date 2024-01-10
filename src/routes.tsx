import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefaultPage from './components/DefaultPage'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Cardapio from './pages/Cardapio'
import Unidades from './pages/Unidades'
import ScrollToTop from './components/ScrollToTop'
import AdminDefaultPage from './pages/Admin/AdminDefaultPage'
import AdminProdutos from './pages/Admin/Produtos/AdminProdutos'
import AdminFormProdutos from './pages/Admin/Produtos/AdminFormProduto'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultPage />}>
                    <Route index element={<Home />} />
                    <Route path='sobre' element={<Sobre />} />
                    <Route path='cardapio' element={<Cardapio />} />
                    <Route path='unidades' element={<Unidades />} />
                </Route>
                <Route path='/admin' element={<AdminDefaultPage />}>
                    <Route index element={<AdminProdutos />} />
                    <Route path='produtos/novo' element={<AdminFormProdutos />} />
                </Route>
            </Routes>
            <ScrollToTop />
        </BrowserRouter>
    )
}

export default AppRouter