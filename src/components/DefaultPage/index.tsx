import { Outlet } from "react-router-dom";
import Banner from "../Banner";

const DefaultPage = ({children} : {children?: React.ReactNode}) => {
  return (
    <>
      <Banner />
      <main className="espacamento flex flex-col gap-4 my-4">
        <Outlet />
        {children}
      </main>
    </>
  );
};

export default DefaultPage;
