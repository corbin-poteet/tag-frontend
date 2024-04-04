import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thrive Pet Healthcare | Fullstack CRUD Application",
  description: "A simple CRUD full stack web application created for Thrive Pet Healthcare's interview project.",
  icons: {
    icon: {
      url: "/favicon.ico",
      type: "image/x-icon",
    },
  }
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
