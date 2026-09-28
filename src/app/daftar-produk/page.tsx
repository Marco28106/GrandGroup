"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Search, Tag, Filter, Sparkles, ArrowUpRight } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
export default function DaftarProduk() {
  const reduce = useReducedMotion();
  return (
    <div>
      <section className="relative overflow-hidden bg-primary border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#14307a] to-[#0a1850]" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-[60px]" aria-hidden />
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-12 relative">
          <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-primary shadow-sm"><Sparkles className="h-3.5 w-3.5 text-accent" /> Ribuan Produk Pilihan</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-white">Daftar Produk</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18, duration: 0.5 }} className="mt-3 text-sm leading-relaxed text-white/75">Ribuan produk dari brand terpercaya — dummy, ganti dengan katalog real nanti.</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.5 }} className="mt-6 flex flex-col sm:flex-row gap-3">
            <label className="relative flex-1 max-w-xl rounded-full bg-white p-2 shadow-lg ring-1 ring-black/5 focus-within:ring-2 focus-within:ring-accent transition-all">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input placeholder="Cari produk / brand..." className="h-11 w-full rounded-full border bg-transparent pl-10 pr-4 text-sm outline-none placeholder:text-muted-foreground" />
            </label>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-primary shadow-sm ring-1 ring-black/5"><Tag className="h-4 w-4 text-accent" /> {PRODUCTS.length} brand unggulan</span>
          </motion.div>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8 sm:py-10">
        <Reveal className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground"><Filter className="h-4 w-4 text-accent" /> Sort by: Brand A–Z</span>
          <select className="rounded-full border bg-white px-4 py-2 text-sm font-medium text-primary hover:bg-secondary"><option>Paling Banyak Dicari</option><option>Harga Terendah</option><option>New Arrivals</option></select>
        </Reveal>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <StaggerItem key={p.brand}>
              <motion.div whileHover={{ y: reduce ? 0 : -6, scale: reduce ? 1 : 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className="group relative overflow-hidden rounded-[24px] border bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${p.cat.includes("Power") || p.cat.includes("Engine") ? "bg-accent text-white" : "bg-primary text-white"}`}>{p.cat}</span>
                  <span className="text-xs text-muted-foreground font-medium">{p.count}</span>
                </div>
                <h2 className="mt-3 font-display text-lg font-bold">{p.brand}</h2>
                <div className="overflow-hidden rounded-xl mt-3"><motion.img whileHover={{ scale: reduce ? 1 : 1.06 }} transition={{ duration: 0.5 }} src={`https://picsum.photos/seed/${encodeURIComponent(p.brand)}/600/280`} alt={p.brand} width={600} height={280} className="h-36 w-full object-cover bg-secondary" /></div>
                <motion.button whileHover={{ scale: reduce ? 1 : 1.02 }} whileTap={{ scale: 0.98 }} className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-secondary px-4 py-2.5 text-sm font-bold text-primary hover:bg-secondary/80 group-hover:bg-primary group-hover:text-white transition-colors"><ArrowUpRight className="h-4 w-4" /> Lihat katalog</motion.button>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8 rounded-[24px] bg-primary p-6 sm:p-8 text-white relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/30 blur-2xl" aria-hidden />
          <p className="relative font-display text-lg font-bold flex items-center gap-2"><Sparkles className="h-5 w-5 text-accent" /> Butuh produk yang tidak ada di daftar?</p>
          <p className="relative mt-1 text-sm text-white/75">Hubungi cabang terdekat — tim kami bantu carikan stok &amp; penawaran <b className="text-white underline decoration-accent decoration-4 underline-offset-2">PASTI MURAH</b>.</p>
        </Reveal>
      </section>
    </div>
  );
}
