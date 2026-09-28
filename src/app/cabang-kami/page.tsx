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
        <div className="relative mx-auto max-w-[1280px] px-4 py-8 sm:px-6 sm:py-16">
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="hairline text-[11px] font-semibold text-accent">CABANG KAMI</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06, duration: 0.6 }} className="mt-3 text-[28px] font-semibold tracking-tight sm:text-[46px]">Lebih dekat<br /><span className="font-normal italic">dengan Anda.</span></motion.h1>
          <div className="mt-4 h-px w-12 bg-accent/50 sm:mt-5 sm:w-14" aria-hidden />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.14, duration: 0.6 }} className="mt-4 max-w-2xl text-[15px] leading-7 text-muted-foreground sm:mt-5"><b className="font-semibold text-foreground">Grand Hardware &amp; Grand Prima</b> tersebar di lokasi strategis Sulawesi Utara — agar kebutuhan Anda terlayani lebih cepat dan mudah.</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.6 }} className="mt-6 rounded-[24px] border bg-card p-4 shadow-sm sm:mt-8 sm:rounded-[28px] sm:p-6">
            <p className="hairline text-[10px] font-semibold text-accent">PETA JARINGAN • 7 LOKASI</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {BRANCHES.map((b, idx) => (
                <div key={b.name} className="flex items-center gap-3 rounded-2xl border bg-secondary/40 px-3 py-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-[10px] font-bold text-primary-foreground">{String(idx + 1).padStart(2, "0")}</span>
                  <span className="min-w-0">
                    <span className="block truncate text-xs font-semibold leading-tight">{b.name}</span>
                    <span className="block truncate text-[11px] text-muted-foreground">{b.addr.split(",")[0]}</span>
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-center rounded-2xl border border-dashed bg-card px-3 py-3 text-xs font-medium text-muted-foreground sm:col-span-2 lg:col-span-1">Manado • Minut • Bitung</div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6 sm:py-12">
        <Reveal className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent/50 sm:w-10" aria-hidden />
          <span className="hairline text-[11px] font-semibold text-accent">7 LOKASI • BUKA 08.30–20.30</span>
        </Reveal>
        <Stagger className="mt-5 grid auto-rows-fr gap-4 sm:mt-6 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BRANCHES.map((b) => (
            <StaggerItem key={b.name + b.addr} className="h-full">
              <motion.div whileHover={{ y: reduce ? 0 : -3 }} transition={{ type: "spring", stiffness: 420, damping: 26 }} className="flex h-full flex-col overflow-hidden rounded-[24px] border bg-card shadow-sm">
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <span className="inline-flex w-fit rounded-full border bg-secondary/60 px-2.5 py-1 text-xs font-medium tracking-wide">{b.tag}</span>
                  <h2 className="mt-3 text-[15px] font-semibold leading-tight">{b.name}</h2>
                  <p className="mt-1 flex gap-1.5 text-sm leading-6 text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {b.addr}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><Clock3 className="h-3.5 w-3.5 shrink-0" /> {b.hours}</p>
                  <div className="mt-4 overflow-hidden rounded-xl border bg-secondary/40 p-1"><iframe title={`Peta ${b.name}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="h-40 w-full rounded-[10px] border-0 sm:h-48" src={`https://maps.google.com/maps?q=${encodeURIComponent(b.addr)}&z=15&output=embed`} /></div>
                  <motion.a whileHover={{ scale: reduce ? 1 : 1.01 }} whileTap={{ scale: 0.99 }} href={b.maps} target="_blank" rel="noopener noreferrer" className="mt-3 flex min-h-[44px] items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-3 text-[15px] font-medium text-primary-foreground hover:bg-primary/90 active:scale-[0.98] sm:mt-4 sm:text-sm"><Navigation className="h-4 w-4 shrink-0" /> Buka di Google Maps</motion.a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
