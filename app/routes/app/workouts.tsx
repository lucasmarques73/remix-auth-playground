import { LoaderFunction } from "remix";
import { isAuthenticated } from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  return isAuthenticated(request);
};

export default function Screen() {
  return (
    <h1 className="w-full">Treinos</h1>
  );
}
