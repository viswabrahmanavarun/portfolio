import "./globals.css";
import type { ReactNode } from "react";
import BackgroundEffects from "@/components/BackgroundEffects";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Varun Viswabrahmana | Full Stack Developer",
  description: "Portfolio of Varun Viswabrahmana, a Software Engineer and Full Stack Developer specialized in Next.js, TypeScript, and Node.js.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-blue-500/30 selection:text-blue-200">
        <BackgroundEffects />
        <CustomCursor />
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
