import { useEffect } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
    import("@/mocks");
  }
  return (
    <html lang="ko">
      <head />
      <body>{children}</body>
    </html>
  );
}
