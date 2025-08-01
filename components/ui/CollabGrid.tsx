"use client";

import { useState, useEffect } from "react";
import CollabCard from "./CollabCard";
import teamMembers from "@/data/collab.json";

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function CollabGrid() {
  const [shuffledTeam, setShuffledTeam] = useState(teamMembers);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  useEffect(() => {
    setShuffledTeam(shuffleArray(teamMembers));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {shuffledTeam.map((collab, index) => (
          <CollabCard
            key={collab.Id}
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
            isFlipped={flippedIndex === index}
            onClick={() =>
              setFlippedIndex((prev) => (prev === index ? null : index))
            }
          />
        ))}
      </div>
    </div>
  );
}
