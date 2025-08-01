// components/Footer.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegCopy,
  FaArrowRight,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const email = "contact@emsaudit.com";
  const [copied, setCopied] = useState(false);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos de nous", href: "about" },
    { label: "Missions", href: "missions" },
    { label: "Expertise comptable", href: "/missions/expertise-comptable" },
    { label: "Bilan Carbone ®", href: "/missions/bilan-carbone" },
    { label: "Entreprise en difficulté", href: "/missions/entreprise-en-difficulte" },
    { label: "Patrimoine", href: "/missions/immobilier" },
    { label: "Équipe", href: "/equipe" },
  ];

  const infoItems = [
    { label: "Conditions d’utilisation", href: "/conditions-dutilisation" },
    { label: "Politique de confidentialité", href: "/politique-confidentialite" },
    { label: "Paramètres des cookies", href: "/parametres-cookies" },
  ];

  const socialLinks = {
    facebook: "https://www.facebook.com/profile.php?id=100057533196776#",
    instagram: "https://www.instagram.com/tonprofil/",
    linkedin: "https://www.linkedin.com/in/tonprofil/",
  }

  const handleScrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      // on navigue vers la home EN PASSANT la query scrollTo
      router.push(`/?scrollTo=${sectionId}`);
    } else {
      // on est déjà sur la home : scroll smooth
      const el = document.getElementById(sectionId);
      if (el) {
        const headerH = document.querySelector("header")?.clientHeight ?? 72;
        const top = el.getBoundingClientRect().top + window.pageYOffset - headerH;
        window.scrollTo({ top, behavior: "smooth" });
        // on nettoie le query pour ne pas re-scroller à chaque render
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  };

  const handleHomeClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState({}, "", "/");
    } else {
      router.push("/");
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="bg-black text-gray-200 sm:pt-12 sm:pb-6">
      <div className="max-w-7xl mx-auto px-6 md:px-10 sm:rounded-xl bg-neutral-800 p-10">
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          {/* — Contact Us — */}
          <div>
            <p className="uppercase tracking-wider text-gray-400">
              Contactez-nous
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-medium text-white leading-snug">
              Discutons de votre <br /> vision. Ensemble
            </h2>

            <Link
              href="/contact"
              className="group inline-flex items-center mt-4 bg-white text-gray-900 px-5 py-2 rounded-full font-medium transition hover:bg-gray-200"
            >
              Planifiez un rendez-vous
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>

            <p className="mt-6 uppercase text-gray-400">Ou écrivez-nous à</p>
              <button
                onClick={handleCopy}
                className="
                  relative
                  inline-flex
                  w-full sm:w-auto
                  mt-2
                  border border-gray-600
                  px-6 py-1
                  rounded-full
                  hover:border-gray-500
                  transition
                "
              >
                {/* 1) Cette span invisible « réserve » la largeur du bouton */}
                <span className="invisible inline-flex items-center">
                  {email}
                  <FaRegCopy />
                </span>

                {/* 2) Contenu absolu centré */}
                {copied ? (
                  <span className="absolute inset-0 flex items-center justify-center text-lime-400">
                    Email copié !
                  </span>
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="mr-2">{email}</span>
                    <FaRegCopy />
                  </span>
                )}
              </button>

            <div className="mt-6 space-y-6 text-sm sm:text-base">
              {/* Téléphone */}
              <div className="flex items-center space-x-4">
                <FaPhone className="text-lime-400 text-2xl flex-shrink-0" />
                <p className="leading-relaxed max-w-[300px]">
                  01 30 17 42 50
                </p>
              </div>

              {/* Adresse */}
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-lime-400 text-2xl flex-shrink-0" />
                <p className="leading-relaxed max-w-[300px]">
                  Immeuble Les Lys<br/>
                  1 Rue Eric de Martimprey<br/>
                  95300 Pontoise
                </p>
              </div>

              {/* Horaires */}
              <div className="flex items-center space-x-4">
                <FaClock className="text-lime-400 text-2xl flex-shrink-0" />
                <p className="leading-relaxed max-w-[400px]">
                  Du lundi au vendredi <br />
                  de 9 h à 12 h 30 et 13 h 30 à 17 h 30.<br/>
                  Samedi & dimanche : on est au sport, on n’est pas là !
                </p>
              </div>
            </div>
          </div>

          {/* — Quick Links & Information — */}
          <div className="lg:col-span-2 flex flex-col gap-8 md:flex-row md:gap-x-48">
            <div>
              <p className="uppercase tracking-wider text-gray-400 mb-2">
                Navigation rapide
              </p>
              <ul className="space-y-2">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                {href === "/" ? (
                  // Accueil
                  <button
                    onClick={handleHomeClick}
                    className="hover:text-white transition cursor-pointer"
                  >
                    {label}
                  </button>
                ) : href === "about" || href === "missions" ? (
                  // Scroll vers section
                  <button
                    onClick={() => handleScrollToSection(href)}
                    className="hover:text-white transition cursor-pointer"
                  >
                    {label}
                  </button>
                ) : (
                  // Lien Next.js classique
                  <Link
                    href={href.startsWith("/") ? href : `/${href}`}
                    className="hover:text-white transition"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
            </div>
            <div>
              <p className="uppercase tracking-wider text-gray-400 mb-2">
                Informations
              </p>
              <ul className="space-y-2">
                {infoItems.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* — Bottom Bar — */}
        <div className="mt-10 border-t border-neutral-700 pt-6 flex flex-col md:flex-row items-center md:items-baseline justify-between text-neutral-400 text-base">
          {/* ← Bloc gauche : ©… + 2 liens */}
          <div className="flex flex-col md:flex-row items-center md:space-x-1">
            <p>© {new Date().getFullYear()} – <span className="footer-logo">EMS <span className="text-lime-400">A</span>udit</span>. Tous droits réservés.</p>
            <Link
              href="https://studiophotocergy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-200 transition"
            >
              Pics by Studio Photo Cergy.
            </Link>
            <Link
              href="https://benji-belfort-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-200 transition"
            >
              Dev by Benji Belfort.
            </Link>
          </div>

          {/* ← Bloc droite : logos */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-200 transition">
              <FaFacebookF />
            </Link>
            <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-200 transition">
              <FaInstagram />
            </Link>
            <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-200 transition">
              <FaLinkedinIn />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
