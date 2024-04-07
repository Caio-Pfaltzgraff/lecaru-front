import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultPage } from "./components/defaultPage";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
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
      </Routes>
    </BrowserRouter>
  )
}