import { Link } from "react-router-dom";
import { LoaderFunction, useLoaderData } from "remix";
import { AuthLoaderData, isAuthenticated } from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  return isAuthenticated(request);
};

export function SideBar() {
  const { profile } = useLoaderData<AuthLoaderData>();
  return (
    <div className="w-60 h-full border-r-2 shadow-md bg-white invisible md:visible">
      <div className="pt-4 pb-2 px-6">
        <Link to="/app">
          <div className="flex items-center">
            <div className="shrink-0">
              <img
                src={profile.avatar}
                className="rounded-full w-10"
                alt="Avatar"
              ></img>
            </div>
            <div className="grow ml-3">
              <p className="text-sm font-semibold text-sky-700">
                {profile.name}
              </p>
            </div>
          </div>
        </Link>
      </div>
      <ul className="px-1">
        <li className="relative">
          <Link
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-900 text-ellipsis whitespace-nowrap rounded hover:text-sky-700 hover:bg-blue-50 transition duration-300 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            to={"workouts"}
          >
            Gerenciar Treinos
          </Link>
        </li>
        <li className="relative">
          <Link
            className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-900 text-ellipsis whitespace-nowrap rounded hover:text-sky-700 hover:bg-blue-50 transition duration-300 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            to={"exercises"}
          >
            Ver Exercícios Disponíveis
          </Link>
        </li>
      </ul>
    </div>
  );
}
