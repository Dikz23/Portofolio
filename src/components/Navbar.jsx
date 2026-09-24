// Navbar.jsx
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#hero");
  const [isVisible, setIsVisible] = useState(true);

  // DAFTAR NAVIGASI (Menu Galeri ditambahkan di sini)
  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang", href: "#tentang-saya" },
    { name: "Galeri", href: "#gallery" },      // <-- Menu Galeri hasil potret
    { name: "Keahlian", href: "#keahlian" },      
    { name: "Proyek", href: "#projects" },
    { name: "Sertifikat", href: "#sertifikat" },  
    { name: "Kontak", href: "#contact" },
  ];

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // 1. Logika Sembunyikan/Tampilkan Navbar saat Scroll
      if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }
      prevScrollPos = currentScrollPos;

      // 2. Logika Otomatis Mengubah Active Nav Sesuai Posisi Scroll Halaman
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveNav(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const handleNavClick = (href) => {
    setActiveNav(href);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl transition-all duration-500 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-28 opacity-0 pointer-events-none"
      }`}
    >
      {/* Kontainer Utama */}
      <nav className="bg-white/80 backdrop-blur-md border border-stone-200/80 shadow-lg shadow-stone-200/50 rounded-full px-4 md:px-6 py-2 flex items-center justify-between">
        
        {/* Logo / Nama */}
        <a 
          href="#hero" 
          onClick={() => handleNavClick("#hero")}
          className="text-base md:text-lg font-bold tracking-wider text-stone-900 hover:text-amber-900 transition-colors pl-2"
        >
          AndikaSeptaNugraha<span className="text-amber-800">.</span>
        </a>

        {/* Menu Navigasi Desktop */}
        <div className="hidden md:flex items-center space-x-1.5 lg:space-x-2 pr-1">
          {navLinks.map((link, index) => {
            const isActive = activeNav === link.href;
            return (
              <a
                key={index}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-xs lg:text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-amber-900 bg-amber-100/80 font-bold shadow-sm"
                    : "text-stone-600 hover:text-amber-900 hover:bg-stone-100/60"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Tombol Hamburger Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-stone-700 hover:text-black focus:outline-none pr-1"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Dropdown Menu Mobile */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white/95 backdrop-blur-md border border-stone-200 rounded-2xl p-3 shadow-xl flex flex-col space-y-1.5">
          {navLinks.map((link, index) => {
            const isActive = activeNav === link.href;
            return (
              <a
                key={index}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium px-4 py-2 rounded-xl transition-all ${
                  isActive
                    ? "text-amber-900 bg-amber-100 font-bold"
                    : "text-stone-700 hover:text-amber-900 hover:bg-stone-100"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}

export default Navbar;