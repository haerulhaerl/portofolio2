import { Project, SkillCategory, ExperienceItem, StatItem } from './types';

export const personalInfo = {
  name: "Haeruddin Hasrat",
  initials: "HH",
  roles: [
    "Fullstack Web Developer",
    "Fullstack Android Developer",
    "Solutions Architect"
  ],
  tagline: "BUILDING HIGH-PERFORMANCE WEB AND MOBILE APPLICATIONS",
  subTagline: "Membangun aplikasi web dan mobile end-to-end yang scalable, modern, dan didesain secara presisi untuk performa optimal.",
  aboutText: "Saya adalah seorang Fullstack Web & Android Developer profesional dengan fokus mendalam pada pembangunan produk digital berkinerja tinggi. Terinspirasi oleh dedikasi atlet kelas dunia, saya menerapkan disiplin tinggi dalam menulis kode yang bersih, arsitektur yang kokoh, dan pengalaman pengguna yang luar biasa. Saya mendedikasikan keahlian saya dalam menjembatani ide bisnis menjadi solusi teknis yang andal baik di ekosistem web maupun mobile development.",
  email: "haerulhaerl@gmail.com",
  github: "https://github.com/haeruddinhasrat",
  linkedin: "https://linkedin.com/in/haeruddinhasrat",
  instagram: "https://instagram.com/haeruddinhasrat",
  location: "Makassar, Indonesia",
  cvUrl: "#" // Link mockup untuk download CV
};

