import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/Navbar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="m-4">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
