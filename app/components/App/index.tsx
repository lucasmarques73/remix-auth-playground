import { Outlet } from "remix";
import { SideBar } from "../SideBar";

export function App() {
  return (
    <div className="flex flex-grow flex-col">
      <SideBar />
      <Outlet />
    </div>
  );
}
