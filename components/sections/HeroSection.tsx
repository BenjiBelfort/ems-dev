// components/sections/HeroSection.tsx
'use client';

import Image from "next/image";
import EmsLogo from "../EmsLogo";

export default function HeroSection() {
  const paragraph = `EMS Audit, cabinet à taille humaine de quinze collaborateurs, associe rigueur technique et approche humaine pour vous offrir des solutions comptables et immobilières sur‑mesure, en phase avec les enjeux environnementaux et sociétaux actuels.`;

  return (
    <section className="relative w-full h-[600px] md:h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/header-fond.webp"
        alt="Image d'en-tête"
        fill
        priority
        className="object-cover object-top"
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Main content: on mobile flex-col justify-end to push H1 to bottom */}
      <div className="relative z-10 container mx-auto h-full px-6 md:px-12 lg:px-24 flex flex-col justify-end md:flex-row md:items-end md:justify-center md:gap-x-24 pb-12">
        {/* Left column: logo + title */}
        <div className="flex flex-col items-start space-y-6 mb-8 md:mb-0 md:min-w-[600px]">
          {/* Logo hidden on mobile */}
          <div className="hidden md:block">
            <EmsLogo
              size="XL"
              color="white"
              hidePointsOnMobile
            />
          </div>
          {/* Title */}
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase leading-tight text-white">
              L’<span className="text-lime-400">expert comptable</span><br />
              au service de votre stratégie
            </h1>
          </div>
        </div>

        {/* Right column: paragraph only on desktop */}
        <div className="hidden md:block max-w-md text-gray-100 text-lg text-right">
          {paragraph}
        </div>
      </div>

      {/* Mobile-only paragraph under image */}
      <div className="md:hidden relative z-10 bg-black/80 text-gray-100 p-6">
        <p className="text-base">{paragraph}</p>
      </div>
    </section>
  );
}
