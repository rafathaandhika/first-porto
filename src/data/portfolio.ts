export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  techCount: number;
  featuresCount: number;
  liveLink?: string;
  githubLink?: string;
  technologies: string[];
  keyFeatures: string[];
  image: string;
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
    photoUrl: "/profile.jpg", // Tempat meletakkan foto Rafatha
    cvLink: "/cv.pdf", // Link CV Rafatha
    email: "rafatha.andikha123@gmail.com",
    github: "https://github.com/rafathaandhika",
    linkedin: "https://www.linkedin.com/in/rafatha-andhika-5a2843316/",
    instagram: "https://www.instagram.com/rafathaandhika/",
  },

  stats: [
    { number: "4+", label: "Projects" },
    { number: "2+", label: "Certificates" },
    { number: "100%", label: "Completed Works" },
  ],

  projects: [
    {
      id: "it-inventory",
      title: "Enterprise IT Asset & Inventory",
      subtitle: "Modul Odoo Kustom untuk Manajemen Siklus Hidup Aset IT",
      category: "Asset Management",
      description:
        "Sistem pelacakan inventaris perangkat keras dan lisensi perangkat lunak perusahaan di Odoo. Dilengkapi pemindaian barcode, alert jadwal maintenance otomatis, dan pencatatan riwayat peminjaman aset oleh karyawan.",
      techCount: 5,
      featuresCount: 5,
      liveLink: "",
      githubLink: "https://github.com/rafathaandhika",
      technologies: ["Python", "Odoo ORM", "PostgreSQL", "XML Views", "QWeb"],
      keyFeatures: [
        "Pelacakan spesifikasi hardware & nomor seri aset",
        "Alokasi lisensi software dan notifikasi masa kedaluwarsa",
        "Workflow peminjaman & pengembalian aset karyawan",
        "Tiket maintenance otomatis saat status perangkat abnormal",
        "Cetak label aset stiker QR-Code via template QWeb",
      ],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "hospital-system",
      title: "Healthcare Clinic & Patient Workflow",
      subtitle: "Sistem Informasi Manajemen Klinik & Antrean Pasien",
      category: "Healthcare HIS",
      description:
        "Modul Odoo terintegrasi untuk registrasi pasien, jadwal praktek dokter, rekam medis elektronik (EMR), dan pembuatan faktur tagihan otomatis ke modul akuntansi Odoo.",
      techCount: 4,
      featuresCount: 5,
      liveLink: "",
      githubLink: "https://github.com/rafathaandhika",
      technologies: ["Python", "Odoo Accounting", "PostgreSQL", "XML-RPC"],
      keyFeatures: [
        "Master data pasien dengan riwayat alergi dan rekam medis",
        "Penjadwalan janji temu dokter dengan tampilan kalender",
        "Wizard input resep obat & diagnosis konsultasi cepat",
        "Pembuatan tagihan faktur otomatis ke Odoo Invoicing",
        "Hak akses keamanan ketat per grup pengguna (Dokter vs Kasir)",
      ],
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "regional-tax",
      title: "Automated Regional Tax Engine",
      subtitle: "Mesin Perhitungan & Kepatuhan Pajak Daerah",
      category: "Finance & Tax",
      description:
        "Engine komputasi pajak berbasis Python & Odoo yang memproses kategori pajak daerah, validasi formula berjenjang, perhitungan denda otomatis, dan penerbitan laporan ketetapan pajak resmi.",
      techCount: 4,
      featuresCount: 5,
      liveLink: "",
      githubLink: "https://github.com/rafathaandhika",
      technologies: ["Python", "Odoo ORM", "PostgreSQL", "QWeb Reports"],
      keyFeatures: [
        "Konfigurasi formula tarif berjenjang yang dinamis",
        "Algoritma perhitungan denda otomatis atas keterlambatan bayar",
        "Audit trail histori perubahan formula dan log penilaian",
        "Generator Surat Ketetapan Pajak (SKP) format PDF resmi",
        "Wizard pemrosesan batch data transaksi massal",
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "library-system",
      title: "Digital Library & Circulation System",
      subtitle: "Sistem Manajemen Peminjaman Buku & Keanggotaan",
      category: "Catalog Management",
      description:
        "Modul katalogisasi buku dengan barcode, batas kuota peminjaman anggota, dan otomatisasi hitung denda harian menggunakan scheduled action (cron) Odoo.",
      techCount: 4,
      featuresCount: 5,
      liveLink: "",
      githubLink: "https://github.com/rafathaandhika",
      technologies: ["Python", "Odoo ORM", "Barcode", "Cron Jobs"],
      keyFeatures: [
        "Katalogisasi nomor ISBN dan barcode salinan fisik buku",
        "Manajemen kuota anggota berdasarkan tingkatan member",
        "Sirkulasi checkout & check-in instan dengan barcode scanner",
        "Cron job harian untuk otomatisasi perhitungan denda keterlambatan",
        "Cetak kartu anggota dengan barcode ID unik",
      ],
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
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
    { name: "React.js", category: "Framework", color: "#61DAFB", icon: "react" },
    { name: "Next.js", category: "Framework", color: "#ffffff", icon: "next" },
    { name: "Tailwind CSS", category: "Tool", color: "#38B2AC", icon: "tailwind" },
    { name: "XML & QWeb", category: "Language", color: "#E44D26", icon: "xml" },
    { name: "Git & GitHub", category: "Tool", color: "#F05032", icon: "git" },
    { name: "Linux / Ubuntu", category: "Tool", color: "#FCC624", icon: "linux" },
    { name: "REST API", category: "Tool", color: "#10B981", icon: "api" },
  ],
};
