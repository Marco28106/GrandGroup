"use client";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Clock3, Navigation } from "lucide-react";
import { BRANCHES } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
export default function CabangKami() {
  const reduce = useReducedMotion();
  return (
    <div>
      <section className="relative overflow-hidden border-b bg-card">
        <div className="pointer-events-none absolute inset-0 paper-grid opacity-[0.32]" aria-hidden />
        <div className="relative mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16">
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="hairline text-[11px] font-semibold text-accent">CABANG KAMI</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06, duration: 0.6 }} className="mt-3 text-3xl font-semibold tracking-tight sm:text-[46px]">Lebih dekat<br /><span className="font-normal italic">dengan Anda.</span></motion.h1>
          <div className="mt-5 h-px w-14 bg-accent/50" aria-hidden />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.14, duration: 0.6 }} className="mt-5 max-w-2xl text-[15px] leading-7 text-muted-foreground"><b className="font-semibold text-foreground">Grand Hardware &amp; Grand Prima</b> tersebar di lokasi strategis Sulawesi Utara — agar kebutuhan Anda terlayani lebih cepat dan mudah.</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.6 }} className="mt-8 overflow-hidden rounded-[28px] border bg-card p-2 shadow-sm"><img src="https://picsum.photos/seed/grand-cabang/1280/420" alt="Peta cabang" width={1280} height={420} className="h-[220px] w-full rounded-[20px] object-cover sm:h-[280px]" /></motion.div>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-12">
        <Reveal className="flex items-center gap-3">
          <span className="h-px w-10 bg-accent/50" aria-hidden />
          <span className="hairline text-[11px] font-semibold text-accent">7 LOKASI • BUKA 08.30–20.30</span>
        </Reveal>
        <Stagger className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BRANCHES.map((b) => (
            <StaggerItem key={b.name + b.addr}>
              <motion.div whileHover={{ y: reduce ? 0 : -3 }} transition={{ type: "spring", stiffness: 420, damping: 26 }} className="flex flex-col overflow-hidden rounded-[24px] border bg-card shadow-sm">
                <div className="overflow-hidden"><motion.img whileHover={{ scale: reduce ? 1 : 1.04 }} transition={{ duration: 0.6 }} src={`https://picsum.photos/seed/${encodeURIComponent(b.name + b.addr.slice(0, 8))}/600/220`} alt={b.name} width={600} height={220} className="h-44 w-full object-cover" /></div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit rounded-full border bg-secondary/60 px-2.5 py-1 text-xs font-medium tracking-wide">{b.tag}</span>
                  <h2 className="mt-3 text-[15px] font-semibold leading-tight">{b.name}</h2>
                  <p className="mt-1 flex gap-1.5 text-sm leading-6 text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {b.addr}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><Clock3 className="h-3.5 w-3.5" /> {b.hours}</p>
                  <div className="mt-4 overflow-hidden rounded-xl border bg-secondary/40 p-1"><iframe title={`Peta ${b.name}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="h-48 w-full rounded-[10px] border-0" src={`https://maps.google.com/maps?q=${encodeURIComponent(b.addr)}&z=15&output=embed`} /></div>
                  <motion.a whileHover={{ scale: reduce ? 1 : 1.01 }} whileTap={{ scale: 0.99 }} href={b.maps} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"><Navigation className="h-4 w-4" /> Buka di Google Maps</motion.a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
