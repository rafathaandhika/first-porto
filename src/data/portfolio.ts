export interface ProjectGalleryItem {
  src: string;
  caption: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  contributions: string[];
  techCount: number;
  featuresCount: number;
  liveLink?: string;
  githubLink?: string;
  technologies: string[];
  keyFeatures: string[];
  image: string;
  gallery?: ProjectGalleryItem[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
}

export interface TechItem {
  name: string;
  category: "Framework" | "Language" | "Database" | "Tool";
  iconName: string;
  color: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Muhammad Rafatha Andhika Rasyidinputra",
    shortName: "Rafatha Andhika",
    domain: "rafatha.dev",
    role: "Odoo & Python Developer",
    rotatingRoles: [
      "Odoo Developer",
      "Python Backend Engineer",
      "ERP Specialist",
      "Business Automation",
    ],
    bioShort:
      "Menciptakan sistem ERP modern dengan tampilan bersih, responsif, dan logika bisnis yang kuat. Mengubah alur bisnis kompleks menjadi modul Odoo yang efisien dan mudah digunakan.",
    bioAbout:
      "Developer dengan fokus pada backend Python dan ekosistem Odoo ERP (v14–v18). Berpengalaman dalam merancang skema database relasional PostgreSQL, membangun modul kustom, automasi alur kerja operasional, serta integrasi sistem pihak ketiga melalui API.",
    quote:
      "Turning complex business logic into clean, robust, and automated digital systems.",
    location: "Indonesia",
    status: "AVAILABLE FOR WORK",
    photoUrl: "/profile.jpg",
    cvLink: "/cv.pdf",
    email: "rafatha.andikha123@gmail.com",
    github: "https://github.com/rafathaandhika",
    linkedin: "https://www.linkedin.com/in/rafatha-andhika-5a2843316/",
    instagram: "https://www.instagram.com/rafathaandhika/",
  },

  stats: [
    { number: "5+", label: "Projects" },
    { number: "v16–v18", label: "Odoo Versions" },
    { number: "100%", label: "Completed Works" },
  ],

  projects: [
    {
      id: "klinik-senyum-ceria",
      title: "Klinik Senyum Ceria — Dental Clinic ERP",
      subtitle: "Sistem Manajemen Klinik Gigi & Rekam Medis Digital (Odoo 16+)",
      category: "Healthcare ERP",
      description:
        "Suite modul Odoo ERP kustom untuk mendigitalisasi operasional klinik gigi—mencakup reservasi janji temu, jadwal dokter real-time, resep & template tindakan gigi digital, notifikasi pengingat otomatis, serta integrasi inventaris dan penagihan.",
      contributions: [
        "Membangun fitur Prescriptions Template pada menu konfigurasi dan mengotomatiskan pengisian data treatment di modul resep dokter gigi berdasarkan template yang dipilih.",
        "Menambahkan pengaturan Reminder Time dan sistem notifikasi otomatis untuk jadwal janji temu pasien langsung ke activity feed Odoo.",
        "Mengoptimalkan kolom Booking Time menjadi input waktu yang presisi serta mengatur kolom time shift dan departemen dokter sebagai read-only.",
        "Menambahkan opsi kategori kontak 'Other' dengan validasi email opsional serta memperbaiki bug deteksi duplikasi saat penambahan user.",
      ],
      techCount: 5,
      featuresCount: 4,
      liveLink: "",
      githubLink: "",
      technologies: ["Python", "Odoo 16+ ORM", "PostgreSQL", "XML Views", "Docker"],
      keyFeatures: [
        "Manajemen antrean, booking jadwal & ketersediaan dokter real-time",
        "Template resep & tindakan perawatan gigi otomatis",
        "Reminder janji temu otomatis terintegrasi ke activity feed",
        "Kontrol kontak, user access, dan integrasi billing klinik",
      ],
      image: "/projects/klinik-dashboard.jpg",
      gallery: [
        { src: "/projects/klinik-dashboard.jpg", caption: "Dashboard Antrian & Appointment Dokter" },
        { src: "/projects/klinik-prescription.png", caption: "Form Dental Record & Prescriptions" },
        { src: "/projects/klinik-apps.jpg", caption: "Launcher Modul ERP Klinik" },
      ],
    },
    {
      id: "simpada-malang",
      title: "SIMPADA Regional Tax Reporting (Malang)",
      subtitle: "Sistem Pelaporan & Dokumen Perpajakan Daerah (Odoo 17)",
      category: "GovTech & Tax ERP",
      description:
        "Platform ERP perpajakan daerah berbasis Odoo 17 untuk pengelolaan pelaporan pajak daerah (SPTPD), penerbitan kode billing, pemantauan transaksi e-tax, serta pencetakan dokumen formulir perpajakan resmi berbasis QWeb.",
      contributions: [
        "Memperbarui format cetak PDF SPTPD Pajak Hotel dan SPTPD Pajak Restoran menggunakan template QWeb agar sesuai dengan standar formulir fisik terbaru.",
        "Merevisi tata letak tabel rincian kamar full-row, perataan elemen formulir, serta mekanisme tabel fallback pada laporan PDF.",
        "Menyesuaikan format teks NPWPD dan proporsi kode billing pada dokumen cetak agar lebih rapi, jelas, dan konsisten.",
      ],
      techCount: 5,
      featuresCount: 4,
      liveLink: "",
      githubLink: "",
      technologies: ["Python", "Odoo 17", "QWeb PDF", "PostgreSQL", "XML"],
      keyFeatures: [
        "Pelaporan SPTPD Pajak Hotel, Pajak Restoran & sektor pajak daerah",
        "Pencetakan dokumen resmi QWeb PDF dengan layout presisi",
        "Dukungan informasi e-tax dan generasi kode billing pembayaran",
        "Pengelolaan data wajib pajak & hak akses pelaporan terstruktur",
      ],
      image: "/projects/malang-pdl.jpg",
      gallery: [
        { src: "/projects/malang-pdl.jpg", caption: "Dashboard Realisasi Pajak Daerah Lainnya (PDL)" },
        { src: "/projects/malang-bphtb.png", caption: "Dashboard Pengajuan & Analitik BPHTB" },
        { src: "/projects/malang-wp.png", caption: "Form Registrasi Data Wajib Pajak" },
      ],
    },
    {
      id: "simpada-tabalong",
      title: "SIMPADA Tax Revision & Security (Tabalong)",
      subtitle: "Modul Permohonan Perubahan Data & Keamanan Ketetapan (Odoo 17)",
      category: "GovTech & Security",
      description:
        "Sistem informasi pendapatan daerah berbasis Odoo 17 yang menangani siklus pelaporan pajak, permohonan perubahan data wajib pajak, koreksi ketetapan lebih/kurang bayar, serta kontrol keamanan berbasis peran pengguna.",
      contributions: [
        "Mengembangkan fitur deteksi otomatis rincian perubahan data (diff tracking) pada modul permohonan ubah data ketetapan pajak.",
        "Menstandarkan format masa pajak ke MM/YYYY serta menyempurnakan tampilan rincian perbandingan form revisi.",
        "Menerapkan pembatasan hak akses (security ACL) pada fitur perbaikan Lebih Bayar & Kurang Bayar serta mengunci kolom tanggal dan masa pajak khusus untuk Staff & Admin.",
      ],
      techCount: 5,
      featuresCount: 4,
      liveLink: "",
      githubLink: "",
      technologies: ["Python", "Odoo 17", "Odoo Security ACL", "PostgreSQL", "XML"],
      keyFeatures: [
        "Deteksi otomatis diff perubahan data sebelum & sesudah revisi",
        "Workflow perbaikan ketetapan Lebih Bayar & Kurang Bayar",
        "Pembatasan hak akses sensitif khusus Staff dan Administrator",
        "Terintegrasi dengan modul retribusi daerah & kanal pembayaran",
      ],
      image: "/projects/tabalong-dashboard.png",
      gallery: [
        { src: "/projects/tabalong-dashboard.png", caption: "Dashboard Target Realisasi Pajak Daerah" },
        { src: "/projects/tabalong-objek.png", caption: "Form Detail Objek Pajak & Geolocation" },
        { src: "/projects/tabalong-laporan.png", caption: "Wizard Export Laporan Wajib Pajak (Excel)" },
      ],
    },
    {
      id: "simpada-malteng",
      title: "SIMPADA Revenue, Objection & Opsen (Malteng)",
      subtitle: "Sistem Penerimaan Daerah, Keberatan Pajak & Dashboard Opsen (Odoo 18)",
      category: "GovTech & Analytics",
      description:
        "Sistem ERP pendapatan daerah di Odoo 18 yang mencakup pengelolaan pajak, retribusi, target opsen, pengajuan keberatan & pembatalan ketetapan pajak, hingga pelaporan realisasi keuangan daerah dalam format PDF dan Excel.",
      contributions: [
        "Mengembangkan workflow Keberatan Pajak untuk sektor PBJT, Mineral, Walet, Reklame, & Air Tanah (termasuk keberatan SKPDKB/SKPDKBT, multi-select objek keberatan, penomoran SK otomatis, & kontrol approval Bidang Keberatan).",
        "Membangun fitur Pembatalan Ketetapan Pajak (SPTPD/SKPD, SKPDKB, SKPDKBT, SKPDLB) beserta smart button terintegrasi.",
        "Mengintegrasikan Target Opsen ke Target Pajak serta menyusun dashboard & laporan Rekapitulasi Penerimaan Pajak, Retribusi, Lain-lain PAD yang Sah, Buku Pembantu, dan export Excel/PDF Daftar Reklame.",
        "Membuat modul keamanan hide_error_traceback untuk menyembunyikan detail traceback error dari pengguna non-admin.",
      ],
      techCount: 5,
      featuresCount: 4,
      liveLink: "",
      githubLink: "",
      technologies: ["Python", "Odoo 18", "QWeb & XLSX", "PostgreSQL", "RBAC Security"],
      keyFeatures: [
        "Workflow keberatan & pembatalan ketetapan pajak multi-level",
        "Dashboard target & realisasi pajak, retribusi, opsen, dan PAD lain",
        "Export laporan penerimaan & daftar reklame ke PDF dan Excel",
        "Proteksi error traceback untuk meningkatkan keamanan aplikasi",
      ],
      image: "/projects/malteng-retribusi.jpg",
      gallery: [
        { src: "/projects/malteng-retribusi.jpg", caption: "Dashboard Retribusi & Lain-lain PAD yang Sah" },
        { src: "/projects/malteng-pajak.jpg", caption: "Dashboard Target Realisasi Pajak Daerah" },
        { src: "/projects/malteng-wp.png", caption: "Form Registrasi Wajib Pajak (Pribadi / Badan Usaha / Bendahara)" },
      ],
    },
    {
      id: "jai-engineering",
      title: "Manufacturing E-Kanban & Engineering (JAI)",
      subtitle: "Sistem Produksi E-Kanban, Loading Shift & Rework Manufaktur (Odoo 18)",
      category: "Manufacturing ERP",
      description:
        "Suite modul Odoo 18 untuk digitalisasi proses produksi manufaktur komponen otomotif—meliputi penjadwalan loading per shift, generasi kartu E-Kanban berbasis QR, verifikasi jalur produksi, serta pelacakan kualitas & rework.",
      contributions: [
        "Menambahkan defensive fallback untuk workbook_variant dan mekanisme auto-assign pada master data modul E-Kanban.",
        "Mengoptimalkan proses kanban loading (load_masters) dengan pembatasan sampel sirkuit, nilai default quantity, serta pembersihan otomatis baris bernilai nol saat verifikasi.",
        "Memperbaiki struktur penulisan XML views (tag arch) untuk mencegah TypeError saat parsing view di Odoo 18.",
      ],
      techCount: 5,
      featuresCount: 4,
      liveLink: "",
      githubLink: "",
      technologies: ["Python", "Odoo 18", "XML Views", "PostgreSQL", "Manufacturing"],
      keyFeatures: [
        "Manajemen loading produksi per tanggal, shift & cut-off",
        "Generasi kartu E-Kanban dengan kode QR & penomoran otomatis",
        "Verifikasi loading, pembersihan data nol & validasi master varian",
        "Pelacakan rework, defect pareto & analitik kapasitas produksi",
      ],
      image: "/projects/jai-kanban-real.jpg",
      gallery: [
        { src: "/projects/jai-kanban-real.jpg", caption: "Daftar Kartu Kanban & Status Produksi" },
        { src: "/projects/jai-denmei-real.jpg", caption: "Modul Denmei Engineering & Rekap Part/Material" },
      ],
    },
  ],

  certificates: [
    {
      id: "cert-pkl",
      title: "Sertifikat Praktik Kerja Industri (PKL)",
      issuer: "Industri / Instansi Terkait",
      date: "2024",
      image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "cert-odoo",
      title: "Odoo Python & ERP Development Certificate",
      issuer: "Training & Development Program",
      date: "2024",
      image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80",
    },
  ],

  techStack: [
    { name: "Python", category: "Language", color: "#3776AB", icon: "python" },
    { name: "Odoo ERP", category: "Framework", color: "#714B67", icon: "odoo" },
    { name: "PostgreSQL", category: "Database", color: "#336791", icon: "postgres" },
    { name: "TypeScript", category: "Language", color: "#3178C6", icon: "ts" },
    { name: "Next.js", category: "Framework", color: "#ffffff", icon: "next" },
    { name: "Tailwind CSS", category: "Tool", color: "#38B2AC", icon: "tailwind" },
    { name: "XML & QWeb", category: "Language", color: "#E44D26", icon: "xml" },
    { name: "Git & GitHub", category: "Tool", color: "#F05032", icon: "git" },
    { name: "REST API", category: "Tool", color: "#10B981", icon: "api" },
  ],
};
