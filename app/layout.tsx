import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruhullah Najafi - Portfolio",
  description: "Portfolio of Ruhullah Najafi - SAP Consultant, TUHH & UC Berkeley Alumni, Math & Science Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
