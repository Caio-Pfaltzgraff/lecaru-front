import { Outlet } from "react-router-dom";
import { Banner } from "./banner";
import { Footer } from "./footer";
import { NavBar } from "./navBar";

export function DefaultPage() {
  return (
    <>
      <header className="w-full">
        <NavBar />
        <Banner />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}