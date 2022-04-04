import { Footer } from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children?: React.ReactNode;
  isAuthenticated: boolean;
}

export function Layout({ children, isAuthenticated }: LayoutProps) {
  return (
    <div className="flex flex-grow flex-col">
      <Header isAuthenticated={isAuthenticated} />
      <main className="container mx-auto flex-grow px-4">{children}</main>
      <Footer />
    </div>
  );
}
