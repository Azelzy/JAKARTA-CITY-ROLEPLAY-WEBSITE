/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";
import {
  Shield,
  Globe,
  TrendingUp,
  Gavel,
  Users,
  Server,
  ChevronRight,
  Play,
  Monitor,
  Activity,
  Newspaper,
  Landmark,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Menu,
  X,
  AlertTriangle,
  BookOpen,
  AlertCircle,
  ThumbsUp,
  Star,
  Heart,
  Coffee,
  Lock,
  Youtube,
  Calendar,
  Siren,
  Flame,
  Truck,
  Crown,
  Search,
  HelpCircle,
  ChevronDown,
  Camera,
} from "lucide-react";

// --- KOMPONEN IKON CUSTOM ---

const DiscordIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12h.01" />
    <path d="M15 12h.01" />
    <path d="M7.5 22h9c3.5 0 5-2.5 5-6.5v-2.1c0-3.5-2.2-6.2-5.5-6.2-1.5 0-2.8.5-3.8 1.4l-.7.7-.7-.7C9.8 7.7 8.5 7.2 7 7.2 3.7 7.2 1.5 9.9 1.5 13.4v2.1c0 4 1.5 6.5 5 6.5z" />
    <path d="M13.5 2.5L12 7l-1.5-4.5" />
  </svg>
);

const TiktokIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// --- LINKS CONFIG ---
const LINKS = {
  discord: "https://discord.gg/USP9pP9Etp",
  discordcitra: "https://discord.gg/9ur5VdMTMT",
  discordQNA: "https://discord.gg/tNfET9gDkF",
  donation: "https://saweria.co/jakartacity",
  vote: "https://melonly.xyz/servers/jakarta-city-roleplay",
  rating: "https://servers.melonly.xyz/jakarta-city-roleplay",
  play: "https://www.roblox.com/games/start?launchData=%7B%22psCode%22%3A%22jkcrp%22%7D&placeId=2534724415",
  youtube: "https://www.youtube.com/@JakartaCityRoleplay",
  tiktok: "https://www.tiktok.com/@jkc.roleplay.erlc",
  news: "https://newsjakartacityroleplay.netlify.app/",
  market: "https://jakartacitycompositeindex.netlify.app/",
  pajak: "https://pajakjakartacityroleplay.netlify.app/",
  bak: "https://bakjakartacityroleplay.netlify.app/",
  kejaksaan: "#",
  kepolisian: "https://discord.gg/WFze64KXQd",
  pemadamkebakaran: "https://discord.gg/WFze64KXQd",
  DOT: "https://discord.gg/WFze64KXQd",
  staff: "https://discord.gg/hHR2h7Q2qf",
};

// --- DATA DEPARTEMEN ---
const departments = [
  {
    id: "jcpd",
    abbr: "JC:PD",
    name: "Jakarta City Police Department",
    icon: Siren,
    desc: "Menegakkan hukum, melindungi warga, dan menjaga ketertiban kota dari tindak kriminal.",
    color: "blue",
    link: LINKS.kepolisian,
    image: "/webp/bannerpolisi.webp",
    logo: "/webp/LOGO_KEPOLISIAN.webp",
  },
  {
    id: "jcfd",
    abbr: "JC:FD",
    name: "Jakarta City Fire Department",
    icon: Flame,
    desc: "Unit reaksi cepat penanggulangan kebakaran dan layanan medis darurat (EMS).",
    color: "red",
    link: LINKS.pemadamkebakaran,
    image: "/webp/bannerpemadam.webp",
    logo: "webp/LOGO_PEMADAM.webp",
  },
  {
    id: "jcdot",
    abbr: "JC:DOT",
    name: "Jakarta City Dept. of Transportation",
    icon: Truck,
    desc: "Mengatur lalu lintas, layanan derek, dan pemeliharaan infrastruktur jalan.",
    color: "amber",
    link: LINKS.DOT,
    image: "/webp/bannerDOT.webp",
    logo: "/webp/LOGO_DOT.webp",
  },
  {
    id: "jckj",
    abbr: "JC:KJ",
    name: "Jakarta City Kejaksaan",
    icon: Gavel,
    desc: "Lembaga penuntut umum yang memastikan keadilan hukum ditegakkan di pengadilan.",
    color: "emerald",
    link: LINKS.kejaksaan,
    comingSoon: true,
    logo: "/webp/LOGO_KEJAGUNG.webp",
  },
  {
    id: "jcbak",
    abbr: "JC:BAK",
    name: "Jakarta City Biro Anti Korupsi",
    icon: Search,
    desc: "Lembaga independen pemberantas tindak pidana korupsi di lingkungan pemerintahan.",
    color: "rose",
    link: LINKS.bak,
    comingSoon: true,
    logo: "/webp/LOGO_BAK.webp",
  },
  {
    id: "jcst",
    abbr: "JC:ST",
    name: "Jakarta City Staff Team",
    icon: Crown,
    desc: "Tim administrasi dan manajemen yang memastikan server berjalan kondusif.",
    color: "purple",
    link: LINKS.staff,
    image: "/webp/bannerstaff1.webp",
    logo: "/webp/LOGO_STAFF.webp",
  },
];

