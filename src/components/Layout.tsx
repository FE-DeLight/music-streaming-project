import React from "react";
import Nav from "./Nav";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="wrapper">
      <Nav />
      {children}
      <style jsx>{`
        .wrapper {
          max-width: 800px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
