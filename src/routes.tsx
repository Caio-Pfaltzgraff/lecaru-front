import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultPage } from "./components/defaultPage";
import { ScrollToTop } from "./components/scrollToTop";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { NotFound } from "./pages/NotFound";
import { Units } from "./pages/Units";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/cardapio' element={<Menu />} />
          <Route path='/unidades' element={<Units />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  )
}