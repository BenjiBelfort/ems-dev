"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaStar, FaRegStar, FaArrowRight } from "react-icons/fa";

type CollabCardProps = {
  prenom: string;
  photo1: string;
  photo2: string;
  photo3: string;
  signature: string;
  alias: string;
  dessert: string;
  hero: string;
  vilain: string;
  karaoke: string;
  films: string;
  serie: string;
  boisson: string;
  friandise: string;
  peche: string;
  animal: string;
  valeur: string;
  jeux: number;
  isFlipped: boolean;
  onClick: () => void;
};

export default function CollabCard({
  prenom,
  photo1,
  photo2,
  photo3,
  signature,
  alias,
  dessert,
  hero,
  vilain,
  karaoke,
  films,
  serie,
  boisson,
  friandise,
  peche,
  animal,
  valeur,
  jeux,
  isFlipped,
  onClick,
}: CollabCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const maxStars = 5;

  // Détection simple du mobile au chargement + resize
  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth < 768);
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Pour appliquer l'ombre (hover ou flip)
  const applyShadow = isHovered || isFlipped;

  return (
    <div
      className="w-full aspect-[3/4] cursor-pointer perspective"
      onClick={onClick}
      // On ne gère les événements hover que sur desktop
      {...(!isMobile && {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      })}
    >
      <div
        className={`relative w-full h-full duration-500 transition-transform transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <div
          className={`absolute w-full h-full backface-hidden rounded-lg overflow-hidden
            transition-shadow duration-300 ease-in-out
            ${applyShadow ? "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)]" : "shadow-lg"}`}
        >
          <Image
            src={isMobile ? photo1 : isHovered ? photo2 : photo1}
            alt={prenom}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Texte "En savoir plus" */}
          <div
            className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-lime-400/80 to-transparent p-2 transition-transform duration-300 ${
              isMobile || isHovered ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <p className="text-white text-center text-lg font-medium drop-shadow-md flex items-center justify-center gap-2 group cursor-pointer">
              En savoir plus
              <FaArrowRight
                className="transition-transform duration-300 group-hover:translate-x-2"
                size={16}
                aria-hidden="true"
              />
            </p>
          </div>
        </div>

        {/* BACK */}
        <div
          className={`absolute w-full h-full backface-hidden rotate-y-180 bg-slate-900 rounded-lg p-4 sm:p-6 text-white flex flex-col justify-center items-center
            transition-shadow duration-300 ease-in-out
            ${applyShadow ? "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)]" : "shadow-lg"}`}
        >
          {/* Image de fond en transparence */}
          <Image
            src={photo3}
            alt={`${prenom} illustration`}
            fill
            className="object-cover rounded-lg opacity-16 pointer-events-none z-0"
            style={{ zIndex: 0 }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Overlay texte structuré en 3 blocs */}
          <div className="relative z-10 flex flex-col justify-between items-center w-full h-full">
            {/* Bloc 1 : Prénom + signature */}
            <div className="flex flex-col items-center w-full min-h-16">
              <h3 className="text-xl sm:text-2xl font-bold mb-1">{prenom}</h3>
              {signature && <p className="italic text-center text-sm sm:text-base leading-tight">{signature}</p>}
            </div>
            {/* Bloc 2 : Infos */}
            <div className="flex-1 w-full flex flex-col items-center justify-start mt-1">
              <ul className="text-sm sm:text-base w-full max-w-xs mx-auto leading-relaxed">
                {alias && <li><b>Alias :</b> {alias}</li>}
                {dessert && <li><b>Dessert préféré :</b> {dessert}</li>}
                {hero && <li><b>Super-héros :</b> {hero}</li>}
                {vilain && <li><b>Super-vilain :</b> {vilain}</li>}
                {karaoke && <li><b>Chanson de karaoké :</b> {karaoke}</li>}
                {films && <li><b>Film préféré :</b> {films}</li>}
                {serie && <li><b>Série culte :</b> {serie}</li>}
                {boisson && <li><b>Boisson préférée :</b> {boisson}</li>}
                {friandise && <li><b>Friandise préférée :</b> {friandise}</li>}
                {peche && <li><b>Péché mignon :</b> {peche}</li>}
                {animal && <li><b>Animal mythique :</b> {animal}</li>}
                {valeur && <li><b>Valeur :</b> {valeur}</li>}
              </ul>
            </div>
            {/* Bloc 3 : Niveau de jeu */}
            <div className="flex flex-col items-center w-full min-h-16 justify-end">
              <p className="font-semibold">Niveau de jeu</p>
              <div className="flex space-x-1">
                {[...Array(maxStars)].map((_, i) =>
                  i < jeux ? (
                    <FaStar key={i} className="text-yellow-300" />
                  ) : (
                    <FaRegStar key={i} className="text-yellow-300" />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}