import type { Language } from "@/context/LanguageContext";

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

export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  icon: "module" | "report" | "security" | "api";
}

export interface TechItem {
  name: string;
  category: "Framework" | "Language" | "Database" | "Tool";
  icon: string;
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
    location: "Indonesia",
    photoUrl: "/profile.jpg",
    cvLink: "/cv.pdf",
    email: "rafatha.andikha123@gmail.com",
    whatsapp: "6282125763507",
    whatsappDisplay: "+62 821-2576-3507",
    github: "https://github.com/rafathaandhika",
    linkedin: "https://www.linkedin.com/in/rafatha-andhika-5a2843316/",
    instagram: "https://www.instagram.com/rafathaandhika/",
  },

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
  ] as TechItem[],
};

export interface LocalizedContent {
  nav: {
    home: string;
    about: string;
    portfolio: string;
    contact: string;
  };
  hero: {
    status: string;
    titleLine1: string;
    titleLine2: string;
    bioShort: string;
    exploreServices: string;
    exploreWork: string;
    openToOpportunities: string;
    dragHint: string;
  };
  about: {
    badge: string;
    bioAbout: string;
    quote: string;
    previewCv: string;
    viewProjects: string;
    cvModalTitle: string;
    openNewTab: string;
    downloadPdf: string;
    stats: { number: string; label: string }[];
  };
  services: {
    badge: string;
    heading: string;
    subheading: string;
    ctaText: string;
    ctaWhatsapp: string;
    items: ServiceItem[];
  };
  portfolio: {
    heading: string;
    subheading: string;
    tabProjects: string;
    tabStack: string;
    backToProjects: string;
    realDocBadge: string;
    techUsedLabel: string;
    contributionsCountLabel: string;
    deploymentLabel: string;
    contributionsTitle: string;
    keyFeaturesTitle: string;
    detailsBtn: string;
    contributionsSuffix: string;
    projects: ProjectItem[];
  };
  contact: {
    heading: string;
    subheading: string;
    formTitle: string;
    formSubtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendingBtn: string;
    sendBtn: string;
    successMsg: string;
    errorMsg: string;
    whatsappBtn: string;
    whatsappPrefill: string;
    connectTitle: string;
    whatsappCardSub: string;
    commentsTitle: string;
    commentsSubtitle: string;
    commentNamePlaceholder: string;
    commentTextPlaceholder: string;
    postingBtn: string;
    postBtn: string;
    redisNotice: string;
    commentError: string;
  };
  footer: {
    rights: string;
  };
}

