"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, Building2, Layers, MapPin, Sparkles, Wrench, Zap, Clock3, ShieldCheck, ArrowUpRight } from "lucide-react";
import { BRANCHES } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
export default function Home() {
  const reduce = useReducedMotion();
  return (
    <div>
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#14307a] to-[#0a1850]" />
        <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[90px]" aria-hidden />
        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-white/10 blur-[70px]" aria-hidden />
        <motion.div aria-hidden className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "22px 22px" }} initial={{ opacity: 0 }} animate={{ opacity: 0.06 }} transition={{ duration: 1 }} />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-16 lg:py-20 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <motion.div initial={{ opacity: 0, y: reduce ? 0 : 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
            <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }} className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold text-primary shadow-sm"><span className="grid h-5 w-5 place-items-center rounded-full bg-accent text-white"><BadgeCheck className="h-3 w-3" /></span> 7 Cabang • 20+ Tahun • <span className="text-accent">PASTI MURAH</span></motion.span>
            <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }} className="mt-4 font-display text-[30px] sm:text-[42px] lg:text-[52px] font-extrabold leading-[0.95] text-white">SELAMAT DATANG DI <span className="relative inline-block"><span className="relative z-10 text-white">GRAND GROUP</span><span className="absolute bottom-1 left-0 h-3 w-full bg-accent/90 -rotate-[0.6deg]" aria-hidden /></span></motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.5 }} className="mt-4 text-base sm:text-lg font-semibold text-white">Grand Grup: Dedikasi &amp; Kepercayaan Lebih dari Dua Dekade</motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className="mt-3 max-w-[60ch] text-sm sm:text-[15px] leading-relaxed text-white/80">Grand Grup hadir sebagai perwujudan dari dedikasi dan kepercayaan yang telah kami bangun bersama masyarakat selama lebih dari dua dekade. Mengawali perjalanan sebagai penyedia kebutuhan teknik dan bangunan, kini kami telah bertumbuh menjadi kekuatan ritel modern melalui <b className="text-white">Grand Hardware</b> dan <b className="text-white">Grand Prima</b> yang tersebar di 7 cabang strategis di Manado dan sekitarnya.</motion.p>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.5 }} className="mt-3 max-w-[60ch] text-sm leading-relaxed text-white/65">Kami percaya setiap pembangunan adalah investasi masa depan. Komitmen kami: hadir lebih dekat, solusi lengkap, nilai terbaik dengan jaminan harga <b className="text-white">PASTI MURAH</b>.</motion.p>
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42, duration: 0.4 }} className="mt-7 flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: reduce ? 1 : 1.02, y: reduce ? 0 : -1 }} whileTap={{ scale: 0.98 }}><Link href="/daftar-produk" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/20 hover:bg-accent/90">Lihat Produk <ArrowRight className="h-4 w-4" /></Link></motion.div>
              <motion.div whileHover={{ scale: reduce ? 1 : 1.02 }} whileTap={{ scale: 0.98 }}><Link href="/cabang-kami" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-primary shadow hover:bg-white/90"><MapPin className="h-4 w-4 text-accent" /> Cabang Terdekat</Link></motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.4 }} className="mt-7 grid grid-cols-3 max-w-md divide-x divide-white/15 rounded-2xl bg-white/10 p-3 ring-1 ring-white/15 backdrop-blur">
              {[{ k: "7", l: "Cabang" }, { k: "20+", l: "Tahun" }, { k: "1000+", l: "Produk" }].map((s) => (
                <div key={s.l} className="px-2 text-center">
                  <div className="font-display text-xl font-extrabold text-white">{s.k}</div>
                  <div className="text-[11px] font-semibold tracking-wide text-white/70">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: reduce ? 0 : 20, scale: reduce ? 1 : 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }} className="grid gap-4">
            <motion.div whileHover={{ y: reduce ? 0 : -4 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className="relative overflow-hidden rounded-[28px] bg-white p-2 shadow-2xl">
              <div className="absolute left-2 top-2 z-10 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white shadow"> <ShieldCheck className="h-3.5 w-3.5" /> Terpercaya sejak 2000+ </div>
              <img src="https://picsum.photos/seed/grand-hero/900/620" alt="Toko Grand Hardware dummy" width={900} height={620} className="h-[300px] w-full object-cover rounded-[22px] sm:h-[380px]" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-black/5">
                <span className="flex items-center gap-2 text-sm font-bold text-primary"><span className="grid h-8 w-8 place-items-center rounded-xl bg-accent text-white"><Building2 className="h-4 w-4" /></span> One-Stop Solution • Lantai 1–3</span>
                <Link href="/tentang-kami" className="hidden sm:inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white">Jelajahi <ArrowUpRight className="h-3.5 w-3.5" /></Link>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div whileHover={{ y: reduce ? 0 : -2 }} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
                <p className="inline-flex rounded-full bg-accent px-2.5 py-1 text-[11px] font-extrabold tracking-wide text-white">PASTI MURAH</p>
                <p className="mt-2 text-sm font-bold leading-snug text-primary">Harga terbaik, kualitas terjamin di semua cabang.</p>
                <p className="text-xs text-muted-foreground">Garansi harga kompetitif.</p>
              </motion.div>
              <motion.div whileHover={{ y: reduce ? 0 : -2 }} className="rounded-2xl bg-accent p-4 text-white shadow-sm">
                <p className="text-xs font-bold opacity-90">Jam Operasional</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-bold"><Clock3 className="h-4 w-4" /> 08.30–20.30</p>
                <p className="text-xs opacity-80">Minggu 10.30–20.30 (Monaco Bay)</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent"><Sparkles className="h-3.5 w-3.5" /> Visi &amp; Misi</span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold">Visi &amp; Misi Kami</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Menjadi pusat ritel bahan bangunan, alat teknik, dan perlengkapan rumah tangga yang paling <b className="text-primary">terpercaya, terlengkap</b>, dan menjadi pilihan utama masyarakat di Sulawesi Utara.</p>
        </Reveal>
        <Stagger className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { icon: BadgeCheck, title: "Kualitas & Harga Terbaik", desc: "Ribuan pilihan produk berkualitas tinggi dengan komitmen harga PASTI MURAH untuk pembangunan & kenyamanan hunian.", accent: true },
            { icon: MapPin, title: "Kemudahan Akses", desc: "Pelayanan cepat & profesional melalui jaringan 7 cabang strategis yang mudah dijangkau.", accent: false },
            { icon: Sparkles, title: "Inovasi Berkelanjutan", desc: "Adaptasi teknologi & tren rumah tangga untuk pengalaman belanja modern yang memuaskan.", accent: false },
          ].map((c) => (
            <StaggerItem key={c.title}>
              <motion.div whileHover={{ y: reduce ? 0 : -6, scale: reduce ? 1 : 1.01 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className={`group relative overflow-hidden rounded-[24px] border bg-white p-6 shadow-sm ${c.accent ? "ring-1 ring-accent/15" : ""}`}>
                {c.accent && <span className="absolute left-0 top-0 h-1 w-full bg-accent" aria-hidden />}
                <span className={`grid h-11 w-11 place-items-center rounded-xl ${c.accent ? "bg-accent text-white" : "bg-primary text-white"}`}><c.icon className="h-5 w-5" /></span>
                <h3 className="mt-4 font-display text-base font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="border-y bg-secondary">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-14">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-primary ring-1 ring-black/5">Kenapa Grand Grup?</span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold">Mengapa Memilih Grand Grup?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">Dengan pengalaman lebih dari 20 tahun: pusat teknik &amp; konstruksi di Lantai 1, elektrikal di Lantai 2, hingga galeri furnitur &amp; gaya hidup di Lantai 3 — solusi satu atap.</p>
            </div>
            <Link href="/tentang-kami" className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-primary/90">Lihat divisi lengkap <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
          <Stagger className="mt-6 grid gap-4 lg:grid-cols-3">
            {[
              { n: "01", t: "Lantai 1 — Teknik & Konstruksi", d: "Bahan bangunan, keramik, handtools, powertools & safety equipment.", icon: Wrench, img: "https://picsum.photos/seed/grand-l1/600/400", bar: "bg-primary" },
              { n: "02", t: "Lantai 2 — Elektrikal & Air", d: "Instalasi listrik aman & sistem distribusi air modern yang higienis.", icon: Zap, img: "https://picsum.photos/seed/grand-l2/600/400", bar: "bg-accent" },
              { n: "03", t: "Lantai 3 — Furnitur & Gaya Hidup", d: "Furniture, HORECA, kitchenware & alat olahraga untuk hunian & usaha.", icon: Layers, img: "https://picsum.photos/seed/grand-l3/600/400", bar: "bg-primary" },
            ].map((f) => (
              <StaggerItem key={f.n}>
                <motion.div whileHover={{ y: reduce ? 0 : -4 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className="overflow-hidden rounded-[24px] border bg-white shadow-sm">
                  <div className={`h-1 w-full ${f.bar}`} aria-hidden />
                  <div className="overflow-hidden"><motion.img whileHover={{ scale: reduce ? 1 : 1.05 }} transition={{ duration: 0.5 }} src={f.img} alt={f.t} width={600} height={400} className="h-48 w-full object-cover" /></div>
                  <div className="p-5">
                    <span className="text-xs font-extrabold tracking-widest text-accent">{f.n}</span>
                    <h3 className="mt-1 flex items-center gap-2 font-display font-bold"><f.icon className="h-4 w-4 text-primary" /> {f.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10 sm:py-14">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-bold text-accent"><MapPin className="h-3.5 w-3.5" /> 7 Cabang Sulawesi Utara</span>
            <h2 className="mt-2 font-display text-xl sm:text-2xl font-extrabold">Jaringan 7 Cabang Strategis</h2>
          </div>
          <Link href="/cabang-kami" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white hover:bg-primary/90">Lihat semua <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BRANCHES.slice(0, 3).map((b) => (
            <StaggerItem key={b.name}>
              <motion.div whileHover={{ y: reduce ? 0 : -4 }} transition={{ type: "spring", stiffness: 400, damping: 20 }} className="rounded-[24px] border bg-white p-5 shadow-sm">
                <span className="inline-flex rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-white">{b.tag}</span>
                <h3 className="mt-3 font-display font-bold">{b.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.addr}</p>
                <p className="mt-2 text-xs font-medium text-muted-foreground">{b.hours}</p>
                <div className="mt-3 overflow-hidden rounded-xl bg-secondary"><img src={`https://picsum.photos/seed/${encodeURIComponent(b.name)}/600/180`} alt="" width={600} height={180} className="h-28 w-full object-cover" /></div>
                <a href={b.maps} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-secondary px-4 py-2.5 text-sm font-bold text-primary hover:bg-secondary/80"><MapPin className="h-4 w-4 text-accent" /> Buka Maps</a>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <Reveal className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#1a3a9a]" aria-hidden />
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-[50px]" aria-hidden />
        <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-display text-lg font-extrabold">Siap belanja dengan harga <span className="text-white underline decoration-accent decoration-4 underline-offset-2">PASTI MURAH</span>?</p>
            <p className="text-sm text-white/75">Kunjungi cabang terdekat atau jelajahi katalog produk kami.</p>
          </div>
          <div className="flex gap-3">
            <motion.div whileHover={{ scale: reduce ? 1 : 1.03 }} whileTap={{ scale: 0.97 }}><Link href="/daftar-produk" className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow inline-flex">Daftar Produk</Link></motion.div>
            <motion.div whileHover={{ scale: reduce ? 1 : 1.03 }} whileTap={{ scale: 0.97 }}><Link href="/cabang-kami" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-primary inline-flex">Cabang Kami</Link></motion.div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
