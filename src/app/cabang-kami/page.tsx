"use client";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Clock3, Navigation, Store } from "lucide-react";
import { BRANCHES } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
export default function CabangKami() {
  const reduce = useReducedMotion();
  return (
    <div>
      <section className="relative overflow-hidden bg-primary border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#14307a] to-[#0a1850]" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-[60px]" aria-hidden />
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-12 relative">
          <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-bold text-primary shadow-sm"><Store className="h-3.5 w-3.5 text-accent" /> 7 Cabang Sulawesi Utara</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-white">Cabang Kami</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18, duration: 0.5 }} className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80"><b className="text-white">Grand Hardware &amp; Grand Prima</b> memiliki jaringan cabang yang tersebar di beberapa lokasi strategis di Sulawesi Utara untuk melayani kebutuhan pelanggan secara lebih dekat dan efisien.</motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.5 }} className="mt-6 overflow-hidden rounded-[24px] bg-white p-2 shadow-xl"><img src="https://picsum.photos/seed/grand-cabang/1280/420" alt="Peta cabang dummy" width={1280} height={420} className="h-[200px] sm:h-[260px] w-full object-cover rounded-[18px]" /></motion.div>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-8 sm:py-10">
        <Reveal className="flex items-center gap-3 mb-2">
          <span className="h-1 w-10 rounded-full bg-accent" aria-hidden />
          <h2 className="font-display font-bold">Pilih cabang terdekat</h2>
          <span className="rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-white">Buka 08.30–20.30</span>
        </Reveal>
        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BRANCHES.map((b, idx) => (
            <StaggerItem key={b.name + b.addr}>
              <motion.div whileHover={{ y: reduce ? 0 : -4, scale: reduce ? 1 : 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className="flex flex-col overflow-hidden rounded-[24px] border bg-white shadow-sm">
                <span className={`h-1 w-full ${idx % 2 === 0 ? "bg-accent" : "bg-primary"}`} aria-hidden />
                <div className="overflow-hidden"><motion.img whileHover={{ scale: reduce ? 1 : 1.04 }} transition={{ duration: 0.5 }} src={`https://picsum.photos/seed/${encodeURIComponent(b.name + b.addr.slice(0,8))}/600/220`} alt={b.name} width={600} height={220} className="h-40 w-full object-cover" /></div>
                <div className="p-5 flex flex-1 flex-col">
                  <span className={`inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-bold ${idx === 0 ? "bg-accent text-white" : "bg-primary text-white"}`}>{b.tag}</span>
                  <h2 className="mt-2 font-display text-base font-bold">{b.name}</h2>
                  <p className="mt-1 flex gap-1.5 text-sm leading-relaxed text-muted-foreground"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {b.addr}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground"><Clock3 className="h-3.5 w-3.5 text-primary" /> {b.hours}</p>
                  <div className="mt-4 rounded-xl bg-secondary p-2 ring-1 ring-black/5"><div className="grid h-28 place-items-center rounded-xl bg-white text-xs font-medium text-muted-foreground">Map embed dummy — ganti iframe Google Maps</div></div>
                  <motion.a whileHover={{ scale: reduce ? 1 : 1.02 }} whileTap={{ scale: 0.98 }} href={b.maps} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-white hover:bg-primary/90"><Navigation className="h-4 w-4" /> Buka di Google Maps</motion.a>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
}
