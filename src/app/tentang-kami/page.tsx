"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Blocks, Hammer, Droplets, ChefHat, Sofa } from "lucide-react";
import { DIVISI } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
const ICONS = [Blocks, Hammer, Droplets, ChefHat, Sofa] as const;
export default function TentangKami() {
  const reduce = useReducedMotion();
  return (
    <div>
      <section className="relative overflow-hidden border-b bg-card">
        <div className="pointer-events-none absolute inset-0 paper-grid opacity-[0.32]" aria-hidden />
        <div className="relative mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16">
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="hairline text-[11px] font-semibold text-accent">TENTANG KAMI</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06, duration: 0.6 }} className="mt-3 text-3xl font-semibold leading-[0.98] tracking-tight sm:text-[46px]">
            Setiap proyek
            <br />
            <span className="font-normal italic">berhak mendapat yang terbaik.</span>
          </motion.h1>
          <div className="mt-5 h-px w-14 bg-accent/50" aria-hidden />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.14, duration: 0.6 }} className="mt-5 max-w-3xl text-[15px] leading-7 text-muted-foreground">
            Di Grand Grup, setiap proyek — rumah tangga maupun industri — membutuhkan fondasi dan perlengkapan berkualitas tinggi. Ribuan produk terkurasi, tertata rapi per lantai, untuk membantu Anda menemukan solusi yang tepat tanpa repot.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.6 }} className="mt-8 overflow-hidden rounded-[28px] border bg-card p-2 shadow-sm">
            <img src="https://picsum.photos/seed/grand-tentang/1280/520" alt="Interior toko Grand Group" width={1280} height={520} className="h-[240px] w-full rounded-[20px] object-cover sm:h-[360px]" />
          </motion.div>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14">
        <Reveal className="flex items-center gap-3">
          <span className="h-px w-10 bg-accent/50" aria-hidden />
          <span className="hairline text-[11px] font-semibold text-accent">5 DIVISI • 3 LANTAI • 7 CABANG</span>
        </Reveal>
        <Stagger className="mt-6 grid gap-6 lg:grid-cols-2">
          {DIVISI.map((d, idx) => {
            const Icon = ICONS[idx] ?? Blocks;
            return (
              <StaggerItem key={d.title}>
                <motion.div whileHover={{ y: reduce ? 0 : -3 }} transition={{ type: "spring", stiffness: 420, damping: 26 }} className="rounded-[24px] border bg-card p-7 shadow-sm">
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground"><Icon className="h-5 w-5" /></span>
                    <div>
                      <h2 className="text-[15px] font-semibold leading-tight">{d.title}</h2>
                      {"sub" in d && d.sub ? <p className="text-xs tracking-wide text-muted-foreground">{d.sub}</p> : null}
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3">
                    {d.items.map((it) => (
                      <div key={it.name} className="rounded-2xl border bg-secondary/60 p-4">
                        <p className="text-sm font-medium">{it.name}</p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">{it.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
        <Reveal className="mt-8 overflow-hidden rounded-[28px] border bg-card p-2 shadow-sm">
          <img src="https://picsum.photos/seed/grand-tentang2/1280/400" alt="Produk all floor" width={1280} height={400} className="h-[180px] w-full rounded-[20px] object-cover" />
        </Reveal>
        <Reveal className="mt-8 rounded-[24px] border bg-card p-6 sm:p-8">
          <p className="font-display text-lg font-semibold">Butuh bantuan memilih?</p>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">Tim kami di 7 cabang siap mendampingi — dari material hingga finishing, dengan harga PASTI MURAH.</p>
        </Reveal>
      </section>
    </div>
  );
}
