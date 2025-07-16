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

  useEffect(() => {
    setShuffledTeam(shuffleArray(teamMembers));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {shuffledTeam.map(({ Prenom, Portrait, jeux }) => (
          <CollabCard
            key={Prenom}
            name={Prenom}
            portraitText={Portrait}
            jeux={jeux ?? 0} // fallback à 0 si absent
            photo1={`/images/equipe/galerie/${Prenom}_1.webp`}
            photo2={`/images/equipe/galerie/${Prenom}_2.webp`}
          />
        ))}
      </div>
    </div>
  );
}
