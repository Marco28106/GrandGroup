"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { NAV } from "@/lib/data";
import { useTheme } from "@/components/theme-provider";
export default function Header() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-card/70 backdrop-blur-[18px] supports-[backdrop-filter]:bg-card/70">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-[11px] font-bold tracking-[0.18em] text-primary-foreground">GG</span>
          <span className="hidden leading-none sm:block">
            <span className="block text-[11px] font-bold tracking-[0.16em]">GRAND GROUP</span>
            <span className="mt-0.5 block text-[10px] tracking-[0.22em] text-accent">PASTI MURAH</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => {
            const active = pathname === n.href;
            return (
              <Link key={n.href} href={n.href} aria-current={active ? "page" : undefined} className={`rounded-full px-4 py-2 text-[13px] font-medium tracking-wide transition-colors ${active ? "bg-primary text-primary-foreground" : "text-foreground/60 hover:bg-secondary hover:text-foreground"}`}>
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <button aria-label={theme === "dark" ? "Ganti ke light" : "Ganti ke dark"} onClick={toggle} className="grid h-9 w-9 place-items-center rounded-full border bg-card text-foreground/80 transition-colors hover:bg-secondary">
            <motion.span initial={false} animate={{ rotate: theme === "dark" ? 180 : 0 }} transition={{ duration: 0.3 }}>{theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</motion.span>
          </button>
          <Link href="/cabang-kami" className="hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 lg:inline-flex">
            Cabang Terdekat <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
          </Link>
          <button aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center rounded-full border bg-card lg:hidden">
            <motion.span animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>{open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</motion.span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }} className="overflow-hidden border-t bg-card lg:hidden">
            <nav className="mx-auto grid max-w-[1280px] gap-1 px-4 py-3">
              {NAV.map((n, i) => {
                const active = pathname === n.href;
                return (
                  <motion.div key={n.href} initial={{ opacity: 0, x: reduce ? 0 : -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                    <Link href={n.href} onClick={() => setOpen(false)} className={`block rounded-xl px-3 py-3 text-sm font-medium ${active ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}>{n.label}</Link>
                  </motion.div>
                );
              })}
              <Link href="/cabang-kami" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-primary px-4 py-3 text-center text-sm font-medium text-primary-foreground">Cabang Terdekat</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
