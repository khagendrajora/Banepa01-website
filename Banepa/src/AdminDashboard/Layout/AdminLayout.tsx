import { Outlet } from "react-router";
import { Dashboard } from "../Dashboard";

export const AdminLayout = () => {
  return (
    <>
      <Dashboard />
      <Outlet />
    </>
  );
};
