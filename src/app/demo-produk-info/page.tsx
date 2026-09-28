"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
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
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.6 }} className="mt-8 overflow-hidden rounded-[28px] border bg-card p-2 shadow-sm"><img src="https://picsum.photos/seed/grand-demo-hero/1280/460" alt="Demo produk" width={1280} height={460} className="h-[220px] w-full rounded-[20px] object-cover sm:h-[300px]" /></motion.div>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-12">
        <Stagger className="grid gap-5 lg:grid-cols-2">
          {[1, 2].map((i) => (
            <StaggerItem key={i}>
              <motion.div whileHover={{ y: reduce ? 0 : -3 }} transition={{ type: "spring", stiffness: 420, damping: 26 }} className="overflow-hidden rounded-[24px] border bg-card shadow-sm">
                <div className="relative overflow-hidden">
                  <motion.img whileHover={{ scale: reduce ? 1 : 1.04 }} transition={{ duration: 0.6 }} src={`https://picsum.photos/seed/grand-demo-${i}/800/450`} alt={`Video demo ${i}`} width={800} height={450} className="h-[240px] w-full object-cover sm:h-[280px]" />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground shadow"><Play className="h-3.5 w-3.5" /> Video Demo {i}</span>
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold">Dokumentasi produk lantai {i}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">Ganti dengan iframe YouTube / MP4 asli (lazy, no autoplay) — dummy untuk sekarang.</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent/50" aria-hidden />
            <span className="hairline text-[11px] font-semibold text-accent">INSPIRASI DARI TIKTOK</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">Embed asli dilazy-load — placeholder di bawah, ganti dengan blockquote TikTok real saat asset siap.</p>
        </Reveal>
        <Stagger className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { h: "@itsmestasi × Panasonic", t: "Beli produk Panasonic ada di Grand Hardware!" },
            { h: "@steelhorsesafetyshoes", t: "Kuat di Setiap Langkah — check out di bio" },
            { h: "@germanybrilliant — Dapur", t: "Brilliant Sink — dapur lebih efektif" },
            { h: "@germanybrilliant — Promo", t: "GBV1888MRG Shower Set + Free Jet Washer" },
          ].map((c) => (
            <StaggerItem key={c.h}>
              <motion.a whileHover={{ y: reduce ? 0 : -3 }} transition={{ type: "spring", stiffness: 420, damping: 26 }} href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="block rounded-[24px] border bg-card p-4 shadow-sm">
                <div className="grid h-40 place-items-center rounded-xl border bg-secondary/40 text-xs text-muted-foreground">TikTok embed dummy</div>
                <p className="mt-3 text-xs font-medium tracking-wide">{c.h}</p>
                <p className="mt-1 text-sm leading-6">{c.t}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-accent">Buka TikTok <ExternalLink className="h-3 w-3" /></span>
              </motion.a>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
