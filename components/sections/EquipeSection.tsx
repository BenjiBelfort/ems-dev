"use client";
import { useRef } from "react";
import CollabCard from "@/components/ui/CollabCard";
import collabs from "@/data/collab.json";

export default function EquipeCarouselSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll vers la gauche
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll vers la droite
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white text-center max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">L&apos;équipe EMS Audit</h2>
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hidden md:block"
          aria-label="Précédent"
        >
          ◀
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 px-12 py-4 scrollbar-hide scroll-smooth"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {collabs.map((collab, idx) => (
            <div
              key={collab.Id || collab.Prenom || idx}
              className="flex-shrink-0 w-[220px] md:w-[260px] scroll-snap-align-start"
            >
              <CollabCard
                prenom={collab.Prenom}
                signature={collab.Signature}
                alias={collab.Alias}
                dessert={collab.Dessert}
                hero={collab.Hero}
                vilain={collab.Vilain}
                karaoke={collab.Karaoke}
                films={collab.Films}
                serie={collab.Serie}
                boisson={collab.Boisson}
                friandise={collab.Friandise}
                peche={collab.Peche}
                animal={collab.Animal}
                valeur={collab.Valeur}
                jeux={collab.jeux ?? 0}
                photo1={`/images/equipe/galerie/${collab.Id}_1.webp`}
                photo2={`/images/equipe/galerie/${collab.Id}_2.webp`}
                photo3={`/images/equipe/galerie/${collab.Id}_3.webp`}
                isFlipped={false}
                onClick={() => {}} // ou une logique de flip si tu veux
              />
            </div>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full shadow p-2 hidden md:block"
          aria-label="Suivant"
        >
          ▶
        </button>
      </div>

      <div className="flex justify-center mt-8">
        <a
          href="/equipe"
          className="inline-block px-6 py-2 bg-lime-400 text-white font-semibold rounded shadow hover:bg-lime-500 transition-colors duration-200"
        >
          Voir toute l’équipe
        </a>
      </div>

    </section>

  );
}
