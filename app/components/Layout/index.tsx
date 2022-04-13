import { Footer } from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-grow flex-col h-screen">
      <Header  />
      <main className="container flex-grow flex">{children}</main>
      <Footer />
    </div>
  );
}
