export function WorkoutListItem({ workout }: any) {
  return (
    <tr className="bg-white border-b hover:bg-gray-50 text-center">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {workout.name}
      </th>
      <td className="px-6 py-4">{workout.status}</td>
      <td className="px-6 py-4">{workout.startDate}</td>
      <td className="px-6 py-4">{workout.endDate}</td>
      <td className="px-6 py-4 ">
        <a href="#" className="font-medium text-blue-600 hover:underline">
          Editar
        </a>
      </td>
      <td className="px-6 py-4">
        <a href="#" className="font-medium text-red-600 hover:underline">
          Excluir
        </a>
      </td>
    </tr>
  );
}
