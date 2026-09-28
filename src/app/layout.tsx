import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["600","700","800"], variable: "--font-poppins", display: "swap" });
export const metadata: Metadata = {
  title: "GRAND HARDWARE & GRAND PRIMA — PASTI MURAH | 7 Cabang Manado",
  description: "Grand Group — ritel bahan bangunan, alat teknik & perlengkapan rumah tangga terlengkap di Sulawesi Utara. 7 cabang strategis, harga PASTI MURAH.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md">Lewati ke konten</a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