// --- HELPER COMPONENT: REVEAL ON SCROLL ---
const RevealOnScroll = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) {
        try {
          observer.unobserve(ref.current);
        } catch (e) {}
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-all duration-1000 ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}`}
    >
      {children}
    </div>
  );
};

// --- KOMPONEN UI ---

const Button = ({
  children,
  variant = "primary",
  className = "",
  icon: Icon,
  onClick,
  ...props
}) => {
  const baseStyle =
    "px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 cursor-pointer z-20 relative overflow-hidden group";
  const variants = {
    primary:
      "bg-red-600 text-white shadow-lg shadow-red-600/30 border border-red-500 hover:shadow-red-500/50",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",
    outline:
      "bg-transparent border-2 border-white/20 hover:border-white text-white hover:bg-white/10",
    accent:
      "bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-600/30",
    white: "bg-white text-black hover:bg-slate-200 border-white",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children} {Icon && <Icon size={18} />}
      </span>
      {/* Button Shine Effect */}
      <div className="absolute inset-0 h-full w-full scale-0 rounded-lg transition-all duration-300 group-hover:scale-100 group-hover:bg-white/10"></div>
    </button>
  );
};

const FeatureCard = ({ title, desc, icon: Icon, color, link, comingSoon }) => {
  const colorClass =
    {
      red: "text-red-400 bg-red-500/10",
      emerald: "text-emerald-400 bg-emerald-500/10",
      amber: "text-amber-400 bg-amber-500/10",
      blue: "text-blue-400 bg-blue-500/10",
      indigo: "text-indigo-400 bg-indigo-500/10",
      purple: "text-purple-400 bg-purple-500/10",
    }[color] || "text-white bg-slate-500/10";

  return (
    <div className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-800 hover:border-red-500/50 p-6 rounded-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-xl hover:shadow-red-900/20">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorClass} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
      >
        <Icon size={24} />
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-sm mb-4 leading-relaxed">{desc}</p>

      {comingSoon ? (
        <div className="inline-flex items-center text-sm font-semibold text-slate-500 cursor-not-allowed select-none bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
          Segera Hadir <Lock size={12} className="ml-2" />
        </div>
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center text-sm font-semibold hover:underline transition-colors ${colorClass.split(" ")[0]} group-hover:translate-x-2 transform duration-300`}
        >
          Akses Sistem <ArrowRight size={14} className="ml-1" />
        </a>
      )}
    </div>
  );
};
// --- KOMPONEN DEPARTMEN ---
const DepartmentCard = ({ dept }) => {
  const colorStyles = {
    blue: "border-blue-500/30 bg-blue-500/5 text-blue-400 group-hover:bg-blue-500/10",
    red: "border-red-500/30 bg-red-500/5 text-red-400 group-hover:bg-red-500/10",
    amber:
      "border-amber-500/30 bg-amber-500/5 text-amber-400 group-hover:bg-amber-500/10",
    emerald:
      "border-emerald-500/30 bg-emerald-500/5 text-emerald-400 group-hover:bg-emerald-500/10",
    purple:
      "border-purple-500/30 bg-purple-500/5 text-purple-400 group-hover:bg-purple-500/10",
    rose: "border-rose-500/30 bg-rose-500/5 text-rose-400 group-hover:bg-rose-500/10",
  }[dept.color];

  const buttonColorStyles = {
    blue: "bg-blue-600 hover:bg-blue-700 text-white border-blue-500",
    red: "bg-red-600 hover:bg-red-700 text-white border-red-500",
    amber: "bg-amber-600 hover:bg-amber-700 text-white border-amber-500",
    emerald:
      "bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-500",
    purple: "bg-purple-600 hover:bg-purple-700 text-white border-purple-500",
    rose: "bg-rose-600 hover:bg-rose-700 text-white border-rose-500",
  }[dept.color];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border ${colorStyles} bg-slate-900/30 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col`}
    >
      {/* Banner */}
      {dept.image ? (
        <div className="relative w-full h-40 overflow-hidden bg-black/40 border-b border-white/5">
          <img
            src={dept.image}
            alt={dept.abbr}
            className="w-full h-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
        </div>
      ) : (
        <div className="relative w-full h-40 bg-gradient-to-br from-slate-800 to-black border-b border-white/5 flex items-center justify-center">
          <div className="text-center">
            <dept.icon size={48} className="mx-auto opacity-30 mb-2" />
            <p className="text-xs text-slate-600 font-semibold">COMING SOON</p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Header dengan Logo dan Info */}
        <div className="flex items-start gap-4 mb-4">
          {/* Logo */}

          <div className="w-20 h-20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
            {dept.logo ? (
              <img
                src={dept.logo}
                alt={dept.abbr}
                className="w-full h-full object-contain"  // Padding p-2 dihapus agar logo bisa lebih besar
                onError={(e) => {
                  e.target.style.display = "none";
                  if (e.target.nextSibling)
                    e.target.nextSibling.style.display = "flex";
                }}
              />
            ) : (
              <div
                style={{ display: "none" }}
                className="w-full h-full items-center justify-center"
              >
                <dept.icon size={32} className="opacity-40" />
              </div>
            )}
            {!dept.logo && <dept.icon size={32} className="opacity-40" />}
          </div>

          {/* Info */}
          <div className="flex-1">
            <h4 className="text-xl font-black tracking-tighter text-white">
              {dept.abbr}
            </h4>
            <p className="text-[10px] uppercase tracking-widest opacity-70 mt-0.5">
              Official Department
            </p>
            <p className="text-xs text-slate-400 mt-2 leading-tight">
              {dept.name}
            </p>
          </div>
        </div>

        {/* Deskripsi */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {dept.desc}
        </p>

        {/* Button */}
        {dept.comingSoon ? (
          <button
            disabled
            className="w-full inline-flex items-center justify-center text-sm font-semibold text-slate-500 cursor-not-allowed bg-slate-800 px-4 py-2.5 rounded-lg border border-slate-700 transition-all"
          >
            Segera Hadir <Lock size={12} className="ml-2" />
          </button>
        ) : (
          <a
            href={dept.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-semibold text-sm border transition-all duration-300 hover:shadow-lg hover:scale-105 ${buttonColorStyles}`}
          >
            Bergabung bersama Kami
            <ExternalLink
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        )}
      </div>
    </div>
  );
};

