"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Search, Tag, X } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
export default function DaftarProduk() {
  const reduce = useReducedMotion();
  const [q, setQ] = useState("");
  const filtered = PRODUCTS.filter((p) => {
    const s = q.trim().toLowerCase();
    if (!s) return true;
    return p.brand.toLowerCase().includes(s) || p.cat.toLowerCase().includes(s);
  });
  return (
    <div>
      <section className="relative overflow-hidden border-b bg-card">
        <div className="pointer-events-none absolute inset-0 paper-grid opacity-[0.32]" aria-hidden />
        <div className="relative mx-auto max-w-[1280px] px-4 py-8 sm:px-6 sm:py-16">
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="hairline text-[11px] font-semibold text-accent">DAFTAR PRODUK</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06, duration: 0.6 }} className="mt-3 text-[28px] font-semibold tracking-tight sm:text-[46px]">Kurat, bukan<br /><span className="font-normal italic">sekadar banyak.</span></motion.h1>
          <div className="mt-4 h-px w-12 bg-accent/50 sm:mt-5 sm:w-14" aria-hidden />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.14, duration: 0.6 }} className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:mt-5">Brand terpercaya, ribuan pilihan — mantap kualitasnya.</motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.5 }} className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
            <label className="relative flex-1 sm:max-w-xl">
              <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari produk / brand..." aria-label="Cari produk atau brand" className="h-11 w-full rounded-full border bg-card pl-10 pr-10 text-[15px] outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring sm:text-sm" />
              {q ? <button onClick={() => setQ("")} aria-label="Hapus pencarian" className="absolute right-1.5 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-secondary active:scale-[0.96] sm:h-7 sm:w-7"><X className="h-4 w-4 sm:h-3.5 sm:w-3.5" /></button> : null}
            </label>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm shadow-sm"><Tag className="h-4 w-4 shrink-0 text-accent" /> {filtered.length} / {PRODUCTS.length} brand</span>
          </motion.div>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-4 py-6 sm:px-6 sm:py-12">
        {filtered.length === 0 ? (
          <div className="rounded-[24px] border bg-card p-8 text-center sm:p-10" role="status" aria-live="polite">
            <p className="font-semibold">Tidak ada hasil untuk &quot;{q}&quot;</p>
            <p className="mt-1 text-sm text-muted-foreground">Coba kata kunci lain — contoh: “Wipro”, “Sanitary”, “Bosch”.</p>
            <button onClick={() => setQ("")} className="mt-4 min-h-[44px] rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground active:scale-[0.98]">Hapus filter</button>
          </div>
        ) : (
          <Stagger key={q} className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <StaggerItem key={p.brand}>
                <motion.div whileHover={{ y: reduce ? 0 : -3 }} transition={{ type: "spring", stiffness: 420, damping: 26 }} className="group rounded-[24px] border bg-card p-5 shadow-sm sm:p-6">
                  <span className="rounded-full border bg-secondary/60 px-3 py-1 text-xs font-medium tracking-wide">{p.cat}</span>
                  <h2 className="mt-3 text-lg font-semibold leading-tight">{p.brand}</h2>
                  <div className="mt-3 overflow-hidden rounded-xl border bg-white sm:mt-4"><motion.img whileHover={{ scale: reduce ? 1 : 1.04 }} transition={{ duration: 0.6 }} src={p.img} alt={p.brand} width={600} height={280} className="h-32 w-full object-contain p-2 sm:h-36" /></div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        )}
        <Reveal className="mt-6 rounded-[24px] border bg-card p-5 sm:mt-8 sm:p-7">
          <p className="font-semibold">Tidak menemukan yang dicari?</p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">Hubungi cabang terdekat — kami bantu carikan stok & penawaran PASTI MURAH.</p>
        </Reveal>
      </section>
    </div>
  );
}
