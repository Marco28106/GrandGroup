import Link from "next/link";
import { NAV, BRANCHES } from "@/lib/data";
import { MapPin, Phone, Clock3 } from "lucide-react";
export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" aria-hidden />
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-10 grid gap-10 lg:grid-cols-[1.35fr_0.7fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-white font-display text-sm font-extrabold relative">GG<span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-accent ring-2 ring-white" aria-hidden /></span>
            <span className="leading-none">
              <span className="block font-display text-sm font-bold text-primary">GRAND GROUP</span>
              <span className="block text-xs font-bold tracking-[0.16em] text-accent">PASTI MURAH</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">Pusat ritel bahan bangunan, alat teknik &amp; perlengkapan rumah tangga terlengkap di Sulawesi Utara. Harga <b className="text-accent">PASTI MURAH</b> di 7 cabang strategis.</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 font-medium"><MapPin className="h-3.5 w-3.5 text-primary" /> Manado • Minut • Bitung</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 font-semibold text-accent"><Clock3 className="h-3.5 w-3.5" /> 08.30–20.30</span>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold">Navigasi</p>
          <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
            {NAV.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-primary hover:underline underline-offset-4">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="text-sm font-bold">Cabang</p>
          <ul className="mt-3 grid gap-1.5 text-sm text-muted-foreground">
            {BRANCHES.slice(0, 4).map((b) => <li key={b.name} className="flex gap-1.5"><span className="text-accent">•</span> {b.name}</li>)}
            <li><Link href="/cabang-kami" className="inline-flex items-center gap-1 font-semibold text-accent hover:underline">Lihat 7 cabang →</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t bg-secondary/40">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 py-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Grand Group. PASTI MURAH.</span>
          <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5 text-primary" /> Hubungi cabang terdekat untuk penawaran terbaik</span>
        </div>
      </div>
    </footer>
  );
}
