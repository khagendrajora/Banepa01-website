import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import { Review } from "../Components/Review";
import { Footer } from "../Components/Footer";

export const Layout = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Outlet />
        <Review />
        <Footer />
      </div>
    </>
  );
};
