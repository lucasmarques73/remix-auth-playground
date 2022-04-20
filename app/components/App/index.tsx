import { Outlet } from "remix";
import { SideBar } from "../SideBar";

export function App() {
  return (
    <div className="flex flex-grow">
      <SideBar />
      <div className="w-full flex justify-center">
        <div className="w-3/4 flex">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
