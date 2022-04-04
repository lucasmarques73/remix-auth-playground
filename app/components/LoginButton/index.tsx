import { Form } from "remix";

export function LoginButton() {
  return (
    <Form action="/auth" method="post">
      <button className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-sky-700 hover:bg-sky-800">
        Entrar
      </button>
    </Form>
  );
}
