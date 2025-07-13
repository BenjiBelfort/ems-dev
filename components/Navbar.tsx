"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const handleScrollToTop = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleScrollToMissions = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById("missions");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="w-full bg-black shadow-lg p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center text-white">
        <div className="text-2xl font-title">EMS Audit</div>
        <ul className="flex space-x-4 font-subtitle">
          <li>
            <Link href="/" onClick={handleScrollToTop}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/?scrollTo=missions" onClick={handleScrollToMissions}>
              Missions
            </Link>
          </li>
          <li><Link href="/equipe">Équipe</Link></li>
          <li><Link href="/missions/bilan-carbone">Bilan Carbone ®</Link></li>
        </ul>
      </nav>
    </header>
  );
}
