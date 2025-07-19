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
      
      {/* Footer with Admin Login */}
      <footer className="bg-muted/30 border-t border-border/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © 2024 Malick Umar. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <p className="text-sm text-muted-foreground">
                Creative That Clicks. Work That Wins.
              </p>
              <a 
                href="/admin" 
                className="text-xs text-muted-foreground/60 hover:text-primary transition-colors"
              >
                Admin
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;