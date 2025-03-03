import FooterSection from "./Component/Footer/Footer";
import Navbar from "./Component/NavBar/Index";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="mt-15 overflow-x-hidden">
        <Outlet />
      </main>
      <FooterSection />
    </>
  );
};

export default Layout;
