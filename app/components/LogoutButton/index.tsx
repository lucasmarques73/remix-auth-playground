import { Form } from "remix";

export function LogoutButton() {
  return (
    <Form action="/logout" method="post">
      <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-sky-700 rounded-md shadow-sm text-base font-medium text-gray-500 hover:text-gray-900">
        Sair
      </button>
    </Form>
  );
}
