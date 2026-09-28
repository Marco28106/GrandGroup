"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { NAV } from "@/lib/data";
export default function Header() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 flex items-center justify-between h-[68px]">
        <Link href="/" className="flex items-center gap-3">
          <motion.span whileHover={{ scale: reduce ? 1 : 1.05 }} whileTap={{ scale: 0.97 }} className="relative grid h-10 w-10 place-items-center rounded-xl bg-primary text-white font-display text-sm font-extrabold shadow-sm">
            GG<span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-accent ring-2 ring-white" aria-hidden />
          </motion.span>
          <span className="leading-none">
            <span className="block font-display text-[13px] font-bold tracking-wide text-primary">GRAND GROUP</span>
            <span className="block text-[11px] font-bold tracking-[0.16em] text-accent">PASTI MURAH</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/70 hover:bg-secondary hover:text-primary transition-colors">{n.label}</Link>
          ))}
        </nav>
        <motion.div whileHover={{ scale: reduce ? 1 : 1.02 }} whileTap={{ scale: 0.98 }} className="hidden lg:flex items-center gap-2">
          <Link href="/cabang-kami" className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-accent/90 transition-colors">Cabang Terdekat <ArrowRight className="h-4 w-4" /></Link>
        </motion.div>
        <button aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="lg:hidden grid h-10 w-10 place-items-center rounded-xl border bg-white hover:bg-secondary transition-colors">
          <motion.span animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</motion.span>
        </button>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden />
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }} className="lg:hidden border-t bg-white overflow-hidden">
            <nav className="mx-auto max-w-[1280px] px-4 py-3 grid gap-1">
              {NAV.map((n, i) => (
                <motion.div key={n.href} initial={{ opacity: 0, x: reduce ? 0 : -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium hover:bg-secondary block">{n.label}</Link>
                </motion.div>
              ))}
              <Link href="/cabang-kami" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-3 text-center text-sm font-bold text-white">Cabang Terdekat <ArrowRight className="h-4 w-4" /></Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
