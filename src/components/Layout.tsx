import { ReactNode } from "react";
import Navigation from "./Navigation";
import FloatingContactButton from "./FloatingContactButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <FloatingContactButton />
    </div>
  );
};

export default Layout;