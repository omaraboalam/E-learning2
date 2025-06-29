import { Outlet, Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import NotificationBar from "../components/noteficationBar";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <>
      <NotificationBar />
      <div className="font-BeVietnamPro px-20 flex flex-col gap-20">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
