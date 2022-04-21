import { Form, Link } from "remix";

export function WorkoutForm() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Form method="post" className="w-full">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="flex flex-col">
              <div className="mb-6 flex-grow">
                <label
                  htmlFor="workout-name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nome do treino
                </label>
                <input
                  type="text"
                  name="workout-name"
                  id="workout-name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:sky-700 focus:border-sky-700 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mb-6 flex-grow">
                <label
                  htmlFor="workout-status"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Status do treino
                </label>
                <select
                  id="workout-status"
                  name="workout-status"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:sky-700 focus:border-sky-700 block w-full p-2.5"
                >
                  <option>Em Construção</option>
                  <option>Ativo</option>
                  <option>Inativo</option>
                </select>
              </div>
              <div className="mb-6 flex flex-row justify-between">
                <div className="w-1/2 mr-2">
                  <label
                    htmlFor="start-date"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Data de início
                  </label>
                  <input
                    type="date"
                    name="start-date"
                    id="start-date"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:sky-700 focus:border-sky-700 block w-full p-2.5"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label
                    htmlFor="start-date"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Data de início
                  </label>
                  <input
                    type="date"
                    name="start-date"
                    id="start-date"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:sky-700 focus:border-sky-700 block w-full p-2.5"
                  />
                </div>
              </div>
            </div>
            <hr />
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <Link
              to="/app/workouts"
              className="inline-flex mr-2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              className="inline-flex ml-2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-700 hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-700"
            >
              Salvar
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}
