import { Outlet } from "react-router-dom";
import Banner from "../Banner";
import NavBar from "../NavBar";
import Footer from "../Footer";

const DefaultPage = ({children} : {children?: React.ReactNode}) => {

  return (
    <>
      <NavBar />
      <Banner />
      <main className="espacamento flex flex-col">
        <Outlet />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DefaultPage;
