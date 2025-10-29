import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import BootstrapProvider from "@/components/BootstrapProvider";   
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import "../public/css/chat-tool.css";
import "../public/css/skin-1.css";
import "../public/css/slick-theme.css";
import "../public/css/slick.css";
import "../public/css/style.css";
import "../public/css/style.min.css";
import "../public/css/templete.min.css";
import "../public/css/themify-icons.css";


import "../public/css/font-awesome.css";
import "../public/css/font-awesome.min.css";
import "../public/css/plugins.min.css";
import "../public/css/revolution.min.css";
import ScrollTopButton from "@/components/ScrollTopButton";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; // Import solid icons
// Add other icon packs if needed, e.g., import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas); // Add icons to the library

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Topgun Shooting Academy - Best Academy Gearing for Olympics",
  description: "Topgun Shooting Academy ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <BootstrapProvider>
          <Header />
          {children}
          <Footer />
          <ScrollTopButton />
        </BootstrapProvider>
      </body>
    </html>
  );
}
