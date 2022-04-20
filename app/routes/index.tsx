import { json, LoaderFunction, useLoaderData } from "remix";
import { Home } from "~/components/Home";
import { Layout } from "~/components/Layout";
import { auth, getSession } from "~/services/auth.server";

type LoaderData = {
  error: { message: string } | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  await auth.isAuthenticated(request, {
    successRedirect: "/app",
  });
  const session = await getSession(request.headers.get("Cookie"));
  const error = session.get(auth.sessionErrorKey) as LoaderData["error"];
  return json<LoaderData>({ error });
};

export default function () {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
