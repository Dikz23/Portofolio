// Navbar.jsx
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#hero");
  const [isVisible, setIsVisible] = useState(true);

  const navLinks = [
    { name: "Beranda", href: "#hero" },
    { name: "Tentang", href: "#tentang-saya" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Keahlian", href: "#keahlian" },
    { name: "Proyek", href: "#projects" },
    { name: "Sertifikat", href: "#sertifikat" },
    { name: "Kontak", href: "#contact" },
  ];

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
        setIsVisible(false);
        setIsOpen(false);
      } else {
        setIsVisible(true);
      }
      prevScrollPos = currentScrollPos;

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
  }, []);

  const handleNavClick = (href) => {
    setActiveNav(href);
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl transition-all duration-500 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-28 opacity-0 pointer-events-none"
      }`}
    >
      <nav className="bg-black/90 backdrop-blur-md border border-neutral-800 shadow-2xl rounded-full px-5 py-2.5 flex items-center justify-between text-neutral-200">
        
        <a 
          href="#hero" 
          onClick={() => handleNavClick("#hero")}
          className="text-base md:text-lg font-semibold tracking-wider text-white hover:text-neutral-400 transition-colors pl-2"
        >
          AndikaSeptaNugraha<span className="text-neutral-400">.</span>
        </a>

        <div className="hidden md:flex items-center space-x-1 pr-1">
          {navLinks.map((link, index) => {
            const isActive = activeNav === link.href;
            return (
              <a
                key={index}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-xs lg:text-sm font-medium px-4 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-black bg-white font-semibold"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-neutral-300 hover:text-white focus:outline-none pr-1"
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

      {isOpen && (
        <div className="md:hidden mt-2 bg-black border border-neutral-800 rounded-2xl p-3 shadow-2xl flex flex-col space-y-1">
          {navLinks.map((link, index) => {
            const isActive = activeNav === link.href;
            return (
              <a
                key={index}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`text-sm font-medium px-4 py-2.5 rounded-xl transition-all ${
                  isActive
                    ? "text-black bg-white font-semibold"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-900"
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