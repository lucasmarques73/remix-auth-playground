import { LoaderFunction, useLoaderData } from "remix";
import { Layout } from "~/components/Layout";
import { AuthLoaderData, isAuthenticated } from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  return isAuthenticated(request);
};

export default function Screen() {
  const { profile } = useLoaderData<AuthLoaderData>();
  return (
    <Layout isAuthenticated={!!profile}>
      <pre>
        <code>{JSON.stringify(profile, null, 2)}</code>
      </pre>
    </Layout>
  );
}
