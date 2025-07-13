// app/page.tsx

'use client'
import dynamic from 'next/dynamic';

import MainImg from "@/sections/MainImg";
import AboutSection from "@/sections/AboutSection";
import MissionsSection from "@/sections/MissionsSection";
import EquipeSection from "@/sections/EquipeSection";

// Import dynamique sans SSR (pas de rendu côté serveur)
const ScrollHandler = dynamic(() => import("@/components/ScrollHandler"), { ssr: false });

export default function Home() {
  return (
    <>
      <ScrollHandler />
      <MainImg />
      <AboutSection />
      <MissionsSection />
      <EquipeSection />
    </>
  );
}
