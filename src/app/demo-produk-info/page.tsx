"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PRODUCTS } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
const VIDEOS = [
  { id: "DnrA9E02CG4", title: "Wipro Jupiter 120", desc: "Klik judul untuk buka di YouTube.", url: "https://youtu.be/DnrA9E02CG4?si=q7SxFrfkYmJihVUi" },
  { id: "G4thBmg8LwQ", title: "Wipro Circular Saw", desc: "Klik judul untuk buka di YouTube.", url: "https://youtu.be/G4thBmg8LwQ?si=kF0gBAPnT8hCd_4R" },
] as const;
export default function DemoProdukInfo() {
  const reduce = useReducedMotion();
  return (
    <div>
      <section className="relative overflow-hidden border-b bg-card">
        <div className="pointer-events-none absolute inset-0 paper-grid opacity-[0.32]" aria-hidden />
        <div className="relative mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16">
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="hairline text-[11px] font-semibold text-accent">DEMO & PRODUK INFO</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06, duration: 0.6 }} className="mt-3 text-3xl font-semibold tracking-tight sm:text-[46px]">Melihat lebih dekat,<br /><span className="font-normal italic">memilih dengan tepat.</span></motion.h1>
          <div className="mt-5 h-px w-14 bg-accent/50" aria-hidden />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.14, duration: 0.6 }} className="mt-5 max-w-3xl text-[15px] leading-7 text-muted-foreground">Pusat informasi dan demo produk <b className="font-semibold text-foreground">Grand Grup</b> — dokumentasi visual dan panduan agar Anda melihat kualitas nyata sebelum memutuskan. Coba langsung di 7 cabang dengan harga <b className="font-semibold text-foreground">PASTI MURAH</b>.</motion.p>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-12">
        <Stagger className="grid gap-5 lg:grid-cols-2">
          {VIDEOS.map((v) => (
            <StaggerItem key={v.id}>
              <motion.div whileHover={{ y: reduce ? 0 : -3 }} transition={{ type: "spring", stiffness: 420, damping: 26 }} className="overflow-hidden rounded-[24px] border bg-card shadow-sm">
                <div className="aspect-video overflow-hidden bg-secondary">
                  <iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0`} title={v.title} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                </div>
                <div className="p-5">
                  <a href={v.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold hover:text-accent hover:underline underline-offset-4">{v.title} <ExternalLink className="h-3.5 w-3.5" /></a>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{v.desc}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 flex items-center gap-3">
          <span className="h-px w-10 bg-accent/50" aria-hidden />
          <span className="hairline text-[11px] font-semibold text-accent">PRODUK UNGGULAN</span>
        </Reveal>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">Sorotan brand terkurasi — Wipro, Loncin, Bosch dan lainnya. Coba langsung di toko, nilai terbaik PASTI MURAH.</p>
        <Stagger className="mt-6 grid gap-5 sm:grid-cols-3">
          {PRODUCTS.map((p) => (
            <StaggerItem key={p.brand}>
              <motion.div whileHover={{ y: reduce ? 0 : -3 }} transition={{ type: "spring", stiffness: 420, damping: 26 }} className="rounded-[24px] border bg-card p-5 shadow-sm">
                <span className="rounded-full border bg-secondary/60 px-3 py-1 text-xs font-medium tracking-wide">{p.cat}</span>
                <h3 className="mt-3 text-base font-semibold">{p.brand}</h3>
                <div className="mt-3 overflow-hidden rounded-xl border bg-white"><img src={p.img} alt={p.brand} width={600} height={280} className="h-32 w-full object-contain p-2" /></div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-8 flex justify-end">
          <Link href="/daftar-produk" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">Lihat semua produk <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </section>
    </div>
  );
}
