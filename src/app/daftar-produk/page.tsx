"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Search, Tag, ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
export default function DaftarProduk() {
  const reduce = useReducedMotion();
  return (
    <div>
      <section className="relative overflow-hidden border-b bg-card">
        <div className="pointer-events-none absolute inset-0 paper-grid opacity-[0.32]" aria-hidden />
        <div className="relative mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16">
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="hairline text-[11px] font-semibold text-accent">DAFTAR PRODUK</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06, duration: 0.6 }} className="mt-3 text-3xl font-semibold tracking-tight sm:text-[46px]">Kurat, bukan<br /><span className="font-normal italic">sekadar banyak.</span></motion.h1>
          <div className="mt-5 h-px w-14 bg-accent/50" aria-hidden />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.14, duration: 0.6 }} className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground">Brand terpercaya, ribuan pilihan — dummy untuk sekarang, siap diganti katalog real.</motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.5 }} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <label className="relative max-w-xl flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input placeholder="Cari produk / brand..." className="h-11 w-full rounded-full border bg-card pl-10 pr-4 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring" />
            </label>
            <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm shadow-sm"><Tag className="h-4 w-4 text-accent" /> {PRODUCTS.length} brand unggulan</span>
          </motion.div>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-12">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <StaggerItem key={p.brand}>
              <motion.div whileHover={{ y: reduce ? 0 : -3 }} transition={{ type: "spring", stiffness: 420, damping: 26 }} className="group rounded-[24px] border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border bg-secondary/60 px-3 py-1 text-xs font-medium tracking-wide">{p.cat}</span>
                  <span className="text-xs text-muted-foreground">{p.count}</span>
                </div>
                <h2 className="mt-3 text-lg font-semibold leading-tight">{p.brand}</h2>
                <div className="mt-4 overflow-hidden rounded-xl border"><motion.img whileHover={{ scale: reduce ? 1 : 1.04 }} transition={{ duration: 0.6 }} src={`https://picsum.photos/seed/${encodeURIComponent(p.brand)}/600/280`} alt={p.brand} width={600} height={280} className="h-36 w-full bg-secondary object-cover" /></div>
                <button className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">Lihat katalog <ArrowUpRight className="h-4 w-4 opacity-60" /></button>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8 rounded-[24px] border bg-card p-7">
          <p className="font-semibold">Tidak menemukan yang dicari?</p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">Hubungi cabang terdekat — kami bantu carikan stok & penawaran PASTI MURAH.</p>
        </Reveal>
      </section>
    </div>
  );
}
