import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily Games - Descubra jogos incríveis para se divertir",
  description: "São milhares de jogos separados e preparados para você",
  keywords: ["games", "jogos", "steam", "playstation", "gamer", "console"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
