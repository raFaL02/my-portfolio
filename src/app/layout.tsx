import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";
import NavbarMenu from "@/components/navibar-menu";
import ScrollToTop from "@/components/scroll-to-top";

const comic = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-amatic",
});

export const metadata: Metadata = {
  title: "Rafael Cruz Developer",
  description: "Portfólio para mostrar um pouco mais minha tragetória",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${comic.className} dark antialiased`}>
        <ScrollToTop />
        <NavbarMenu />
        {children}
      </body>
    </html>
  );
}
