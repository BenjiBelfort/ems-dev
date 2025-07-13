"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import MainImg from "@/sections/MainImg";
import AboutSection from "@/sections/AboutSection";
import MissionsSection from "@/sections/MissionsSection";
import EquipeSection from "@/sections/EquipeSection";

export default function Home() {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

  useEffect(() => {
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [scrollTo]);

  return (
    <>
      <MainImg />
      <AboutSection />
      <MissionsSection />
      <EquipeSection />
    </>
  );
}
