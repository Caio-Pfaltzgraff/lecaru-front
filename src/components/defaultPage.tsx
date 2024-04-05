import { Outlet } from "react-router-dom";
import { NavBar } from "./navBar";

export function DefaultPage() {
  return (
    <>
      <header className="h-16 w-full">
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}