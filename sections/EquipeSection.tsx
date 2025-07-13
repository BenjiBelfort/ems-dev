"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Jean Dupont",
    role: "Expert-comptable",
    img: "/images/equipe/carrousel/Alexandre.jpg",
  },
  {
    name: "Marie Durand",
    role: "Chargée de mission",
    img: "/images/equipe/carrousel/Alexia.jpg",
  },
  {
    name: "Luc Martin",
    role: "Consultant carbone",
    img: "/images/equipe/carrousel/Ali.jpg",
  },
  {
    name: "Sophie Moreau",
    role: "Responsable RSE",
    img: "/images/equipe/carrousel/Catia.jpg",
  },
  {
    name: "Luc Martin",
    role: "Consultant carbone",
    img: "/images/equipe/carrousel/Ali.jpg",
  },
  {
    name: "Sophie Moreau",
    role: "Responsable RSE",
    img: "/images/equipe/carrousel/Catia.jpg",
  },
  {
    name: "Luc Martin",
    role: "Consultant carbone",
    img: "/images/equipe/carrousel/Ali.jpg",
  },
  {
    name: "Sophie Moreau",
    role: "Responsable RSE",
    img: "/images/equipe/carrousel/Catia.jpg",
  },
];

export default function EquipeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [angle, setAngle] = useState(0);

  const angleStep = 360 / team.length;
  const radius = 300;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Rotation automatique lente
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setAngle((prev) => prev + 0.2);
    }, 30); // 30ms => environ 33fps

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Remettre sur l'élément centré si clic
  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % team.length;
    setActiveIndex(nextIndex);
    setAngle(nextIndex * angleStep);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + team.length) % team.length;
    setActiveIndex(prevIndex);
    setAngle(prevIndex * angleStep);
  };

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">Notre équipe</h2>

      <div className="relative w-full max-w-[400px] h-[400px] mx-auto perspective-[1200px]">
        <div
          className="w-full h-full relative transition-transform duration-500"
          style={{
            transform: `translateZ(-${radius}px) rotateY(-${angle}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {team.map((member, index) => (
            <div
              key={index}
              className="absolute w-[250px] h-[350px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg bg-white overflow-hidden transition-all duration-500"
              style={{
                transform: `rotateY(${index * angleStep}deg) translateZ(${radius}px)`,
                transformStyle: "preserve-3d",
              }}
            >
              <Image
                src={member.img}
                alt={member.name}
                width={250}
                height={250}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-6">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          ◀ Précédent
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          Suivant ▶
        </button>
      </div>

      <div className="mt-6">
        <Link
          href="/equipe"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Voir toute l’équipe
        </Link>
      </div>
    </section>
  );
}
