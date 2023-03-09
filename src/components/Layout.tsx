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
        body {
          margin: 0;
        }
        .wrapper {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
