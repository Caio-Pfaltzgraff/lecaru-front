import { Outlet } from "react-router-dom";
import { NavBar } from "./navBar";

export function DefaultPageAdmin() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="mb-6">
        <Outlet />
      </main>
    </>
  )
}