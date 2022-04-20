import { LoaderFunction } from "remix";
import { Workouts } from "~/components/Workouts";
import { isAuthenticated } from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  return isAuthenticated(request);
};

export default function () {
  return <Workouts />;
}
