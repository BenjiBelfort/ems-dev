"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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
    <header className={`fixed top-0 w-full z-50 transition-colors duration-500 ${navBgClass}`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center text-white">
        <Link
          href="/"
          onClick={handleScrollToTop}
          className="flex flex-row items-center leading-tight text-white no-underline group"
        >
            {/* Logo desktop uniquement */}
        <Image
          src="/images/logo.webp" // adapte le chemin à ton logo
          alt="Logo EMS Audit"
          width={52} // adapte la taille à ton design
          height={52}
          className="mr-6 hidden lg:block"
          priority
        />
          <span>
            <h1 className="text-center text-4xl font-medium scale-x-115">EMS <span className="text-lime-400">A</span>udit</h1>
            <h2 className="tracking-[.13em]">expertise & conseil</h2>
          </span>
        </Link>

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
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Menu mobile */}
        <div className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-black text-white z-50 p-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <ul className="flex flex-col space-y-6 text-lg font-medium">
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
      </nav>
    </header>
  );
}
