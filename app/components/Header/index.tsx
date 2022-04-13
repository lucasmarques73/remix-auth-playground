import { LoaderFunction, useLoaderData } from "remix";
import { Logo } from "~/components/Logo";
import { AuthLoaderData, isAuthenticated } from "~/services/auth.server";
import { LoginButton } from "../LoginButton";
import { LogoutButton } from "../LogoutButton";

export const loader: LoaderFunction = async ({ request }) => {
  return isAuthenticated(request);
};

export default function Header() {
  const { profile } = useLoaderData<AuthLoaderData>();
  return (
    <header className="flex flex-row px-10 py-2 items-center justify-between border-b-2 shadow-sm">
      <Logo />
        {profile ? (
          <>
            <h2>Bem vindo, {profile.name}</h2>
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
    </header>
  );
}
