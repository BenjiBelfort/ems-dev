// components/sections/MissionsSection.tsx
import Card from "@/components/ui/MissionCard";

export default function MissionsSection() {
  return (
    <section
      id="missions"
      className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 scroll-mt-18"
    >
      <h2
        className={`
          relative inline-block
          text-3xl md:text-4xl font-medium logo-title text-gray-800
          mb-12
          after:absolute after:bottom-0 after:left-1/2
          after:h-[4px] after:w-16 after:bg-lime-400
          after:-translate-x-1/2
        `}
      >
        Nos missions
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          title="Expertise comptable"
          description="La compta de base pour les TPE/PME."
          href="/missions/expertise-comptable"
        />
        <Card
          title="Bilan Carbone"
          description="Accompagnement des entreprises vers une démarche durable."
          href="/missions/bilan-carbone"
        />
        <Card
          title="Entreprise en difficulté"
          description="Accompagnement des entreprises en difficulté."
          href="/missions/entreprise-en-difficulte"
        />
        <Card
          title="Patrimoine"
          description="Accompagnement des entreprises dans la valorisation de leur patrimoine."
          href="/missions/immobilier"
        />
      </div>
    </section>
  );
}
