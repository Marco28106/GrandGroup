export const NAV = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Cabang Kami", href: "/cabang-kami" },
  { label: "Daftar Produk", href: "/daftar-produk" },
  { label: "Demo & Produk Info", href: "/demo-produk-info" },
] as const;

export const BRANCHES = [
  { name: "Grand Prima Home & Work", addr: "Kompleks Monaco Bay, Jl. Piere Tendean No.1 Blok A, Manado", hours: "Senin–Sabtu 08.30–20.30 | Minggu 10.30–20.30", maps: "https://maps.google.com/?q=Monaco+Bay+Manado", tag: "Flagship" },
  { name: "Grand Prima Home & Living", addr: "Pinaesaan, Wenang, Manado City", hours: "Senin–Sabtu 08.30–20.30", maps: "https://maps.google.com/?q=Pinaesaan+Wenang+Manado", tag: "Home & Living" },
  { name: "Grand Hardware ITC Marina", addr: "Kompleks ITC Marina Plaza, Blok B7, Manado", hours: "Senin–Sabtu 08.30–20.30", maps: "https://maps.google.com/?q=ITC+Marina+Plaza+Manado", tag: "Hardware" },
  { name: "Grand Hardware Malalayang", addr: "Jl. Wolter Monginsidi No.58, Malalayang Satu, Manado", hours: "Senin–Sabtu 08.30–20.30", maps: "https://maps.google.com/?q=Wolter+Monginsidi+Manado", tag: "Hardware" },
  { name: "Grand Hardware Airmadidi", addr: "Sarongsong I, Airmadidi — Minahasa Utara", hours: "Senin–Sabtu 08.30–20.30", maps: "https://maps.google.com/?q=Airmadidi+Minahasa+Utara", tag: "Hardware" },
  { name: "Grand Hardware Bitung", addr: "Jl. Raya Manado–Bitung, Girian Weru Dua", hours: "Senin–Sabtu 08.30–20.30", maps: "https://maps.google.com/?q=Girian+Weru+Bitung", tag: "Hardware" },
  { name: "Multi Cipta Teknik", addr: "Jl. W. Maramis, Manado", hours: "Senin–Sabtu 08.00–19.00", maps: "https://maps.google.com/?q=Jl+W+Marmis+Manado", tag: "Teknik" },
] as const;

export const DIVISI = [
  { title: "Konstruksi & Material Finishing", items: [
    { name: "Bahan Bangunan", desc: "Material dasar dan penyelesaian berkualitas tinggi untuk konstruksi kokoh dan tahan lama." },
    { name: "Keramik & Flooring", desc: "Koleksi lantai dan dinding berbagai motif premium untuk estetika interior & eksterior elegan." },
  ]},
  { title: "Peralatan Teknik & Keamanan Kerja", items: [
    { name: "Handtools & Powertools", desc: "Perkakas tangan & mesin listrik dari merek terpercaya untuk efisiensi dan presisi." },
    { name: "Safety Equipment", desc: "Perlengkapan K3 menyeluruh untuk perlindungan maksimal di setiap area proyek." },
  ]},
  { title: "Infrastruktur & Distribusi Air", items: [
    { name: "Peralatan Listrik", desc: "Komponen instalasi listrik aman, inovatif, berstandar nasional & internasional." },
    { name: "Peralatan Air Bersih", desc: "Sistem pemipaan, pompa & distribusi air modern untuk aliran higienis dan efisien." },
  ]},
  { title: "Divisi HORECA", sub: "Hotel, Restaurant & Cafe", items: [
    { name: "Kitchenware & Small Appliances", desc: "Perlengkapan dapur komersial & elektronik kecil andal untuk operasional kuliner." },
    { name: "Professional Equipment", desc: "Peralatan hospitalitas untuk produktivitas tinggi dengan standar kebersihan ketat." },
  ]},
  { title: "Furnitur & Gaya Hidup", items: [
    { name: "Furniture", desc: "Perabot fungsional desain terkini untuk kenyamanan hunian & kantor." },
    { name: "Hobi & Alat Olahraga", desc: "Peralatan aktivitas fisik & hobi untuk gaya hidup sehat seluruh keluarga." },
  ]},
] as const;

export const PRODUCTS = [
  { brand: "Wipro", cat: "Power Tools", count: "120+ produk" },
  { brand: "Loncin", cat: "Engine & Genset", count: "80+ produk" },
  { brand: "Panasonic", cat: "Elektrikal", count: "200+ produk" },
  { brand: "Germany Brilliant", cat: "Sanitary", count: "90+ produk" },
  { brand: "Steel Horse", cat: "Safety Shoes", count: "45+ produk" },
  { brand: "Tajima • Bosch • Makita", cat: "Handtools", count: "300+ produk" },
] as const;
