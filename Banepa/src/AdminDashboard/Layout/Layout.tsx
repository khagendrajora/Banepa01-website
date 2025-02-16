import { Outlet } from "react-router";
import { Dashboard } from "../Dashboard";

export const Layout = () => {
  return (
    <>
      <Dashboard />
      <Outlet />
    </>
  );
};
