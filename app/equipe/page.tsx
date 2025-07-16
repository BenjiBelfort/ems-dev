import CollabGrid from "@/components/ui/CollabGrid";

export default function EquipePage() {
  return (
    <main className="md:w-5xl p-8 pt-28">
      <h1 className="text-3xl font-bold mb-4">ICI c&apos;est EMS</h1>
      <p className="mb-6 text-lg text-gray-700">
        Nous nous engageons à générer un impact positif sur la société à travers...
      </p>

      {/* Texte avant la galerie */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Notre équipe pour vous servir :</h2>
        <p className="text-gray-600 mb-6">
          Voici les membres d’EMS Audit : une équipe engagée, compétente et complémentaire.
        </p>

        {/* La galerie 3 colonnes */}
        <CollabGrid />
      </section>
    </main>
  );
}
