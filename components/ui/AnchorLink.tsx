// components/ui/AnchorLink.tsx
"use client";

import { MouseEvent } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface AnchorLinkProps {
  to: string;
  offset?: number;            // décalage en px (hauteur de la navbar)
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function AnchorLink({
  to,
  offset = 72,
  className,
  children,
  onClick,
}: AnchorLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    // 1) Si on n'est pas sur la home, on y va avec ?scrollTo=
    if (pathname !== "/") {
      router.push(`/?scrollTo=${to}`, { scroll: false });
    } else {
      // 2) Si on est déjà sur Home, on scroll smooth vers l'élément
      const el = document.getElementById(to);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
        // on peut remplacer l'URL pour ajouter le hash
        window.history.replaceState({}, "", `#${to}`);
      }
    }
    onClick?.();
  };

  // href pour avoir le curseur "pointer" et le comportement Next.js  
  const href = pathname === "/" ? `#${to}` : `/?scrollTo=${to}`;

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
