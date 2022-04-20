import { LoaderFunction } from "remix";
import { WorkoutForm } from "~/components/WorkoutForm";
import { isAuthenticated } from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  return isAuthenticated(request);
};

export default function () {
  return <WorkoutForm />;
}
