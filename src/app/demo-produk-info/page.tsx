"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Play, ExternalLink, Film } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
export default function DemoProdukInfo() {
  const reduce = useReducedMotion();
  return (
    <div>
      <section className="relative overflow-hidden bg-primary border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#14307a] to-[#0a1850]" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-[60px]" aria-hidden />
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-12 relative">
          <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-primary shadow-sm"><Film className="h-3.5 w-3.5 text-accent" /> Demo &amp; Review</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-white">Demo / Produk Info</motion.h1>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18, duration: 0.5 }} className="mt-2 font-display text-xl font-bold text-white">Melihat Lebih Dekat, Memilih dengan Tepat</motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.22, duration: 0.5 }} className="mt-3 max-w-3xl text-sm leading-relaxed text-white/80">Selamat datang di pusat informasi dan demo produk <b className="text-white">Grand Grup</b>. Kami memahami memilih peralatan teknik, bahan bangunan, hingga perlengkapan rumah tangga memerlukan ketelitian. Jelajahi koleksi video &amp; galeri produk kami — atau coba langsung di <b className="text-white">7 cabang</b> dengan harga <b className="text-white underline decoration-accent decoration-4 underline-offset-2">PASTI MURAH</b>.</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} className="mt-6 overflow-hidden rounded-[24px] bg-white p-2 shadow-xl"><img src="https://picsum.photos/seed/grand-demo-hero/1280/460" alt="Demo produk dummy" width={1280} height={460} className="h-[200px] sm:h-[280px] w-full object-cover rounded-[18px]" /></motion.div>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8 sm:py-10">
        <Stagger className="grid gap-4 lg:grid-cols-2">
          {[1, 2].map((i) => (
            <StaggerItem key={i}>
              <motion.div whileHover={{ y: reduce ? 0 : -4 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className="overflow-hidden rounded-[24px] border bg-white shadow-sm">
                <div className={`h-1 w-full ${i === 1 ? "bg-primary" : "bg-accent"}`} aria-hidden />
                <div className="relative overflow-hidden">
                  <motion.img whileHover={{ scale: reduce ? 1 : 1.04 }} transition={{ duration: 0.5 }} src={`https://picsum.photos/seed/grand-demo-${i}/800/450`} alt={`Video demo ${i}`} width={800} height={450} className="h-[220px] w-full object-cover sm:h-[260px]" />
                  <span className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white shadow ${i === 1 ? "bg-primary" : "bg-accent"}`}><Play className="h-3.5 w-3.5" /> Video Demo {i}</span>
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold">Dokumentasi produk lantai {i} — dummy</p>
                  <p className="mt-1 text-xs text-muted-foreground">Ganti dengan iframe YouTube / file MP4 asli nanti (lazy, no autoplay).</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal>
          <h3 className="mt-10 font-display text-lg font-bold flex items-center gap-2"><span className="h-6 w-1 rounded-full bg-accent" aria-hidden /> Inspirasi dari TikTok <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-white">TikTok</span></h3>
          <p className="mt-1 text-sm text-muted-foreground">Embed asli dilazy-load — placeholder card dummy di bawah. Ganti dengan blockquote TikTok real saat asset siap.</p>
        </Reveal>
        <Stagger className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { h: "@itsmestasi × Panasonic", t: "Beli produk Panasonic ada di Grand Hardware!" },
            { h: "@steelhorsesafetyshoes", t: "Kuat di Setiap Langkah — check out di bio" },
            { h: "@germanybrilliant — Dapur", t: "Brilliant Sink — dapur lebih efektif" },
            { h: "@germanybrilliant — Promo", t: "GBV1888MRG Shower Set + Free Jet Washer" },
          ].map((c) => (
            <StaggerItem key={c.h}>
              <motion.a whileHover={{ y: reduce ? 0 : -4 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="rounded-[24px] border bg-white p-4 block shadow-sm hover:shadow-md">
                <div className="h-40 rounded-xl bg-secondary grid place-items-center text-xs font-medium text-muted-foreground">TikTok embed dummy</div>
                <p className="mt-3 text-xs font-bold text-primary">{c.h}</p>
                <p className="mt-1 text-sm leading-snug">{c.t}</p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-accent">Buka TikTok <ExternalLink className="h-3 w-3" /></span>
              </motion.a>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