export const stats: StatItem[] = [
  {
    value: "5+",
    label: "Tahun Pengalaman",
    description: "Dedikasi penuh pada kustom web & mobile apps"
  },
  {
    value: "40+",
    label: "Project Selesai",
    description: "Dari startup inovatif hingga solusi enterprise"
  },
  {
    value: "20+",
    label: "Teknologi Dikuasai",
    description: "Fullstack web frameworks & Android SDK"
  },
  {
    value: "99%",
    label: "Kepuasan Klien",
    description: "Menjaga kualitas kode & performa maksimal"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Web Development",
    skills: [
      { name: "React", level: 90, iconName: "Code" },
      { name: "Next.js", level: 85, iconName: "Cpu" },
      { name: "Laravel", level: 92, iconName: "Server" },
      { name: "Node.js", level: 88, iconName: "Database" },
      { name: "Tailwind CSS", level: 95, iconName: "Layers" },
      { name: "TypeScript", level: 85, iconName: "Terminal" }
    ]
  },
  {
    title: "Android Development",
    skills: [
      { name: "Kotlin", level: 90, iconName: "Smartphone" },
      { name: "Jetpack Compose", level: 88, iconName: "Layout" },
      { name: "Android SDK", level: 92, iconName: "ToggleLeft" },
      { name: "Flutter", level: 80, iconName: "Compass" },
      { name: "Java", level: 85, iconName: "BookOpen" }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Express.js", level: 88, iconName: "Cpu" },
      { name: "PostgreSQL", level: 85, iconName: "Database" },
      { name: "MySQL / MariaDB", level: 90, iconName: "HardDrive" },
      { name: "Firebase", level: 87, iconName: "Flame" },
      { name: "RESTful APIs / GraphQL", level: 93, iconName: "Share2" }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: 95, iconName: "GitMerge" },
      { name: "Docker", level: 75, iconName: "Package" },
      { name: "CI / CD Pipelines", level: 78, iconName: "Activity" },
      { name: "Linux / Linux VPS", level: 82, iconName: "Monitor" },
      { name: "Postman API Test", level: 90, iconName: "CheckSquare" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "project-1",
    title: "ApexDrive - Real-time Android Logistics App",
    description: "Aplikasi mobile kurir dan logistik pintar bertenaga tinggi untuk memantau pengiriman barang secara langsung dengan optimasi rute tercepat dan notifikasi instan push.",
    category: "Android",
    techStack: ["Kotlin", "Jetpack Compose", "Google Maps API", "Firebase", "Node.js"],
    githubUrl: "https://github.com/haeruddinhasrat/apexdrive-android",
    demoUrl: "#",
    highlight: true,
    imageGradient: "from-emerald-950 via-zinc-950 to-emerald-900"
  },
  {
    id: "project-2",
    title: "Veloce - Premium E-Commerce Platform",
    description: "Platform e-commerce bertema minimalis-modern yang terinspirasi dari fashion street olahraga, mengedepankan ultra speed loading, manajemen keranjang tersinkronisasi, dan sistem checkout seamless.",
    category: "Web",
    techStack: ["Next.js", "React", "Tailwind CSS", "Laravel API", "PostgreSQL"],
    githubUrl: "https://github.com/haeruddinhasrat/veloce-ecommerce",
    demoUrl: "#",
    highlight: true,
    imageGradient: "from-zinc-900 via-emerald-950 to-zinc-950"
  },
  {
    id: "project-3",
    title: "SyncCore - Enterprise Operations Dashboard",
    description: "Panel admin multi-tenant berskala perusahaan untuk memantau performa jaringan, data penjualan real-time, grafik d3 interaktif, serta manajemen hak akses pengguna.",
    category: "Fullstack",
    techStack: ["React", "Express.js", "PostgreSQL", "Tailwind CSS", "Socket.io"],
    githubUrl: "https://github.com/haeruddinhasrat/synccore-dashboard",
    demoUrl: "#",
    highlight: false,
    imageGradient: "from-zinc-950 via-zinc-900 to-emerald-950"
  },
  {
    id: "project-4",
    title: "FitPulse - Dynamic Android Fitness Engine",
    description: "Aplikasi pelacak kebugaran Android dengan sinkronisasi detak jantung dari wearables, pencatatan kalori harian, serta visualisasi progres grafik mingguan.",
    category: "Android",
    techStack: ["Kotlin", "Android SDK", "SQLite", "Material Design 3", "Retrofit"],
    githubUrl: "https://github.com/haeruddinhasrat/fitpulse-tracker",
    demoUrl: "#",
    highlight: false,
    imageGradient: "from-emerald-950 via-zinc-950 to-zinc-900"
  },
  {
    id: "project-5",
    title: "GymElite - Booking & Member Management Web App",
    description: "Sistem reservasi kelas gym premium dan manajemen langganan terintegrasi dengan gateway pembayaran virtual account otomatis dan laporan bulanan admin.",
    category: "Web",
    techStack: ["React", "Laravel Framework", "MySQL", "Midtrans Payment", "Bootstrap Tailwind"],
    githubUrl: "https://github.com/haeruddinhasrat/gymelite-management",
    demoUrl: "#",
    highlight: false,
    imageGradient: "from-zinc-900 via-zinc-950 to-emerald-950"
  },
  {
    id: "project-6",
    title: "TrackLog - Fleet Android Telemetry App",
    description: "Aplikasi Android tangguh untuk merekam data telemetri kendaraan operasional, mendeteksi getaran sensor akselerometer, dan sinkronisasi geofencing wilayah batas aman.",
    category: "Fullstack",
    techStack: ["Kotlin", "Firebase Realtime DB", "Mapbox SDK", "NestJS", "MongoDB"],
    githubUrl: "https://github.com/haeruddinhasrat/tracklog-telemetry",
    demoUrl: "#",
    highlight: true,
    imageGradient: "from-emerald-900 via-zinc-950 to-emerald-950"
  }
];

export const experienceTimeline: ExperienceItem[] = [
  {
    year: "2024 - SEKARANG",
    role: "Senior Fullstack Web & Android Developer",
    company: "TechCorp Indonesia",
    description: "Memimpin tim engineer dalam mengemban misi pengembangan produk sistem e-commerce serta arsitektur backend andal. Melakukan optimasi kinerja rendering mobile app Kotlin hingga mengurangi latensi pemuatan API sebesar 35%.",
    tags: ["Next.js", "Kotlin", "PostgreSQL", "Docker", "CI/CD"]
  },
  {
    year: "2022 - 2024",
    role: "Lead Mobile & Cloud Engineer",
    company: "KreatifSolusi Fintech",
    description: "Bertanggung jawab atas kualitas pengembangan aplikasi mobile perbankan dan ekosistem admin web internal. Merancang transisi lancar ke arsitektur Jetpack Compose dan integrasi sistem pembayaran gateway lokal Indonesia.",
    tags: ["Jetpack Compose", "React", "Node.js", "Firebase", "REST API"]
  },
  {
    year: "2020 - 2022",
    role: "Fullstack Developer Specialist",
    company: "AlphaDev Studio",
    description: "Mendesain puluhan kustom arsitektur website menggunakan Laravel dan aplikasi Android tangguh untuk berbagai ranah klien usaha kecil-menengah hingga korporat.",
    tags: ["Laravel", "Kotlin", "MySQL", "TypeScript", "Tailwind CSS"]
  },
  {
    year: "2018 - 2020",
    role: "Junior Web Developer & Freelancer",
    company: "Digital Freelance Creative",
    description: "Merintis jalan karir dengan menangani pembuatan website interaktif, integrasi API, perbaikan basis data MySQL, dan kustomisasi CMS WordPress.",
    tags: ["PHP", "JavaScript", "HTML/CSS", "Bootstrap", "MySQL"]
  }
];
