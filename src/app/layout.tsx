import "./globals.css";
import { Inter } from "@next/font/google";
import Nav from "./analytics/Nav/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head />
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
