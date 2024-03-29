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
import AdminSubCategories from './pages/Admin/SubCategories/AdminSubCategories'
import AdminFormSubCategories from './pages/Admin/SubCategories/AdminFormSubCategories'
import AdminRestaurantes from './pages/Admin/Restaurantes/AdminRestaurante'
import AdminFormRestaurantes from './pages/Admin/Restaurantes/AdminFormRestaurantes'
import NotFound from './pages/NotFound'

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
                    <Route path='produtos/:id' element={<AdminFormProdutos />} />
                    <Route path='subcategorias' element={<AdminSubCategories />} />
                    <Route path='subcategorias/novo' element={<AdminFormSubCategories />} />
                    <Route path='subcategorias/:id' element={<AdminFormSubCategories />} />
                    <Route path='restaurantes' element={<AdminRestaurantes />} />
                    <Route path='restaurantes/novo' element={<AdminFormRestaurantes />} />
                    <Route path='restaurantes/:id' element={<AdminFormRestaurantes />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
            <ScrollToTop />
        </BrowserRouter>
    )
}

export default AppRouter