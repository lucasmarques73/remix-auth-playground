import { Logo } from "~/components/Logo";
import { LoginButton } from "../LoginButton";
import { LogoutButton } from "../LogoutButton";

interface HeaderProps {
  isAuthenticated: boolean;
}

export default function Header({ isAuthenticated }: HeaderProps) {
  return (
    <header className="flex flex-row px-10 py-2 items-center justify-between border-b-2 shadow-sm">
      <Logo />
      <>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</>
    </header>
  );
}