const StatItem = ({ label, value, icon: Icon, color }) => (
  <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-red-500/50 transition-all shadow-lg animate-float hover:scale-105 duration-300">
    <div className={`p-3 rounded-lg bg-white/5 text-${color}-400`}>
      <Icon size={24} />
    </div>
    <div>
      <p className="text-2xl font-bold text-white font-mono">{value}</p>
      <p className="text-xs text-slate-400 uppercase tracking-wider">{label}</p>
    </div>
  </div>
);

const RuleItem = ({ number, title, desc }) => (
  <div className="flex gap-4 p-4 rounded-lg hover:bg-slate-800/50 transition-colors border-b border-slate-800 last:border-0 group cursor-default">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-900/50 text-red-400 flex items-center justify-center font-bold text-sm border border-red-500/30 transition-transform group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
      {number}
    </div>
    <div>
      <h4 className="font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
        {title}
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

// --- KOMPONEN FAQ ITEM ---
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-800 last:border-0">
      <button
        className="w-full py-4 px-2 flex items-center justify-between text-left group hover:bg-slate-900/50 rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`font-semibold text-lg transition-colors ${isOpen ? "text-red-400" : "text-slate-200 group-hover:text-white"}`}
        >
          {question}
        </span>
        <ChevronDown
          className={`text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180 text-red-400" : ""}`}
          size={20}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 opacity-100 py-2" : "max-h-0 opacity-0"}`}
      >
        <p className="text-slate-400 leading-relaxed px-2 pb-2 text-sm md:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
};

// --- HALAMAN UTAMA ---

