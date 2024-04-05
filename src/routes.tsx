import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultPage } from "./components/defaultPage";
import { Home } from "./pages/Home";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}