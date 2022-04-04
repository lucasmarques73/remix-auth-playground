import { json, LoaderFunction, useLoaderData } from "remix";
import { Home } from "~/components/Home";
import { Layout } from "~/components/Layout";
import { auth, getSession } from "~/services/auth.server";

type LoaderData = {
  error: { message: string } | null;
  isAuthenticated: boolean;
};

export const loader: LoaderFunction = async ({ request }) => {
  const profile = await auth.isAuthenticated(request, {
    successRedirect: "/app",
  });
  const session = await getSession(request.headers.get("Cookie"));
  const error = session.get(auth.sessionErrorKey) as LoaderData["error"];
  return json<LoaderData>({ error, isAuthenticated: !!profile });
};

export default function Index() {
  const { error, isAuthenticated } = useLoaderData<LoaderData>();
  console.log({ error, isAuthenticated });
  return (
    <Layout isAuthenticated={isAuthenticated}>
      {error ? <div>{error.message}</div> : null}
      <Home />
    </Layout>
  );
}