const CONTENT: Record<Language, LocalizedContent> = {
  id: {
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      status: "AVAILABLE FOR FREELANCE & PROJECTS",
      titleLine1: "Odoo & Python",
      titleLine2: "Developer",
      bioShort:
        "Menciptakan sistem ERP modern dengan tampilan bersih, responsif, dan logika bisnis yang kuat. Mengubah alur bisnis kompleks menjadi modul Odoo yang efisien dan mudah digunakan.",
      exploreServices: "lihat layanan freelance",
      exploreWork: "jelajahi portofolio project",
      openToOpportunities: "terbuka untuk proyek freelance & konsultasi ERP",
      dragHint: "Tarik / Geser Saya!",
    },
    about: {
      badge: "TENTANG SAYA",
      bioAbout:
        "Developer dengan fokus pada backend Python dan ekosistem Odoo ERP (v14–v18). Berpengalaman dalam merancang skema database relasional PostgreSQL, membangun modul kustom, automasi alur kerja operasional, laporan QWeb PDF/Excel, serta integrasi sistem pihak ketiga melalui API.",
      quote:
        "Turning complex business logic into clean, robust, and automated digital systems.",
      previewCv: "Preview CV",
      viewProjects: "Lihat Project",
      cvModalTitle: "Pratinjau Curriculum Vitae",
      openNewTab: "Buka di Tab Baru",
      downloadPdf: "Download",
      stats: [
        { number: "5+", label: "Project Nyata" },
        { number: "v14–v18", label: "Versi Odoo" },
        { number: "100%", label: "Komitmen Selesai" },
      ],
    },
    services: {
      badge: "LAYANAN FREELANCE",
      heading: "Apa yang Bisa Saya Bantu?",
      subheading:
        "Solusi pengembangan Odoo ERP & Python backend yang rapi, aman, dan siap dipakai untuk kebutuhan bisnis maupun instansi Anda.",
      ctaText: "Butuh modul khusus atau perbaikan Odoo? Diskusikan kebutuhan Anda sekarang.",
      ctaWhatsapp: "Konsultasi via WhatsApp",
      items: [
        {
          id: "custom-module",
          title: "Custom Module Development",
          badge: "Odoo v14 – v18",
          description:
            "Pembuatan modul Odoo dari nol atau kustomisasi modul bawaan (Sales, Accounting, Inventory, Manufacturing, Healthcare, GovTech) sesuai SOP perusahaan Anda.",
          highlights: [
            "Model & ORM Python yang terstruktur rapi",
            "XML Views (Form, List, Kanban, Wizard) & OWL",
            "Workflow approval multi-level & smart buttons",
          ],
          icon: "module",
        },
        {
          id: "qweb-reporting",
          title: "QWeb PDF & Excel Reporting",
          badge: "Dokumen & Analitik",
          description:
            "Desain dokumen cetak resmi yang presisi (faktur, SPTPD, kartu E-Kanban QR, surat ketetapan) serta export laporan rekapitulasi multi-sheet ke Excel.",
          highlights: [
            "Layout QWeb PDF rapi sesuai formulir fisik resmi",
            "Export laporan XLSX terformat otomatis",
            "Barcode & QR Code generator terintegrasi",
          ],
          icon: "report",
        },
        {
          id: "security-automation",
          title: "Bug Fixing, Security ACL & Automation",
          badge: "Optimasi & Keamanan",
          description:
            "Perbaikan bug modul, pembatasan hak akses pengguna yang ketat, serta otomatisasi proses berulang agar tim operasional bekerja jauh lebih cepat.",
          highlights: [
            "Access Rights (ACL) & Record Rules per role",
            "Scheduled Actions (Cron) & notifikasi otomatis",
            "Audit diff perubahan data & proteksi error",
          ],
          icon: "security",
        },
        {
          id: "api-integration",
          title: "REST API & System Integration",
          badge: "Integrasi Eksternal",
          description:
            "Menghubungkan Odoo dengan aplikasi web/mobile, payment gateway, sistem pajak daerah/e-tax, atau database eksternal secara real-time dan aman.",
          highlights: [
            "Endpoint REST API kustom & webhook handler",
            "Integrasi XML-RPC / JSON-RPC antar sistem",
            "Sinkronisasi data & validasi payload aman",
          ],
          icon: "api",
        },
      ],
    },
    portfolio: {
      heading: "Portfolio Showcase",
      subheading:
        "Jelajahi pengalaman proyek Odoo & Python nyata beserta keahlian teknis saya.",
      tabProjects: "Projects",
      tabStack: "Tech Stack",
      backToProjects: "Kembali ke Projects",
      realDocBadge: "Dokumentasi Asli",
      techUsedLabel: "Teknologi Dipakai",
      contributionsCountLabel: "Kontribusi",
      deploymentLabel: "Deployment",
      contributionsTitle: "Kontribusi Saya",
      keyFeaturesTitle: "Fitur Utama",
      detailsBtn: "Detail →",
      contributionsSuffix: "Kontribusi",
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
    },
    contact: {
      heading: "Hubungi Saya",
      subheading: "Punya kebutuhan proyek Odoo, automasi Python, atau ingin berdiskusi? Kirim pesan langsung di bawah.",
      formTitle: "Kirim Pesan Langsung",
      formSubtitle:
        "Ceritakan kebutuhan sistem atau proyek freelance Anda — pesan akan langsung masuk ke email saya.",
      namePlaceholder: "Nama Anda",
      emailPlaceholder: "Email Anda",
      messagePlaceholder: "Ceritakan proyek atau kebutuhan Anda...",
      sendingBtn: "Mengirim...",
      sendBtn: "Kirim Pesan",
      successMsg: "Pesan berhasil terkirim! Terima kasih sudah menghubungi saya.",
      errorMsg: "Gagal mengirim pesan. Silakan coba lagi atau chat langsung via WhatsApp.",
      whatsappBtn: "Chat Langsung via WhatsApp",
      whatsappPrefill:
        "Halo Rafatha, saya melihat portofolio Anda dan tertarik untuk berdiskusi mengenai proyek Odoo / Python.",
      connectTitle: "Terhubung dengan Saya",
      whatsappCardSub: "Respon cepat untuk proyek",
      commentsTitle: "Komentar Pengunjung",
      commentsSubtitle: "Tinggalkan kesan, masukan, atau testimoni Anda di sini.",
      commentNamePlaceholder: "Nama Anda",
      commentTextPlaceholder: "Tulis komentar Anda...",
      postingBtn: "Mengirim...",
      postBtn: "Kirim Komentar",
      redisNotice:
        "Database cloud (Upstash Redis) belum terhubung di Vercel, sehingga komentar belum tersimpan permanen lintas perangkat.",
      commentError: "Gagal mengirim komentar. Silakan coba lagi.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      status: "AVAILABLE FOR FREELANCE & PROJECTS",
      titleLine1: "Odoo & Python",
      titleLine2: "Developer",
      bioShort:
        "Building modern ERP systems with clean interfaces, responsive layouts, and solid business logic. Transforming complex workflows into efficient, user-friendly Odoo modules.",
      exploreServices: "view freelance services",
      exploreWork: "explore my portfolio projects",
      openToOpportunities: "open for freelance projects & ERP consulting",
      dragHint: "Drag / Pull Me!",
    },
    about: {
      badge: "ABOUT ME",
      bioAbout:
        "Backend-focused Python and Odoo ERP Developer (v14–v18). Experienced in designing PostgreSQL relational schemas, building custom Odoo modules, automating operational workflows, crafting QWeb PDF/Excel reports, and integrating external systems via APIs.",
      quote:
        "Turning complex business logic into clean, robust, and automated digital systems.",
      previewCv: "Preview CV",
      viewProjects: "View Projects",
      cvModalTitle: "Curriculum Vitae Preview",
      openNewTab: "Open in New Tab",
      downloadPdf: "Download",
      stats: [
        { number: "5+", label: "Real Projects" },
        { number: "v14–v18", label: "Odoo Versions" },
        { number: "100%", label: "Delivery Commitment" },
      ],
    },
    services: {
      badge: "FREELANCE SERVICES",
      heading: "How I Can Help You",
      subheading:
        "Clean, secure, production-ready Odoo ERP & Python backend solutions tailored to streamline your business operations.",
      ctaText: "Need a custom Odoo module or urgent bug fix? Let's discuss your requirements.",
      ctaWhatsapp: "Chat on WhatsApp",
      items: [
        {
          id: "custom-module",
          title: "Custom Module Development",
          badge: "Odoo v14 – v18",
          description:
            "End-to-end Odoo module creation or customization across Sales, Accounting, Inventory, Manufacturing, Healthcare, and GovTech workflows.",
          highlights: [
            "Clean Python ORM models & business logic",
            "XML Views (Form, List, Kanban, Wizard) & OWL",
            "Multi-stage approval workflows & smart buttons",
          ],
          icon: "module",
        },
        {
          id: "qweb-reporting",
          title: "QWeb PDF & Excel Reporting",
          badge: "Documents & Analytics",
          description:
            "Pixel-accurate official printable PDFs (invoices, tax forms, QR E-Kanban cards, official decrees) and multi-sheet Excel summary exports.",
          highlights: [
            "QWeb PDF layouts matching official physical forms",
            "Formatted multi-sheet XLSX report exports",
            "Built-in Barcode & QR Code generation",
          ],
          icon: "report",
        },
        {
          id: "security-automation",
          title: "Bug Fixing, Security ACL & Automation",
          badge: "Optimization & Security",
          description:
            "Resolving module errors, implementing strict role-based permissions, and automating repetitive background tasks to save team hours.",
          highlights: [
            "Granular Access Rights (ACL) & Record Rules",
            "Scheduled Actions (Cron) & automated alerts",
            "Field-level diff auditing & error protection",
          ],
          icon: "security",
        },
        {
          id: "api-integration",
          title: "REST API & System Integration",
          badge: "External Connectivity",
          description:
            "Connecting Odoo seamlessly with web/mobile apps, payment gateways, e-tax portals, or external databases in real time.",
          highlights: [
            "Custom REST API endpoints & webhook handlers",
            "XML-RPC / JSON-RPC cross-system bridging",
            "Reliable data synchronization & payload validation",
          ],
          icon: "api",
        },
      ],
    },
    portfolio: {
      heading: "Portfolio Showcase",
      subheading:
        "Explore my real-world Odoo & Python engineering projects and core technical stack.",
      tabProjects: "Projects",
      tabStack: "Tech Stack",
      backToProjects: "Back to Projects",
      realDocBadge: "Real Documentation",
      techUsedLabel: "Technologies Used",
      contributionsCountLabel: "Contributions",
      deploymentLabel: "Deployment",
      contributionsTitle: "My Contributions",
      keyFeaturesTitle: "Key Features",
      detailsBtn: "Details →",
      contributionsSuffix: "Contributions",
      projects: [
        {
          id: "klinik-senyum-ceria",
          title: "Klinik Senyum Ceria — Dental Clinic ERP",
          subtitle: "Integrated Dental Clinic & Digital Medical Records (Odoo 16+)",
          category: "Healthcare ERP",
          description:
            "Custom Odoo ERP suite digitizing dental clinic operations—covering appointment reservations, real-time doctor scheduling, digital dental prescriptions & treatment templates, automated reminders, and billing integration.",
          contributions: [
            "Built the Prescriptions Template feature in configuration settings and automated treatment population inside dental prescription records based on selected templates.",
            "Added configurable Reminder Time options and automated appointment reminder notifications feeding directly into Odoo's activity feed.",
            "Refined Booking Time into a structured time input and enforced read-only constraints on time shift and doctor department fields.",
            "Added an 'Other' contact category with optional email validation and resolved a duplicate-detection error during user creation.",
          ],
          techCount: 5,
          featuresCount: 4,
          liveLink: "",
          githubLink: "",
          technologies: ["Python", "Odoo 16+ ORM", "PostgreSQL", "XML Views", "Docker"],
          keyFeatures: [
            "Real-time appointment queue, booking & doctor availability",
            "Automated dental prescription & treatment templates",
            "Automated appointment reminders synced to activity feed",
            "Contact role controls, user access & clinic billing integration",
          ],
          image: "/projects/klinik-dashboard.jpg",
          gallery: [
            { src: "/projects/klinik-dashboard.jpg", caption: "Appointment Queue & Doctors Dashboard" },
            { src: "/projects/klinik-prescription.png", caption: "Dental Record & Prescriptions Form" },
            { src: "/projects/klinik-apps.jpg", caption: "Clinic ERP Module Launcher" },
          ],
        },
        {
          id: "simpada-malang",
          title: "SIMPADA Regional Tax Reporting (Malang)",
          subtitle: "Regional Tax Reporting & Official Document System (Odoo 17)",
          category: "GovTech & Tax ERP",
          description:
            "Odoo 17-based regional tax management platform handling SPTPD tax filings, payment billing code generation, e-tax transaction tracking, and official QWeb PDF tax report printing.",
          contributions: [
            "Updated the QWeb PDF templates for Hotel Tax and Restaurant Tax SPTPD reports to match the latest official physical government forms.",
            "Refined full-row room detail tables, form alignments, and fallback table rendering for dynamic PDF reports.",
            "Standardized NPWPD plain-text formatting and billing code sizing on printed documents for clarity and scanner readability.",
          ],
          techCount: 5,
          featuresCount: 4,
          liveLink: "",
          githubLink: "",
          technologies: ["Python", "Odoo 17", "QWeb PDF", "PostgreSQL", "XML"],
          keyFeatures: [
            "Hotel, Restaurant & regional tax SPTPD reporting",
            "Precision QWeb PDF official tax document generation",
            "E-tax monitoring & payment billing code generation",
            "Structured taxpayer registry & role-based reporting access",
          ],
          image: "/projects/malang-pdl.jpg",
          gallery: [
            { src: "/projects/malang-pdl.jpg", caption: "Regional Tax Realization Dashboard (PDL)" },
            { src: "/projects/malang-bphtb.png", caption: "BPHTB Submission & Analytics Dashboard" },
            { src: "/projects/malang-wp.png", caption: "Taxpayer Registration Form" },
          ],
        },
        {
          id: "simpada-tabalong",
          title: "SIMPADA Tax Revision & Security (Tabalong)",
          subtitle: "Taxpayer Data Change & Assessment Security Module (Odoo 17)",
          category: "GovTech & Security",
          description:
            "Odoo 17 regional revenue system managing tax filing lifecycles, taxpayer data revision requests, overpayment/underpayment assessment corrections, and strict role-based access control.",
          contributions: [
            "Built automated field-level diff tracking to detect and display exact before/after changes on taxpayer data revision requests.",
            "Standardized tax period formatting to MM/YYYY and improved revision comparison form displays.",
            "Implemented strict security ACL restrictions on Overpayment & Underpayment corrections and locked date/tax period fields to Staff & Admin roles.",
          ],
          techCount: 5,
          featuresCount: 4,
          liveLink: "",
          githubLink: "",
          technologies: ["Python", "Odoo 17", "Odoo Security ACL", "PostgreSQL", "XML"],
          keyFeatures: [
            "Automated diff tracking for data revision requests",
            "Overpayment & Underpayment assessment correction workflow",
            "Strict role-based access controls (Staff vs Admin)",
            "Integrated regional retribution & bank payment channels",
          ],
          image: "/projects/tabalong-dashboard.png",
          gallery: [
            { src: "/projects/tabalong-dashboard.png", caption: "Current Year Tax Target & Realization Dashboard" },
            { src: "/projects/tabalong-objek.png", caption: "Tax Object Detail & Geolocation Form" },
            { src: "/projects/tabalong-laporan.png", caption: "Taxpayer Report Excel Export Wizard" },
          ],
        },
        {
          id: "simpada-malteng",
          title: "SIMPADA Revenue, Objection & Opsen (Malteng)",
          subtitle: "Regional Revenue, Tax Objection & Opsen Dashboard (Odoo 18)",
          category: "GovTech & Analytics",
          description:
            "Next-gen Odoo 18 regional revenue ERP covering taxes, retributions, opsen targets, tax objection & assessment cancellation workflows, and multi-page PDF/Excel financial reporting.",
          contributions: [
            "Developed the Tax Objection workflow across PBJT, Mineral, Swiftlet, Billboard, and Groundwater sectors—including SKPDKB/SKPDKBT objections, multi-select objection items, auto SK numbering, and multi-level approval.",
            "Implemented Tax Assessment Cancellation features (SPTPD/SKPD, SKPDKB, SKPDKBT, SKPDLB) with integrated smart buttons.",
            "Integrated Opsen targets into Tax Targets and built dashboards & reports for Tax/Retribution/PAD Realization, Subsidiary Ledgers, and Excel/PDF Billboard Registers.",
            "Created the hide_error_traceback security module to suppress technical stack traces from non-admin users.",
          ],
          techCount: 5,
          featuresCount: 4,
          liveLink: "",
          githubLink: "",
          technologies: ["Python", "Odoo 18", "QWeb & XLSX", "PostgreSQL", "RBAC Security"],
          keyFeatures: [
            "Multi-approval tax objection & cancellation workflows",
            "Executive dashboard for Tax, Retribution, Opsen & PAD targets",
            "Multi-page financial & register exports to PDF and Excel",
            "Traceback suppression module for enhanced application security",
          ],
          image: "/projects/malteng-retribusi.jpg",
          gallery: [
            { src: "/projects/malteng-retribusi.jpg", caption: "Retribution & Other Regional Revenue Dashboard" },
            { src: "/projects/malteng-pajak.jpg", caption: "Regional Tax Target & Realization Dashboard" },
            { src: "/projects/malteng-wp.png", caption: "Taxpayer Registration Form" },
          ],
        },
        {
          id: "jai-engineering",
          title: "Manufacturing E-Kanban & Engineering (JAI)",
          subtitle: "E-Kanban Production, Shift Loading & Rework System (Odoo 18)",
          category: "Manufacturing ERP",
          description:
            "Odoo 18 manufacturing module suite digitizing automotive wire-harness production—covering shift-based loading schedules, QR-coded E-Kanban card generation, line verification, and quality/rework tracking.",
          contributions: [
            "Added defensive fallbacks for workbook_variant and automatic master-data assignment in the E-Kanban module.",
            "Optimized kanban loading (load_masters) by scoping sample circuits, setting default quantities, and auto-unlinking zero-qty lines upon verification.",
            "Fixed XML view arch tag formatting to prevent view parsing TypeErrors in Odoo 18.",
          ],
          techCount: 5,
          featuresCount: 4,
          liveLink: "",
          githubLink: "",
          technologies: ["Python", "Odoo 18", "XML Views", "PostgreSQL", "Manufacturing"],
          keyFeatures: [
            "Shift & cut-off based production loading management",
            "Automated QR-coded E-Kanban card generation & numbering",
            "Master circuit verification & zero-line auto-cleanup",
            "Rework order tracking, defect pareto & capacity analytics",
          ],
          image: "/projects/jai-kanban-real.jpg",
          gallery: [
            { src: "/projects/jai-kanban-real.jpg", caption: "Kanban Card List & Production Status" },
            { src: "/projects/jai-denmei-real.jpg", caption: "Denmei Engineering & Part/Material Summary" },
          ],
        },
      ],
    },
    contact: {
      heading: "Contact Me",
      subheading: "Have an Odoo project, Python automation task, or inquiry? Send a message directly below.",
      formTitle: "Send a Direct Message",
      formSubtitle:
        "Tell me about your project or freelance inquiry — your message goes straight to my inbox.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Tell me about your project or requirements...",
      sendingBtn: "Sending...",
      sendBtn: "Send Message",
      successMsg: "Message sent successfully! Thank you for reaching out.",
      errorMsg: "Failed to send message. Please try again or reach out directly via WhatsApp.",
      whatsappBtn: "Chat Directly on WhatsApp",
      whatsappPrefill:
        "Hi Rafatha, I saw your portfolio and would like to discuss an Odoo / Python freelance project.",
      connectTitle: "Connect With Me",
      whatsappCardSub: "Fast response for projects",
      commentsTitle: "Visitor Comments",
      commentsSubtitle: "Leave your feedback, thoughts, or testimonial here.",
      commentNamePlaceholder: "Your Name",
      commentTextPlaceholder: "Write your comment...",
      postingBtn: "Posting...",
      postBtn: "Post Comment",
      redisNotice:
        "Cloud database (Upstash Redis) is not connected on Vercel yet, so comments are not persisted across devices.",
      commentError: "Failed to post comment. Please try again.",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

export function getLocalizedContent(lang: Language): LocalizedContent {
  return CONTENT[lang];
}
