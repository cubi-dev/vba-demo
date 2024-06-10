import type { Viewport } from "next";
import { Inter as FontSans } from "next/font/google";
import { Inter } from "next/font/google";
// import { cn } from "@/lib/utils";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
    className={inter.className}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
