import type { LoaderFunction } from "remix";
import { Form, useLoaderData } from "remix";
import { AuthLoaderData, isAuthenticated } from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  return isAuthenticated(request);
};

export default function Screen() {
  const { profile } = useLoaderData<AuthLoaderData>();
  return (
    <>
      <Form method="post" action="/logout">
        <button>Log Out</button>
      </Form>

      <hr />

      <pre>
        <code>{JSON.stringify(profile, null, 2)}</code>
      </pre>
    </>
  );
}
