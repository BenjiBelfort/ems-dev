import type { Metadata } from "next";
import { Quicksand, Montserrat, Arimo } from "next/font/google";

import ClientScrollBehaviors from "@/components/scroll/ClientScrollBehaviors";
import NewNavBar from "@/components/NewNavBar";
import Footer from "@/components/Footer";


import "./globals.css";


// Titres principaux
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

// Titres secondaires
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

// Texte courant
const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  display: "swap",
});


export const metadata: Metadata = {
  title: "EMS Audit",
  description: "Expertise comptable et bilan carbone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${quicksand.variable} ${montserrat.variable} ${arimo.variable}`}>
      <body className="min-h-screen flex flex-col mx-auto">
        <ClientScrollBehaviors />
        <NewNavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
