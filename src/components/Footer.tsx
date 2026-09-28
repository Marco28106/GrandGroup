"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, MessageCircle } from "lucide-react";
import { NAV, BRANCHES, CONTACT } from "@/lib/data";
export default function Footer() {
  const [openNav, setOpenNav] = useState(false);
  const [openBranch, setOpenBranch] = useState(false);
  return (
    <footer className="border-t bg-secondary/40">
      <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_0.7fr_1fr] lg:gap-10">
          <div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">Ritel bahan bangunan, alat teknik & perlengkapan rumah tangga terlengkap di Sulawesi Utara. Tujuh cabang, satu komitmen — nilai terbaik untuk setiap rumah dan proyek.</p>
            <div className="mt-4 grid gap-2 text-sm">
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"><Mail className="h-4 w-4 text-accent" /> {CONTACT.email}</a>
              <a href={`https://wa.me/${CONTACT.wa}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"><MessageCircle className="h-4 w-4 text-accent" /> {CONTACT.waDisplay} — WhatsApp</a>
            </div>
            <p className="mt-3 text-xs tracking-[0.16em] text-muted-foreground">MANADO • MINAHASA UTARA • BITUNG</p>
          </div>
          <div className="rounded-2xl border bg-card p-4 lg:border-0 lg:bg-transparent lg:p-0">
            <button onClick={() => setOpenNav(!openNav)} aria-expanded={openNav} className="flex w-full items-center justify-between text-xs font-semibold tracking-[0.16em] text-muted-foreground lg:hidden">
              NAVIGASI <motion.span animate={{ rotate: openNav ? 180 : 0 }} transition={{ duration: 0.2 }}><ChevronDown className="h-4 w-4" /></motion.span>
            </button>
            <p className="hidden text-xs font-semibold tracking-[0.16em] text-muted-foreground lg:block">NAVIGASI</p>
            <ul className="hidden lg:mt-4 lg:grid gap-2.5 text-sm text-muted-foreground">
              {NAV.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-foreground hover:underline underline-offset-4 transition-colors active:opacity-70">{n.label}</Link></li>)}
            </ul>
            <AnimatePresence>
              {openNav && (
                <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden grid gap-2.5 pt-3 text-sm text-muted-foreground lg:hidden">
                  {NAV.map((n) => <li key={n.href}><Link href={n.href} className="block py-1 active:opacity-70">{n.label}</Link></li>)}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <div className="rounded-2xl border bg-card p-4 lg:border-0 lg:bg-transparent lg:p-0">
            <button onClick={() => setOpenBranch(!openBranch)} aria-expanded={openBranch} className="flex w-full items-center justify-between text-xs font-semibold tracking-[0.16em] text-muted-foreground lg:hidden">
              CABANG PILIHAN <motion.span animate={{ rotate: openBranch ? 180 : 0 }} transition={{ duration: 0.2 }}><ChevronDown className="h-4 w-4" /></motion.span>
            </button>
            <p className="hidden text-xs font-semibold tracking-[0.16em] text-muted-foreground lg:block">CABANG PILIHAN</p>
            <ul className="hidden lg:mt-4 lg:grid gap-2 text-sm text-muted-foreground">
              {BRANCHES.slice(0, 4).map((b) => <li key={b.name} className="leading-snug">{b.name}</li>)}
              <li><Link href="/cabang-kami" className="font-medium text-foreground underline underline-offset-4 hover:text-accent">Lihat 7 cabang →</Link></li>
            </ul>
            <AnimatePresence>
              {openBranch && (
                <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden grid gap-2 pt-3 text-sm text-muted-foreground lg:hidden">
                  {BRANCHES.slice(0, 4).map((b) => <li key={b.name} className="leading-snug">{b.name}</li>)}
                  <li><Link href="/cabang-kami" className="font-medium text-foreground underline underline-offset-4">Lihat 7 cabang →</Link></li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <span>© {new Date().getFullYear()} Grand Group</span>
          <span className="tracking-wide">Grand Hardware • Grand Prima</span>
        </div>
      </div>
    </footer>
  );
}
