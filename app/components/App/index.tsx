import { Outlet } from "remix";
import { SideBar } from "../SideBar";

export function App() {
  return (
    <>
    <SideBar />
    <Outlet />
    </>
  )
}
