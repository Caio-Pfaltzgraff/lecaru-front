import { Outlet } from "react-router-dom";
import Banner from "../Banner";

const DefaultPage = ({children} : {children?: React.ReactNode}) => {
  return (
    <>
      <Banner />
      <div className="espacamento">
        <Outlet />
        {children}
      </div>
    </>
  );
};

export default DefaultPage;
