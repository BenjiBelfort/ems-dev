"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  label: string;
  activeSection?: string | null; // ID de la section active, si applicable
  targetSectionId?: string; // ID HTML si c'est une ancre
  onClick?: (e: React.MouseEvent) => void;
};

export default function NavLink({
  href,
  label,
  activeSection,
  targetSectionId,
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();

  const isActive =
    (pathname === "/" && activeSection === targetSectionId) ||
    (!targetSectionId && pathname === href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`nav-link ${isActive ? "active" : ""}`}
    >
      {label}
    </Link>
  );
}
