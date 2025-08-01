// components/ScrollHandler.tsx
"use client";

import { useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function ScrollHandler() {
  const params = useSearchParams();
  const scrollTo = params.get("scrollTo");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/" && scrollTo) {
      // Petit délai pour que les sections soient dans le DOM
      const timeout = setTimeout(() => {
        const headerH = document.querySelector("header")?.clientHeight ?? 72;
        const el = document.getElementById(scrollTo);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - headerH;
          window.scrollTo({ top, behavior: "smooth" });
        }
        // Nettoie l’URL pour ne pas re-scroller à chaque render
        router.replace("/", { scroll: false });
      }, 100);  
      return () => clearTimeout(timeout);
    }
  }, [pathname, scrollTo, router]);

  return null;
}
