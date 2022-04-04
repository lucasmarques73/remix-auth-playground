import { Footer } from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-grow flex-col">
      <Header isAuthenticated={false} />
      <main className="container mx-auto flex-grow px-4">{children}</main>
      <Footer />
    </div>
  );
}
