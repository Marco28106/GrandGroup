import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-display", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });
export const metadata: Metadata = {
  title: "Grand Group — PASTI MURAH | 7 Cabang Manado",
  description: "Grand Group — ritel bahan bangunan, alat teknik & perlengkapan rumah tangga terlengkap di Sulawesi Utara. 7 cabang, harga PASTI MURAH.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="smooth-scroll" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{const s=localStorage.getItem('theme');const d=s? s==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches; if(d) document.documentElement.classList.add('dark')}catch(e){}` }} />
      </head>
      <body className={`${cormorant.variable} ${jakarta.variable} antialiased`}>
        <ThemeProvider>
          <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground focus:shadow-lg">Lewati ke konten</a>
          <Header />
          <main id="content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
