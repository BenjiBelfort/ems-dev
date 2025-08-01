import Titre from "@/components/ui/Titres";

import CollabGrid from "@/components/ui/CollabGrid";

export default function EquipePage() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-12 sm:px-4">
        <div className="text-center mb-10">
          <Titre>ICI c&apos;est EMS !!!</Titre>
        </div>

        <CollabGrid />
      </div>
    </section>
  );
}
