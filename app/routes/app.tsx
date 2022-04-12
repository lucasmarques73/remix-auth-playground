import { LoaderFunction } from "remix";
import { App } from "~/components/App";
import { Layout } from "~/components/Layout";
import { isAuthenticated } from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  return isAuthenticated(request);
};

export default function Screen() {
  return (
    <Layout >
      <App  />
    </Layout>
  );
}
