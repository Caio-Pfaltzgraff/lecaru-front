import { Outlet } from "react-router-dom";
import Banner from "../Banner";

const DefaultPage = ({children} : {children?: React.ReactNode}) => {
  return (
    <>
      <Banner />
      <main className="espacamento flex flex-col">
        <Outlet />
        {children}
      </main>
    </>
  );
};

export default DefaultPage;
