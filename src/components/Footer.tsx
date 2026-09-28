import Link from "next/link";
import { NAV, BRANCHES } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="border-t bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.7fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-xs font-bold tracking-[0.18em] text-primary">GG</span>
              <span className="leading-none">
                <span className="block text-xs font-bold tracking-[0.14em]">GRAND GROUP</span>
                <span className="block text-[10px] tracking-[0.22em] opacity-60">PASTI MURAH</span>
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed opacity-70">Ritel bahan bangunan, alat teknik & perlengkapan rumah tangga terlengkap di Sulawesi Utara. Tujuh cabang, satu komitmen — nilai terbaik untuk setiap rumah dan proyek.</p>
            <p className="mt-4 text-xs tracking-[0.16em] opacity-50">MANADO • MINAHASA UTARA • BITUNG</p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] opacity-80">NAVIGASI</p>
            <ul className="mt-4 grid gap-2.5 text-sm opacity-70">
              {NAV.map((n) => <li key={n.href}><Link href={n.href} className="transition-opacity hover:opacity-100 hover:underline underline-offset-4">{n.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] opacity-80">CABANG PILIHAN</p>
            <ul className="mt-4 grid gap-2 text-sm opacity-70">
              {BRANCHES.slice(0, 4).map((b) => <li key={b.name} className="leading-snug">{b.name}</li>)}
              <li><Link href="/cabang-kami" className="font-medium opacity-100 underline underline-offset-4 hover:opacity-80">Lihat 7 cabang →</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-2 px-4 py-5 text-xs opacity-60 sm:flex-row sm:px-6">
          <span>© {new Date().getFullYear()} Grand Group. Dibuat dengan ketelitian di Manado.</span>
          <span className="tracking-wide">Grand Hardware • Grand Prima</span>
        </div>
      </div>
    </footer>
  );
}
