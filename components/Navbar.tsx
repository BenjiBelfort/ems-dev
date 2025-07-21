"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Effet de scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // appel initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Verrouille le scroll du body si menu mobile ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Scroll doux vers le haut
  const handleScrollToTop = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Scroll doux vers section "missions"
  const handleScrollToMissions = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById("missions");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const navBgClass = isHome && !scrolled ? "bg-transparent" : "bg-black/90 shadow-md";

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        isOpen ? 'bg-transparent shadow-none' : navBgClass
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center text-white">
        <div className="relative flex flex-row items-center z-50">
          <Link
            href="/"
            onClick={handleScrollToTop}
            className="flex flex-row items-center leading-tight text-white no-underline group"
          >
              {/* Logo desktop uniquement */}
              <span
                className="relative w-14 h-12 mr-6 hidden lg:block top-0.5"
                aria-label="Logo EMS Audit"
              >
                {/* Cercle bas gauche */}
                <span className="absolute left-0 bottom-0 w-4 h-4 bg-white rounded-full" />
                {/* Cercle bas droite (lime) */}
                <span className="absolute right-0 bottom-0 w-4 h-4 bg-lime-400 rounded-full" />
                {/* Cercle haut centre */}
                <span className="absolute left-1/2 top-0 w-4 h-4 bg-white rounded-full"
                      style={{ transform: "translateX(-50%)" }} />
              </span>
            <span>
              <h1 className="text-center text-4xl font-medium scale-x-115">EMS <span className="text-lime-400">A</span>udit</h1>
              <h2 className="text-center tracking-[.13em]">expertise & conseil</h2>
            </span>
          </Link>
        </div>

        {/* Menu desktop */}
        <ul className="hidden lg:flex space-x-8 font-medium">
          <li>
            <Link href="/" onClick={handleScrollToTop}>Accueil</Link>
          </li>
          <li>
            <Link href="/?scrollTo=missions" onClick={handleScrollToMissions}>Missions</Link>
          </li>
          <li>
            <Link href="/equipe" onClick={() => setIsOpen(false)}>Équipe</Link>
          </li>
          <li>
            <Link href="/missions/bilan-carbone" onClick={() => setIsOpen(false)}>Bilan Carbone ®</Link>
          </li>
        </ul>

        {/* Bouton burger */}
        <button
          className="lg:hidden flex flex-col justify-between w-8 h-6 relative z-50 focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">{isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
          <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0 translate-x-3' : ''}`} />
          <span className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-3' : ''}`} />
        </button>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-30 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu mobile */}
        <div className={`fixed left-0 top-0 w-full h-full bg-transparent text-white z-40 transition-transform duration-300
          ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="flex flex-col justify-center items-center h-full w-full">
            <ul className="flex flex-col space-y-8 text-2xl font-medium items-center">
              <li>
                <Link href="/" onClick={handleScrollToTop}>Accueil</Link>
              </li>
              <li>
                <Link href="/?scrollTo=missions" onClick={handleScrollToMissions}>Missions</Link>
              </li>
              <li>
                <Link href="/equipe" onClick={() => setIsOpen(false)}>Équipe</Link>
              </li>
              <li>
                <Link href="/missions/bilan-carbone" onClick={() => setIsOpen(false)}>Bilan Carbone ®</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
