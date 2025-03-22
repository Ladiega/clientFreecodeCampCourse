import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "../styling/sass/main.scss"


import "./globals.css";
import { headers } from "next/headers";
import { getGlobalSettings } from "@/data/loaders";
import { notFound } from "next/navigation";

import { Header } from "@/components/blocks/layout/Header";
import { Footer } from "@/components/blocks/layout/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


// async function loader() {
//   const { data } = await getGlobalSettings();
//   if (!data) throw new Error("Failed to fetch global settings");
//   return { header: data?.header };
// }


async function loader() {
  const { data } = await getGlobalSettings();
  // console.dir(data, { depth: null });
  if (!data) notFound();
  return { header: data?.header, footer: data?.footer };
}


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { header, footer } = await loader();
  console.dir(footer, { depth: null });
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header data={header} />
        {children}
        <Footer data={footer} />
      </body>
    </html>
  );
}
