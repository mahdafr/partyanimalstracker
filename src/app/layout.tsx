import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PAThemeProvider } from "./theme_provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Party Animals Tracker",
  description: "An online tool to track mission progress in Party Animals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
