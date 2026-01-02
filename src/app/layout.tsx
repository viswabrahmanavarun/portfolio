import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Varun | Software Engineer",
  description: "Professional Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
