"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Award, Building2, Clock3, Layers, MapPin, Sparkles, Wrench, Zap } from "lucide-react";
import { BRANCHES } from "@/lib/data";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
export default function Home() {
  const reduce = useReducedMotion();
  return (
    <div>
      <section className="relative overflow-hidden border-b bg-card">
        <div className="pointer-events-none absolute inset-0 paper-grid opacity-[0.35]" aria-hidden />
        <div className="pointer-events-none absolute -top-32 right-[-10%] h-[520px] w-[680px] rounded-full bg-secondary blur-[70px] opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-medium tracking-[0.14em] text-muted-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 shadow-sm"><span className="h-1.5 w-1.5 rounded-full bg-accent" /> EST. LEBIH DARI 20 TAHUN</span>
            <span className="hidden sm:inline">—</span>
            <span>7 CABANG • MANADO • MINUT • BITUNG</span>
          </div>
          <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <motion.div initial={{ opacity: 0, y: reduce ? 0 : 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
              <p className="hairline text-[11px] font-semibold text-accent">GRAND HARDWARE & GRAND PRIMA</p>
              <h1 className="mt-3 text-[36px] font-semibold leading-[0.92] tracking-[-0.03em] sm:text-[52px] lg:text-[62px]">
                Selamat datang
                <br />
                <span className="font-normal italic">di Grand Group</span>
              </h1>
              <div className="mt-5 h-px w-16 bg-accent/60" aria-hidden />
              <p className="mt-5 max-w-[58ch] text-[15px] leading-7 text-muted-foreground">
                Perwujudan dedikasi & kepercayaan dua dekade. Dari kebutuhan teknik dan bangunan, kini bertumbuh menjadi ritel modern — <b className="font-semibold text-foreground">Grand Hardware</b> & <b className="font-semibold text-foreground">Grand Prima</b> — tertata per lantai, terkurasi, dekat di 7 titik strategis.
              </p>
              <p className="mt-3 max-w-[58ch] text-sm leading-6 text-muted-foreground">Setiap pembangunan adalah investasi masa depan. Solusi lengkap, nilai terbaik — <span className="rounded-full border bg-secondary px-2.5 py-1 text-xs font-semibold tracking-wide text-foreground">PASTI MURAH</span></p>
              <div className="mt-7 flex flex-wrap gap-3">
                <motion.div whileHover={{ y: reduce ? 0 : -1 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/daftar-produk" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
                    Lihat Produk <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: reduce ? 0 : -1 }} whileTap={{ scale: 0.98 }}>
                  <Link href="/cabang-kami" className="inline-flex items-center gap-2 rounded-full border bg-card px-7 py-3.5 text-sm font-medium transition-colors hover:bg-secondary">
                    <MapPin className="h-4 w-4" /> Cabang Terdekat
                  </Link>
                </motion.div>
              </div>
              <div className="mt-8 grid max-w-[460px] grid-cols-3 overflow-hidden rounded-2xl border bg-card shadow-sm">
                {[
                  { k: "7", l: "Cabang Strategis" },
                  { k: "20+", l: "Tahun Mengabdi" },
                  { k: "1000+", l: "Produk Terkurasi" },
                ].map((s) => (
                  <div key={s.l} className="border-r px-4 py-4 text-center last:border-0">
                    <div className="font-display text-[22px] font-semibold leading-none">{s.k}</div>
                    <div className="mt-1 text-[11px] tracking-[0.08em] text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: reduce ? 0 : 18, scale: reduce ? 1 : 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.7, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }} className="grid gap-4">
              <div className="relative overflow-hidden rounded-[28px] border bg-card p-2 shadow-sm">
                <img src="https://picsum.photos/seed/grand-hero/900/620" alt="Interior Grand Group" width={900} height={620} className="h-[360px] w-full rounded-[20px] object-cover sm:h-[420px]" />
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl bg-card/90 p-3 shadow-lg ring-1 ring-border backdrop-blur-xl sm:inset-x-4 sm:bottom-4">
                  <span className="flex items-center gap-2.5 text-sm font-medium">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground"><Building2 className="h-4 w-4" /></span>
                    <span className="leading-tight">One-Stop Solution <span className="block text-xs font-normal text-muted-foreground">Lantai 1–3 • Tertata rapi</span></span>
                  </span>
                  <Link href="/tentang-kami" className="hidden shrink-0 items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground sm:inline-flex">Jelajahi <ArrowUpRight className="h-3.5 w-3.5" /></Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border bg-card p-5">
                  <p className="hairline text-[11px] font-semibold text-muted-foreground">JAMINAN</p>
                  <p className="mt-2 text-sm font-medium leading-snug">Harga terbaik, kualitas terjamin — di setiap cabang.</p>
                  <p className="mt-2 text-xs text-muted-foreground">Konsultasi pemilihan material gratis.</p>
                </div>
                <div className="rounded-2xl bg-primary p-5 text-primary-foreground">
                  <p className="text-xs tracking-[0.12em] opacity-60">JAM OPERASIONAL</p>
                  <p className="mt-3 flex items-center gap-1.5 text-sm font-medium"><Clock3 className="h-4 w-4 opacity-80" /> 08.30–20.30</p>
                  <p className="mt-1 text-xs opacity-60">Minggu 10.30–20.30 (Monaco Bay)</p>
                  <Link href="/cabang-kami" className="mt-3 inline-flex text-xs font-medium underline underline-offset-4 opacity-80 hover:opacity-100">Lihat semua jam →</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1 text-xs font-medium tracking-wide shadow-sm"><Sparkles className="h-3.5 w-3.5 text-accent" /> Visi & Misi</span>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-[34px]">Visi & Misi Kami</h2>
          <div className="mx-auto mt-4 h-px w-12 bg-accent/50" aria-hidden />
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-muted-foreground">Menjadi pusat ritel bahan bangunan, alat teknik, dan perlengkapan rumah tangga yang paling <em className="not-italic font-medium text-foreground">terpercaya, terlengkap</em>, dan menjadi pilihan utama masyarakat di Sulawesi Utara.</p>
        </Reveal>
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            { icon: Award, title: "Kualitas & Harga Terbaik", desc: "Ribuan pilihan produk berkualitas dengan komitmen harga PASTI MURAH." },
            { icon: MapPin, title: "Kemudahan Akses", desc: "Pelayanan cepat & profesional melalui 7 cabang strategis." },
            { icon: Sparkles, title: "Inovasi Berkelanjutan", desc: "Adaptasi teknologi & tren untuk pengalaman belanja modern." },
          ].map((c) => (
            <StaggerItem key={c.title}>
              <motion.div whileHover={{ y: reduce ? 0 : -4 }} transition={{ type: "spring", stiffness: 420, damping: 26 }} className="rounded-[20px] border bg-card p-6 shadow-sm sm:p-7">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-foreground"><c.icon className="h-5 w-5" /></span>
                <h3 className="mt-5 text-[15px] font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{c.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <section className="border-y bg-secondary/50">
        <div className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="hairline text-[11px] font-semibold text-accent">TERTATA PER LANTAI</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-[28px]">Mengapa Memilih Grand Grup?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">Dua puluh tahun memahami kebutuhan teknis dan estetika — dari konstruksi hingga gaya hidup, dalam satu atap.</p>
            </div>
            <Link href="/tentang-kami" className="hidden items-center gap-1.5 rounded-full border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-card sm:inline-flex">Lihat divisi lengkap <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
          <Stagger className="mt-8 grid gap-5 lg:grid-cols-3">
            {[
              { n: "01", t: "Lantai 1 — Teknik & Konstruksi", d: "Bahan bangunan, keramik, handtools & powertools.", icon: Wrench, img: "https://picsum.photos/seed/grand-l1/600/400" },
              { n: "02", t: "Lantai 2 — Elektrikal & Air", d: "Instalasi listrik aman & sistem distribusi air modern.", icon: Zap, img: "https://picsum.photos/seed/grand-l2/600/400" },
              { n: "03", t: "Lantai 3 — Furnitur & Gaya Hidup", d: "Furniture, HORECA & alat olahraga terkurasi.", icon: Layers, img: "https://picsum.photos/seed/grand-l3/600/400" },
            ].map((f) => (
              <StaggerItem key={f.n}>
                <motion.div whileHover={{ y: reduce ? 0 : -3 }} transition={{ type: "spring", stiffness: 420, damping: 26 }} className="overflow-hidden rounded-[24px] border bg-card shadow-sm">
                  <div className="overflow-hidden"><motion.img whileHover={{ scale: reduce ? 1 : 1.04 }} transition={{ duration: 0.6 }} src={f.img} alt={f.t} width={600} height={400} className="h-48 w-full object-cover" /></div>
                  <div className="p-6">
                    <span className="hairline text-[11px] font-semibold text-muted-foreground">{f.n}</span>
                    <h3 className="mt-2 flex items-center gap-2 text-[15px] font-semibold"><f.icon className="h-4 w-4 text-accent" /> {f.t}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{f.d}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <section className="mx-auto max-w-[1280px] px-4 py-12 sm:px-6 sm:py-16">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="hairline text-[11px] font-semibold text-accent">JARINGAN</p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">Jaringan 7 Cabang</h2>
          </div>
          <Link href="/cabang-kami" className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Lihat semua</Link>
        </Reveal>
        <Stagger className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BRANCHES.slice(0, 3).map((b) => (
            <StaggerItem key={b.name}>
              <motion.div whileHover={{ y: reduce ? 0 : -3 }} transition={{ type: "spring", stiffness: 420, damping: 26 }} className="rounded-[24px] border bg-card p-6 shadow-sm">
                <p className="hairline text-[11px] font-semibold text-accent">{b.tag}</p>
                <h3 className="mt-2 text-[15px] font-semibold leading-tight">{b.name}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{b.addr}</p>
                <p className="mt-2 text-xs text-muted-foreground">{b.hours}</p>
                <div className="mt-4 overflow-hidden rounded-xl border bg-secondary"><img src={`https://picsum.photos/seed/${encodeURIComponent(b.name)}/600/180`} alt="" width={600} height={180} className="h-28 w-full object-cover" /></div>
                <a href={b.maps} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full border bg-card px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"><MapPin className="h-4 w-4" /> Buka Maps</a>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
      <section className="border-y bg-card">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row sm:px-6">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight sm:text-2xl">Siap belanja dengan harga <span className="italic font-normal">PASTI MURAH?</span></p>
            <p className="mt-1 text-sm text-muted-foreground">Kunjungi cabang terdekat atau jelajahi katalog produk kami.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/daftar-produk" className="rounded-full border bg-card px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-secondary">Daftar Produk</Link>
            <Link href="/cabang-kami" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Cabang Kami</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