export default function JKCLandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("ingame");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openLink = (url) => window.open(url, "_blank");

  // --- FUNGSI SCROLL ---
  const scrollToSection = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const inGameRules = [
    {
      title: "Fail Roleplay (FRP)",
      desc: "Tidak melakukan NLR atau merusak RP orang lain. Contoh: RDM saat RP berlangsung.",
    },
    {
      title: "New Life Rule (NLR)",
      desc: "Setelah mati/down wajib memulai kehidupan baru dan melupakan kejadian saat down.",
    },
    {
      title: "Random Death Match (RDM)",
      desc: "Membunuh pemain lain tanpa alasan roleplay yang jelas dilarang keras.",
    },
    {
      title: "Vehicle Death Match (VDM)",
      desc: "Menghancurkan atau menabrak pemain menggunakan kendaraan tanpa alasan jelas.",
    },
    {
      title: "Cuff Motion (CM)",
      desc: "Polisi wajib mengetik perintah RP (-cuff-) sebelum melakukan aksi borgol.",
    },
    {
      title: "GTA Driving (GD)",
      desc: "Dilarang mengemudi ugal-ugalan atau tidak realistis, kecuali saat pursuit.",
    },
    {
      title: "Communication (COM)",
      desc: "Dilarang toxic, berkata kasar, atau SARA. Utamakan sopan santun.",
    },
    {
      title: "Realistic Avatar (RA)",
      desc: "Avatar harus realistis. Korblox, headless, void face, dsb dilarang.",
    },
    {
      title: "Staff Respect",
      desc: "Wajib menghormati keputusan staff dan dilarang mengejek staff yang bertugas.",
    },
    {
      title: "No Trolling",
      desc: "Segala bentuk trolling (RDM, VDM, spawn kill, blocking, rusuh) dilarang.",
    },
    {
      title: "Parkir Kepolisian",
      desc: "Polisi dilarang memarkir kendaraan dinas di dekat area Mod Shop.",
    },
    {
      title: "Roblox TOS",
      desc: "Wajib mematuhi TOS Roblox (Contoh: Dilarang bertanya umur/nama asli IRL).",
    },
    {
      title: "Departement Livery",
      desc: "Livery whitelisted hanya boleh dipakai oleh personel dengan izin resmi.",
    },
    {
      title: "Banned Roleplay",
      desc: "Hitman RP, Suicide RP, dan Bomb RP dilarang keras di server ini.",
    },
    {
      title: "Pursuit Guidelines",
      desc: "Polisi hanya boleh pursuit setelah traffic stop gagal, kecuali target adalah buronan (DPO).",
    },
    {
      title: "Alat Camping",
      desc: "Hanya boleh digunakan di area HighRock untuk roleplay rekreasi.",
    },
    {
      title: "Prestige Vehicle",
      desc: "Kendaraan Prestige hanya boleh digunakan oleh Discord Booster.",
    },
    {
      title: "Safezones",
      desc: "Dilarang kriminal di Safezone (Spawn Civ, Kantor Polisi, RS/FD, DOT).",
    },
    {
      title: "Robbery Rules",
      desc: "Minimal personil: Bank (4 orang), Jewelry Store (2 orang).",
    },
    {
      title: "Jasa Marga (DOT)",
      desc: "Petugas DOT dilarang menderek mobil staff atau melakukan random tow.",
    },
    {
      title: "PVP Mode",
      desc: "Dilarang spam lompat (bunny hop) saat baku tembak berlangsung.",
    },
    {
      title: "Aturan Senjata",
      desc: "Laras panjang hanya untuk Fraksi & Booster. Kriminal non-fraksi dilarang.",
    },
    {
      title: "Police Fear",
      desc: "Warga wajib memiliki rasa takut dan hormat kepada anggota kepolisian (RP Fear).",
    },
    {
      title: "Gun Fear",
      desc: "Wajib takut (menyerah/ikuti perintah) saat ditodong senjata api.",
    },
  ];

  const discordRules = [
    {
      title: "Respect Everyone",
      desc: "Hormati semua member, staff, dan admin tanpa terkecuali.",
    },
    {
      title: "No Bad Words",
      desc: "Tidak ada penggunaan bahasa kotor, kasar, atau menyinggung.",
    },
    {
      title: "No Spamming",
      desc: "Dilarang melakukan spam chat, mention, atau emoji berlebihan.",
    },
    {
      title: "No NSFW",
      desc: "Dilarang mengirim konten pornografi atau NSFW dalam bentuk apapun.",
    },
    {
      title: "Appropriate Profile",
      desc: "Dilarang menggunakan Nama/Foto Profil yang menyinggung atau tidak pantas.",
    },
    {
      title: "No Server Raid",
      desc: "Percobaan merusak komunitas atau mengajak member pindah server (raiding) akan di-ban.",
    },
    {
      title: "Discord TOS",
      desc: "Wajib mematuhi Terms of Service resmi Discord.",
    },
    {
      title: "Correct Channels",
      desc: "Gunakan channel teks dan suara sesuai dengan kegunaannya masing-masing.",
    },
  ];

  const galleryImages = [
    "/webp/Screenshot_2025-09-08_162255.webp", // City
    "/webp/Screenshot_2025-09-07_120538.webp", // Police
    "/webp/Screenshot_2025-09-08_145048.webp", // Medic
    "/webp/Screenshot_2025-09-08_143909.webp", // Night life
  ];

  const faqData = [
    {
      q: "Apakah bisa bermain di HP (Mobile)?",
      a: "Ya! JKC:RP berjalan di platform Roblox yang mendukung PC, Android, dan iOS. Kami memastikan pengalaman bermain tetap lancar di semua perangkat.",
    },
    {
      q: "Apakah perlu Whitelist untuk bergabung?",
      a: "Untuk menjadi warga sipil (Civilian), server bersifat Public dan bisa diakses siapa saja. Namun, untuk bergabung dengan departemen resmi (Polisi, Medic, dll) diperlukan pendaftaran dan seleksi melalui Discord.",
    },
    {
      q: "Bagaimana cara melapor jika ada pelanggaran?",
      a: "Gunakan sistem 'Open Ticket' di Discord kami. Sertakan bukti berupa screenshot atau rekaman video agar laporan dapat diproses oleh staff.",
    },
    {
      q: "Apakah ada Voice Chat?",
      a: "Ya, kami mendukung fitur Spatial Voice Chat Roblox untuk pengalaman roleplay yang lebih imersif. Pastikan akun Roblox Anda sudah diverifikasi untuk menggunakan fitur ini.",
    },
    {
      q: "Kapan jadwal training departemen?",
      a: "Jadwal training diumumkan secara berkala di channel Discord masing-masing departemen. Pastikan Anda sudah join Discord server kami.",
    },
  ];

  return (
    <div
      className="min-h-screen font-sans bg-[#050505] text-slate-200 selection:bg-red-500/30 overflow-x-hidden scroll-smooth"
      style={{ backgroundColor: "#050505", color: "#e2e8f0" }}
    >
      {/* 1. NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-black/80 backdrop-blur-lg py-3 shadow-lg" : "bg-transparent py-6"}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/JKCRP-BT.png"
              alt="JKC Logo"
              className="w-12 h-12 object-contain transition-transform group-hover:scale-110 group-hover:rotate-3"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = "none";
              }}
            />
            <span className="text-xl font-bold text-white tracking-tight drop-shadow-md">
              JKC<span className="text-red-500">:RP</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["History", "Depts", "Gallery", "Rules", "Ecosystem"].map(
              (item) => (
                <button
                  key={item}
                  onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  className="text-sm font-medium text-slate-200 hover:text-red-400 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-red-500 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full bg-transparent border-none cursor-pointer"
                >
                  {item === "Depts"
                    ? "Departemen"
                    : item === "History"
                      ? "Sejarah"
                      : item === "Rules"
                        ? "Peraturan"
                        : item === "Gallery"
                          ? "Galeri"
                          : "Ekosistem"}
                </button>
              ),
            )}
            <Button
              variant="primary"
              className="py-2 px-4 text-sm !shadow-red-500/20"
              icon={ExternalLink}
              onClick={() => openLink(LINKS.discord)}
            >
              Join Discord
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-red-900/30 p-6 flex flex-col gap-4 shadow-2xl animate-slide-down">
            <button
              className="text-left text-slate-300 hover:text-red-400 py-2 bg-transparent border-none"
              onClick={(e) => scrollToSection(e, "history")}
            >
              Sejarah
            </button>
            <button
              className="text-left text-slate-300 hover:text-red-400 py-2 bg-transparent border-none"
              onClick={(e) => scrollToSection(e, "depts")}
            >
              Departemen
            </button>
            <button
              className="text-left text-slate-300 hover:text-red-400 py-2 bg-transparent border-none"
              onClick={(e) => scrollToSection(e, "gallery")}
            >
              Galeri
            </button>
            <button
              className="text-left text-slate-300 hover:text-red-400 py-2 bg-transparent border-none"
              onClick={(e) => scrollToSection(e, "rules")}
            >
              Peraturan
            </button>
            <button
              className="text-left text-slate-300 hover:text-red-400 py-2 bg-transparent border-none"
              onClick={(e) => scrollToSection(e, "ecosystem")}
            >
              Ekosistem
            </button>
            <Button
              variant="primary"
              className="w-full"
              onClick={() => openLink(LINKS.discord)}
            >
              Join Discord
            </Button>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
        {/* === DYNAMIC BACKGROUND LAYERS === */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          {/* Layer 0: Base Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0a0505] to-black z-0" />

          {/* Layer 1: Image + Ken Burns + Filters */}
          <div className="absolute inset-0 opacity-40 mix-blend-overlay z-0">
            <img
              // src="https://images.unsplash.com/photo-1555899434-94d1368b7bdb?q=80&w=2070&auto=format&fit=crop"
              alt="Monas Jakarta Background"
              className="w-full h-full object-cover animate-ken-burns filter contrast-125 brightness-75 grayscale-[30%]"
            />
          </div>

          {/* Layer 2: Moving Tech Grid Overlay (Perspective) */}
          <div
            className="absolute inset-0 opacity-20 z-10 animate-grid-move"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              maskImage:
                "radial-gradient(circle at center, black 30%, transparent 80%)",
              transform: "perspective(500px) rotateX(20deg) scale(1.5)",
            }}
          ></div>

          {/* Layer 3: Noise Texture */}
          <div
            className="absolute inset-0 opacity-[0.03] z-10 pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage:
                'url("https://grainy-gradients.vercel.app/noise.svg")',
            }}
          />

          {/* Layer 4: Cinematic Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80 z-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-20" />

          {/* Layer 5: Ambient Glows (Animated Blobs) */}
          <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[120px] mix-blend-screen animate-blob z-10" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000 z-10" />
          <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[80px] mix-blend-screen animate-blob animation-delay-4000 z-10" />
        </div>

        <div className="container mx-auto px-6 relative z-30">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-900/20 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-sm animate-fade-in-down">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping absolute opacity-75" />
              <span className="w-2 h-2 rounded-full bg-red-500 relative" />
              Official JKC:RP WEBSITE
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] animate-fade-in-up delay-100">
              JAKARTA CITY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-500 to-red-900 drop-shadow-none bg-300% animate-gradient-flow">
                ROLEPLAY
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light drop-shadow-md animate-fade-in-up delay-200">
              Rasakan denyut nadi Ibukota di platform{" "}
              <strong>Roblox ER:LC</strong>. Sistem pemerintahan digital,
              ekonomi realistis, dan hukum yang ditegakkan secara ketat.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
              <Button
                variant="primary"
                className="w-full md:w-auto h-16 px-10 text-lg hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] hover:-translate-y-1 transition-transform"
                icon={Play}
                onClick={() => openLink(LINKS.play)}
              >
                Mainkan Sekarang
              </Button>
              <Button
                variant="outline"
                className="w-full md:w-auto h-16 px-10 text-lg backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-transform"
                icon={BookOpen}
                onClick={(e) => scrollToSection(e, "rules")}
              >
                Baca Peraturan
              </Button>
            </div>
            <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-500">
              <StatItem
                label="Platform"
                value="Roblox"
                icon={Monitor}
                color="blue"
              />
              <StatItem
                label="Apps System"
                value="5 Apps"
                icon={Activity}
                color="red"
              />
              <StatItem
                label="Ekonomi"
                value="Stabil"
                icon={TrendingUp}
                color="emerald"
              />
              <StatItem
                label="Server"
                value="Online"
                icon={Server}
                color="green"
              />
            </div>
          </div>
        </div>
      </header>

      {/* 2.5. ABOUT / PLATFORM SECTION (Background Gradient) */}
      <section
        id="features"
        className="py-24 bg-gradient-to-b from-[#050505] to-black relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[100px] -z-10 animate-blob" />
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative z-10">
            <RevealOnScroll className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Kearifan Lokal <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                  Roblox ER:LC
                </span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                JKC:RP dibangun di atas platform{" "}
                <strong>Emergency Response: Liberty County</strong>. Kami
                menghadirkan tekstur seragam Polisi, Pemadam, Medis, dan
                kendaraan khas Indonesia yang autentik, dipadukan dengan
                roleplay serius.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  variant="accent"
                  icon={ThumbsUp}
                  onClick={() => openLink(LINKS.vote)}
                >
                  Vote Server
                </Button>
                <Button
                  variant="outline"
                  icon={Star}
                  onClick={() => openLink(LINKS.rating)}
                >
                  Beri Rating
                </Button>
                <Button
                  variant="secondary"
                  icon={Heart}
                  className="border-red-500/50 text-red-400 hover:bg-red-900/50 hover:text-white"
                  onClick={() => openLink(LINKS.donation)}
                >
                  Donasi
                </Button>
              </div>
            </RevealOnScroll>
          </div>
          <div className="md:w-1/2 w-full">
            <RevealOnScroll delay={200}>
              <div className="bg-slate-900/30 backdrop-blur-md p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-red-500/30 transition-all duration-500 shadow-2xl hover:shadow-red-900/10">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-6 mb-8 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-black rounded-2xl flex items-center justify-center border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                    <Monitor className="text-red-500 animate-pulse" size={32} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl">
                      Server Status
                    </h4>
                    <p className="text-emerald-400 text-sm flex items-center gap-2 mt-1 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      ONLINE • SEASON 2
                    </p>
                  </div>
                </div>
                <div className="space-y-6 relative z-10">
                  <div className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                    <span className="text-slate-400">Platform</span>
                    <span className="text-white font-semibold font-mono tracking-wide">
                      ROBLOX (PC/MOBILE)
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                    <span className="text-slate-400">Base Game</span>
                    <span className="text-white font-semibold font-mono tracking-wide">
                      Emergency Response: Liberty County
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm pb-2">
                    <span className="text-slate-400">Region</span>
                    <span className="text-white font-semibold font-mono tracking-wide">
                      INDONESIA (WIB)
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: GALLERY / SNEAK PEEK (Pure Black w/ Noise) --- */}
      <section
        id="gallery"
        className="py-24 bg-[#020202] relative border-t border-white/5"
      >
        {/* Noise Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
          style={{
            backgroundImage:
              'url("https://grainy-gradients.vercel.app/noise.svg")',
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Galeri Kota
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Intip sedikit suasana kehidupan dan keseruan roleplay di Jakarta
              City.
            </p>
          </RevealOnScroll>

          <RevealOnScroll className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-white/5"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={src}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                  <div className="bg-black/50 backdrop-blur-md p-3 rounded-full border border-white/20">
                    <Camera className="text-white" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </RevealOnScroll>
        </div>
      </section>

      {/* 2.8 HISTORY SECTION (Spotlight Effect) */}
      <section
        id="history"
        className="py-24 bg-[#080404] relative border-y border-white/5 overflow-hidden"
      >
        {/* Warm Radial Glow - Sedikit ditingkatkan opacity-nya agar gradasinya lebih halus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-950/20 via-[#0a0505] to-black z-0" />

        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll className="max-w-4xl mx-auto text-center mb-12">
            {/* BADGE FIX: Menggunakan flex & gap untuk menyejajarkan icon */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-950 border border-white/10 text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-2xl">
              <span className="flex items-center gap-1.5 text-red-500">
                {/* Perhatikan: Tambahan -translate-y-[0.5px] untuk menyeimbangkan visual */}
                <Calendar
                  size={13}
                  strokeWidth={2.5}
                  className="shrink-0 -translate-y-[0.5px]"
                />
                <span className="leading-none">EST.</span>
              </span>

              <span className="w-[1px] h-3 bg-white/10" />

              <span className="text-slate-200 leading-none">
                22 November 2023
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Sejarah <span className="text-red-600">Jakarta City</span>
            </h2>

            <div className="bg-slate-900/20 backdrop-blur-xl border border-slate-800/60 p-8 md:p-12 rounded-[2rem] relative overflow-hidden group hover:border-red-500/30 transition-all duration-700">
              {/* Animated Top Border */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent group-hover:via-red-400 transition-all duration-500" />

              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                <strong>Jakarta City Roleplay</strong> adalah Server bertema
                Kota Jakarta dari Indonesia. JKC:RP merupakan{" "}
                <span className="text-white font-bold border-b border-red-500/50 pb-0.5">
                  Server Indonesia pertama di ER:LC
                </span>{" "}
                yang memelopori penggunaan sistem{" "}
                <strong>Economy Modern</strong>, mencakup integrasi{" "}
                <strong>Sistem Pajak</strong> dan{" "}
                <strong>Composite Index (Pasar Saham)</strong> yang real-time.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                <div className="bg-black/40 p-5 rounded-2xl border border-white/5 flex flex-col items-center justify-center hover:bg-white/5 transition-all duration-300 group/item">
                  <span className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 group-hover/item:text-slate-300 transition-colors">
                    Tanggal Berdiri
                  </span>
                  <span className="text-white font-mono text-xl font-bold">
                    22 Nov 2023
                  </span>
                </div>
                <div className="bg-black/40 p-5 rounded-2xl border border-white/5 flex flex-col items-center justify-center hover:border-red-500/20 hover:bg-red-500/5 transition-all duration-300 group/item">
                  <span className="text-slate-500 text-[10px] uppercase tracking-[0.2em] mb-2 group-hover/item:text-red-400/70 transition-colors">
                    In-Game Code
                  </span>
                  <span className="text-red-500 font-mono text-2xl font-black tracking-[0.15em] animate-pulse">
                    jkcrp
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 2.9 DEPARTMENTS SECTION */}

      <section
        id="depts"
        className="py-24 bg-[#040608] relative border-b border-white/5"
      >
        <div
          className="absolute inset-0 opacity-10 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(to right, #1e293b 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040608]/50 to-[#040608] z-0"></div>

        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Departemen Pemerintah
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Struktur organisasi resmi yang menjaga stabilitas dan keamanan
              Jakarta City.
            </p>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <RevealOnScroll key={dept.id} delay={index * 100}>
                <DepartmentCard dept={dept} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RULES SECTION (Subtle Diagonal Lines) */}
      <section
        id="rules"
        className="py-24 bg-[#080404] relative border-b border-white/5"
      >
        <div
          className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 10px)",
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Peraturan & Regulasi
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Kami menjunjung tinggi kualitas Roleplay. Patuhi aturan berikut
              untuk menjaga kenyamanan komunitas.
            </p>
            <div className="flex justify-center gap-4 mt-10">
              <button
                onClick={() => setActiveTab("ingame")}
                className={`px-8 py-3 rounded-full font-bold transition-all tracking-wide ${activeTab === "ingame" ? "bg-red-700 text-white shadow-[0_0_20px_rgba(185,28,28,0.4)] scale-105" : "bg-slate-900 text-slate-400 hover:bg-slate-800 border border-slate-800"}`}
              >
                In-Game Rules
              </button>
              <button
                onClick={() => setActiveTab("discord")}
                className={`px-8 py-3 rounded-full font-bold transition-all tracking-wide ${activeTab === "discord" ? "bg-[#5865F2] text-white shadow-[0_0_20px_rgba(88,101,242,0.4)] scale-105" : "bg-slate-900 text-slate-400 hover:bg-slate-800 border border-slate-800"}`}
              >
                Discord Rules
              </button>
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="bg-slate-900/30 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-10 max-w-7xl mx-auto shadow-2xl">
            {activeTab === "ingame" ? (
              <div className="animate-fade-in-up">
                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
                  <Shield className="text-red-500" size={40} />
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      JKC:RP In-Game Regulations
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">
                      Berlaku untuk semua warga kota tanpa terkecuali.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {inGameRules.map((rule, idx) => (
                    <RuleItem
                      key={idx}
                      number={idx + 1}
                      title={rule.title}
                      desc={rule.desc}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="animate-fade-in-up">
                <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
                  <DiscordIcon className="text-[#5865F2]" size={40} />
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      JKC:RP Discord Guidelines
                    </h3>
                    <p className="text-slate-500 text-sm mt-1">
                      Etika berkomunikasi dalam komunitas kami.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {discordRules.map((rule, idx) => (
                    <RuleItem
                      key={idx}
                      number={idx + 1}
                      title={rule.title}
                      desc={rule.desc}
                    />
                  ))}
                </div>
                <div className="mt-10 p-6 bg-red-900/10 border border-red-500/20 rounded-2xl flex gap-5 items-start">
                  <AlertTriangle
                    className="text-red-500 shrink-0 mt-1 animate-pulse"
                    size={28}
                  />
                  <div>
                    <h4 className="font-bold text-red-400 text-lg">
                      Peringatan Keras
                    </h4>
                    <p className="text-slate-400 mt-2 leading-relaxed">
                      Pelanggaran serius terhadap aturan ini dapat mengakibatkan{" "}
                      <span className="text-white font-semibold">
                        Permanent Ban
                      </span>{" "}
                      dari server Discord maupun akses In-Game. Kami tidak
                      mentolerir toksisitas.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </RevealOnScroll>
        </div>
      </section>

      {/* --- NEW SECTION: FAQ (Simple Dark) --- */}
      <section id="faq" className="py-24 bg-[#0a0505] relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <RevealOnScroll>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-slate-400 text-xs font-bold uppercase tracking-widest mb-6">
                  <HelpCircle size={14} className="text-red-500" /> Pusat
                  Bantuan
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Sering Ditanyakan
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  Punya pertanyaan seputar JKC:RP? Cek jawaban dari pertanyaan
                  yang paling sering diajukan oleh komunitas kami.
                </p>
                <Button
                  variant="outline"
                  icon={DiscordIcon}
                  onClick={() => openLink(LINKS.discord)}
                >
                  Tanya di Discord
                </Button>
              </RevealOnScroll>
            </div>
            <div className="md:w-2/3">
              <RevealOnScroll delay={200}>
                <div className="space-y-2">
                  {faqData.map((item, idx) => (
                    <FaqItem key={idx} question={item.q} answer={item.a} />
                  ))}
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EKOSISTEM DIGITAL (Circuit/Network Gradient) */}
      <section
        id="ecosystem"
        className="py-24 bg-gradient-to-b from-[#0a0f0d] to-black"
      >
        {/* Subtle Green/Emerald Tint for Economy */}
        <div className="absolute inset-0 bg-emerald-900/5 z-0 pointer-events-none mix-blend-screen" />
        <div className="container mx-auto px-6 relative z-10">
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ekosistem Digital Terintegrasi
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Satu akun untuk semua layanan. Dari Pemerintahan hingga Ekonomi,
              semua terhubung secara <strong>Real-Time</strong>.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RevealOnScroll delay={100}>
              <FeatureCard
                title="JCN Network"
                desc="Portal berita real-time. Baca berita terkini seputar kriminal, politik, dan event kota."
                icon={Newspaper}
                color="red"
                link={LINKS.news}
              />
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <FeatureCard
                title="Kejaksaan Negeri"
                desc="Sistem manajemen perkara pidana dan database kriminal terpadu."
                icon={Gavel}
                color="emerald"
                link={LINKS.kejaksaan}
                comingSoon={true}
              />
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <FeatureCard
                title="Pasar Saham JCI"
                desc="Investasi saham dinamis. Pantau harga pasar dan jadilah konglomerat."
                icon={TrendingUp}
                color="amber"
                link={LINKS.market}
              />
            </RevealOnScroll>
            <RevealOnScroll delay={400}>
              <FeatureCard
                title="E-Tax Jakarta"
                desc="Bayar pajak kendaraan dan properti Anda dengan mudah melalui sistem E-Tax."
                icon={Landmark}
                color="blue"
                link={LINKS.pajak}
              />
            </RevealOnScroll>
            <RevealOnScroll delay={500}>
              <FeatureCard
                title="KPK Center (BAK)"
                desc="Layanan pengaduan masyarakat dan pelaporan LHKPN pejabat negara."
                icon={Search}
                color="indigo"
                link={LINKS.bak}
              />
            </RevealOnScroll>
            <RevealOnScroll delay={600}>
              <FeatureCard
                title="Citra AI Assistant"
                desc="Bot pintar yang siap menjawab pertanyaan Anda seputar hukum dan kota 24/7."
                icon={Activity}
                color="purple"
                link={LINKS.discordcitra}
              />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: CALL TO ACTION --- */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-black to-blue-900/20 animate-gradient-flow bg-[length:200%_200%] z-0"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] z-0"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Siap Memulai Cerita Anda?
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
              Bergabunglah dengan ribuan warga Jakarta City lainnya. Ciptakan
              karir, tegakkan hukum, atau jadilah penguasa ekonomi kota.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="white"
                icon={Play}
                onClick={() => openLink(LINKS.play)}
              >
                Mainkan Sekarang
              </Button>
              <Button
                variant="primary"
                icon={DiscordIcon}
                onClick={() => openLink(LINKS.discord)}
              >
                Join Community
              </Button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-black border-t border-slate-900 pt-24 pb-12">
        <div className="container mx-auto px-6">
          <RevealOnScroll className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <img
                  src="/JKCRP-BT.png"
                  alt="JKC Logo"
                  className="w-12 h-12 object-contain transition-transform group-hover:scale-110 group-hover:rotate-3"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = "none";
                  }}
                />
                <span className="text-2xl font-bold text-white tracking-tight">
                  JKC<span className="text-red-600">:RP</span>
                </span>
              </div>
              <p className="text-slate-400 mb-8 max-w-md leading-relaxed">
                Komunitas Roleplay Indonesia terbesar di platform Roblox ER:LC.
                Kami menggabungkan teknologi web canggih dengan gameplay
                imersif.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => openLink(LINKS.youtube)}
                  className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-500 hover:-translate-y-1 transition-all duration-300 group"
                  title="YouTube"
                >
                  <Youtube
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </button>
                <button
                  onClick={() => openLink(LINKS.tiktok)}
                  className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white hover:border-slate-500 hover:-translate-y-1 transition-all duration-300 group"
                  title="TikTok"
                >
                  <TiktokIcon
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </button>
                <button
                  onClick={() => openLink(LINKS.discord)}
                  className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#5865F2] hover:text-white hover:border-[#5865F2] hover:-translate-y-1 transition-all duration-300 group"
                  title="Discord"
                >
                  <DiscordIcon
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </button>
                <button
                  onClick={() => openLink(LINKS.donation)}
                  className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white hover:border-red-500 hover:-translate-y-1 transition-all duration-300 group"
                  title="Donasi"
                >
                  <Heart
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 border-l-4 border-red-600 pl-4 text-lg">
                Navigasi
              </h4>
              <ul className="space-y-4 text-slate-400">
                <li>
                  <a
                    href={LINKS.news}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 hover:pl-2 transition-all block"
                  >
                    Portal Berita
                  </a>
                </li>
                <li>
                  <span className="text-slate-600 cursor-not-allowed block">
                    Kejaksaan (Segera)
                  </span>
                </li>
                <li>
                  <a
                    href={LINKS.market}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 hover:pl-2 transition-all block"
                  >
                    Marketplace
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 border-l-4 border-red-600 pl-4 text-lg">
                Komunitas
              </h4>
              <ul className="space-y-4 text-slate-400">
                <li>
                  <a
                    href={LINKS.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 hover:pl-2 transition-all block"
                  >
                    YouTube Channel
                  </a>
                </li>
                <li>
                  <a
                    href={LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 hover:pl-2 transition-all block"
                  >
                    TikTok Official
                  </a>
                </li>
                <li>
                  <a
                    href={LINKS.vote}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 hover:pl-2 transition-all block"
                  >
                    Vote Server (Melonly)
                  </a>
                </li>
                <li>
                  <a
                    href={LINKS.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-red-500 hover:pl-2 transition-all block"
                  >
                    Discord Server
                  </a>
                </li>
              </ul>
            </div>
          </RevealOnScroll>

          <div className="border-t border-slate-900 pt-10 text-center text-slate-600 text-sm">
            <p className="mb-2">
              © 2025 Jakarta City Roleplay. Dibuat dengan semangat merah putih.
            </p>
            <p className="text-xs opacity-50">
              Not affiliated with Roblox Corporation.
            </p>
          </div>
        </div>
      </footer>

      {/* GLOBAL CSS ANIMATIONS */}
      <style>{`
        /* Custom Scrollbar dengan tema JKC:RP */
        ::-webkit-scrollbar {
          width: 12px;
          height: 12px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0505;
          border-left: 1px solid rgba(255, 255, 255, 0.05);
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #dc2626 0%, #991b1b 100%);
          border-radius: 6px;
          border: 2px solid #0a0505;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #ef4444 0%, #b91c1c 100%);
        }
        ::-webkit-scrollbar-corner {
          background: #0a0505;
        }

        /* Firefox Scrollbar */
        * {
          scrollbar-width: thin;
          scrollbar-color: #dc2626 #0a0505;
        }

        /* Hapus horizontal scrollbar */
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translate3d(0, 40px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translate3d(0, -40px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; }
        .animate-fade-in-down { animation: fadeInDown 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; }
        .animate-ken-burns { animation: kenBurns 20s ease-out infinite alternate; }
        .animate-pulse-slow { animation: pulseSlow 8s ease-in-out infinite; }
        .animate-grid-move { animation: gridMove 8s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-gradient-flow { background-size: 200% 200%; animation: gradientFlow 10s ease infinite; }
        .animate-blob { animation: blob 10s infinite; }
        
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
      `}</style>
    </div>
  );
}
