"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaStar, FaRegStar, FaArrowRight } from "react-icons/fa";

type CollabCardProps = {
  name: string;
  photo1: string;
  photo2: string;
  portraitText: string;
  jeux: number; // nombre d'étoiles pleines (0 à 5)
};

export default function CollabCard({
  name,
  photo1,
  photo2,
  portraitText,
  jeux,
}: CollabCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
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

  return (
    <div
      className="w-64 md:w-auto h-120 cursor-pointer perspective"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full duration-500 transition-transform transform-style-preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <div
          className="absolute w-full h-full backface-hidden rounded-lg shadow-lg overflow-hidden"
          onMouseEnter={() => !isMobile && setIsHovered(true)}
          onMouseLeave={() => !isMobile && setIsHovered(false)}
        >
          <Image
            src={isMobile ? photo1 : isHovered ? photo2 : photo1}
            alt={name}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          {/* Texte "En savoir plus" */}
          <div
            className={`absolute bottom-0 left-0 w-full bg-gradient-to-t from-lime-400/80 to-transparent p-2 transition-transform duration-300 ${
              isMobile
                ? "translate-y-0"
                : isHovered
                ? "translate-y-0"
                : "translate-y-full"
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
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-slate-900 rounded-lg p-6 text-white flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <p className="mb-4 text-center italic">{portraitText}</p>
          <p className="mb-2 font-semibold">niveau de jeu</p>
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
  );
}
