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
    <div className="w-full flex flex-col justify-center items-center">
      <div className="flex items-center my-50">
        <h1 className="text-base tracking-tight font-extrabold text-gray-900 sm:text-lg md:text-xl">
          Gerenciar Treinos
        </h1>
        <Form>
          <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-700 hover:bg-sky-800">
            Novo Treino
          </button>
        </Form>
      </div>

      <div className="relative overflow-x-auto shadow-md rounded-md">
        <table className="text-sm table-auto ">
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
