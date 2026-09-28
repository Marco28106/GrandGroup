"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Blocks, Hammer, Droplets, ChefHat, Sofa, ShieldCheck, Sparkles } from "lucide-react";
import { DIVISI } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
const ICONS = [Blocks, Hammer, Droplets, ChefHat, Sofa] as const;
export default function TentangKami() {
  const reduce = useReducedMotion();
  return (
    <div>
      <section className="relative overflow-hidden bg-primary border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#14307a] to-[#0a1850]" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-[60px]" aria-hidden />
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-14 relative">
          <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-primary"><Sparkles className="h-3.5 w-3.5 text-accent" /> Tentang Grand Group</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Tentang Kami</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18, duration: 0.5 }} className="mt-3 max-w-3xl text-sm sm:text-[15px] leading-relaxed text-white/80">Di Grand Grup, kami memahami bahwa setiap proyek — baik skala rumah tangga maupun industri — membutuhkan fondasi dan perlengkapan berkualitas tinggi. Sebagai ritel modern yang terus bertumbuh, kami menghadirkan ribuan produk pilihan yang terorganisir dalam departemen khusus untuk memudahkan Anda menemukan solusi tepat di setiap lantai toko kami.</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.5 }} className="mt-6 overflow-hidden rounded-[24px] bg-white p-2 shadow-xl"><img src="https://picsum.photos/seed/grand-tentang/1280/520" alt="Interior toko Grand Group dummy" width={1280} height={520} className="h-[220px] sm:h-[340px] w-full object-cover rounded-[18px]" /></motion.div>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-12">
        <Reveal className="flex items-center gap-3 mb-6">
          <span className="h-1 w-10 rounded-full bg-accent" aria-hidden />
          <h2 className="font-display text-lg font-bold">5 Divisi Unggulan — Lantai 1 sampai 3</h2>
          <span className="hidden sm:inline-flex rounded-full bg-accent/10 px-2.5 py-1 text-xs font-bold text-accent">One-Stop Solution</span>
        </Reveal>
        <Stagger className="grid gap-6 lg:grid-cols-2">
          {DIVISI.map((d, idx) => {
            const Icon = ICONS[idx] ?? Blocks;
            const isAccent = idx % 2 === 0;
            return (
              <StaggerItem key={d.title}>
                <motion.div whileHover={{ y: reduce ? 0 : -4 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className="relative overflow-hidden rounded-[24px] border bg-white p-6 shadow-sm">
                  <span className={`absolute left-0 top-0 h-1 w-full ${isAccent ? "bg-accent" : "bg-primary"}`} aria-hidden />
                  <div className="flex items-start gap-3">
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white shadow-sm ${isAccent ? "bg-accent" : "bg-primary"}`}><Icon className="h-5 w-5" /></span>
                    <div>
                      <h2 className="font-display text-base font-bold leading-tight">{d.title}</h2>
                      {"sub" in d && d.sub ? <p className="text-xs font-bold tracking-wide text-accent">{d.sub}</p> : null}
                    </div>
                  </div>
                  <div className="mt-4 grid gap-3">
                    {d.items.map((it) => (
                      <div key={it.name} className="rounded-2xl bg-secondary p-4 ring-1 ring-black/[0.04]">
                        <p className="text-sm font-bold text-primary">{it.name}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
        <Reveal className="mt-8 overflow-hidden rounded-[24px] border bg-white p-2 shadow-sm"><img src="https://picsum.photos/seed/grand-tentang2/1280/400" alt="Produk all floor dummy" width={1280} height={400} className="h-[180px] w-full object-cover rounded-[18px]" /></Reveal>
        <Reveal className="mt-8 rounded-[24px] bg-primary p-6 sm:p-8 text-white relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/30 blur-2xl" aria-hidden />
          <p className="relative font-display text-lg font-bold flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-accent" /> Harga PASTI MURAH di setiap lantai</p>
          <p className="relative mt-1 text-sm text-white/75">Konsultasi gratis di 7 cabang — tim kami bantu pilih produk tepat untuk rumah &amp; proyek Anda.</p>
        </Reveal>
      </section>
    </div>
  );
}
