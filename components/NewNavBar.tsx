// components/NewNavBar.tsx
"use client";

import React, { useState, useEffect, MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AnimatedLink from "./ui/AnimatedLink";
import EmsLogo from "./EmsLogo";

type NavItem = {
  id: "about" | "missions" | "equipe" | "patrimoine";
  label: string;
  href: string;    // section (ex: "about") ou page ("/equipe")
};

const NAV_ITEMS: NavItem[] = [
  { id: "about",      label: "À propos de Nous", href: "about"    },
  { id: "missions",   label: "Missions",         href: "missions" },
  { id: "equipe",     label: "Équipe",           href: "/equipe"  },
  { id: "patrimoine", label: "Patrimoine",       href: "/missions/patrimoine" },
];

export default function NewNavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  // 1️⃣ Bloque le scroll du body si menu mobile ouvert
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // 2️⃣ Sur la Home => on souligne la section "au centre" au scroll
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      let cur = "";
      ["about", "missions"].forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          cur = id;
        }
      });
      setActive(cur);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // état initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Hors Home => on active le slug de la route si c'est dans NAV_ITEMS
  useEffect(() => {
    if (pathname === "/") return;
    const slug = pathname.slice(1).split("/")[0];
    setActive(NAV_ITEMS.some((ni) => ni.id === slug) ? slug : "");
  }, [pathname]);

  // 3️⃣ Clic sur le logo => reset actif + scroll top si déjà sur Home
  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState({}, "", "/");
    }
    setActive("");
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-black/90 shadow-sm z-40">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo à gauche */}
        <Link href="/" onClick={handleLogoClick} className="z-50">
          <EmsLogo size="M" color="white" hidePointsOnMobile/>
        </Link>

        {/* Liens desktop à droite */}
        <ul className="hidden lg:flex space-x-8 z-50">
          {NAV_ITEMS.map(({ id, label, href }) => {
            const isSection = !href.startsWith("/");
            return (
              <li key={id}>
                <AnimatedLink
                  to={href}
                  offset={isSection ? 72 : undefined}
                  className={active === id ? "after:scale-x-100" : ""}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </AnimatedLink>
              </li>
            );
          })}
        </ul>

        {/* Burger mobile (inchangé) */}
        <button
          className="lg:hidden flex flex-col justify-between h-6 w-8 focus:outline-none z-50"
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span
            className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0 translate-x-3" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
          />
        </button>

        {/* Menu mobile (sous la nav, logo reste visible) */}
        <div
          className={`fixed inset-x-0 top-[72px] bottom-0 bg-black/70 backdrop-blur-sm z-40 transform transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          onClick={() => setIsOpen(false)}
        >
          <ul className="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
            {NAV_ITEMS.map(({ id, label, href }) => {
              const isSection = !href.startsWith("/");
              return (
                <li key={id}>
                  <AnimatedLink
                    to={href}
                    offset={isSection ? 72 : undefined}
                    className={active === id ? "after:scale-x-100" : ""}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </AnimatedLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
