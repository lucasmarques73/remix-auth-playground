import { Form } from "remix";
import { WorkoutListItem } from "../WorkoutListItem";

const workoutItems = Array(5).fill({
  name: "Treino A",
  status: "ativo",
  startDate: "01/04/2022",
  endDate: "01/05/2022",
});

export function Workouts() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center h-20 my-50">
        <h1 className="text-base tracking-tight font-extrabold text-gray-900 sm:text-lg md:text-xl">
          Gerenciar Treinos
        </h1>
      </div>

      <div className="overflow-x-auto shadow-md rounded-md">
        <div className="flex items-center justify-between h-20 my-50">
          <div className="p-4">
            <label htmlFor="table-search" className="sr-only">
              Buscar
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buscar Treino"
              />
            </div>
          </div>
          <Form>
            <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-700 hover:bg-sky-800">
              Novo Treino
            </button>
          </Form>
        </div>
        <table className="text-sm">
          <thead className="text-xs uppercase text-white bg-sky-700">
            <tr>
              <th scope="col" className="px-6 py-3">
                Treino
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Data de Inicio
              </th>
              <th scope="col" className="px-6 py-3">
                Data do Fim
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Editar</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Excluir</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {workoutItems.map((item) => (
              <WorkoutListItem workout={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
