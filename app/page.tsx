// app/page.tsx

'use client'

// import EquipeSection from "@/sections/EquipeSection";
import HeroSection from "@/components/sections/HeroSection";
import AboutUsSection from "@/components/sections/AboutUsSection";

import SectionMissions from "@/components/sections/SectionMissions";

import TeamCarousel from "@/components/sections/TeamCarousel";


export default function Home() {
  return (
    <>

      <HeroSection />
      <AboutUsSection />
      <TeamCarousel />

      <SectionMissions />

    </>
  );
}
