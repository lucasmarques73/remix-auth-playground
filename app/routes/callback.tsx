import { LoaderFunction, redirect } from "remix";

import { auth } from "~/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
  try {
    return await auth.authenticate("auth0", request, {
      successRedirect: "/private",
      failureRedirect: "/",
      throwOnError: true,
    });
  } catch (error) {
    return redirect("/");
  }
};
