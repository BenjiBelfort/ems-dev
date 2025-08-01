// components/TeamCarousel.tsx
"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import CollabCard from "../ui/CollabCard";
import teamMembers from "@/data/collab.json";

export default function TeamCarousel() {
  const slider = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleScroll = (dir: "left" | "right") => {
    if (!slider.current) return;
    const width = slider.current.clientWidth;
    slider.current.scrollBy({ left: dir === "left" ? -width : width, behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* En‑tête */}
        <h2 className="text-3xl mb-2 logo-title">Notre équipe</h2>
        <p className="text-gray-400 mb-8">
          Nos collaborateurs sont à votre service ! Découvrez-les ci‑dessous.
        </p>

        {/* Carousel */}
        <div className="relative">
          {/* Flèche gauche */}
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black p-2 rounded-full hover:bg-neutral-700 transition"
          >
            <FaChevronLeft />
          </button>

          {/* Slider scrollable */}
          <div
            ref={slider}
            className="h-full flex space-x-6 overflow-x-auto scroll-smooth no-scrollbar py-4"
          >
            {teamMembers.map((m) => (
              <div key={m.Id} className="min-w-[250px] flex-shrink-0">
                <CollabCard
                  prenom={m.Prenom}
                  photo1={`/images/equipe/galerie/${m.Id}_1.webp`}
                  photo2={`/images/equipe/galerie/${m.Id}_2.webp`}
                  photo3={`/images/equipe/galerie/${m.Id}_3.webp`}
                  signature={m.Signature}
                  alias={m.Alias}
                  dessert={m.Dessert}
                  hero={m.Hero}
                  vilain={m.Vilain}
                  karaoke={m.Karaoke}
                  films={m.Films}
                  serie={m.Serie}
                  boisson={m.Boisson}
                  friandise={m.Friandise}
                  peche={m.Peche}
                  animal={m.Animal}
                  valeur={m.Valeur}
                  jeux={m.jeux ?? 0}
                  isFlipped={false}             // on force le front
                  onClick={() => router.push("/equipe")}
                />
              </div>
            ))}
          </div>

          {/* Flèche droite */}
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-neutral-800 p-2 rounded-full hover:bg-neutral-700 transition"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Bouton “Voir l’équipe” */}
        <div className="mt-8 text-right">
          <Link
            href="/equipe"
            className="inline-flex items-center bg-lime-400 text-black px-5 py-2 rounded-full font-medium hover:bg-lime-500 transition"
          >
            Voir toute l’équipe
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
