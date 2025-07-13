import Card from "@/components/ui/MissionCard";

export default function MissionsSection() {
  return (
    <section 
        id="missions"
        className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50"
    >
        <h2>Nos missions</h2>
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
