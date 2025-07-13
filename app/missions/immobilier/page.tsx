export default function ImmobilierPage() {
  return (
    <main className="p-8">
      <h1>Immobilier</h1>
      <p className="mb-6">
        Nous nous engageons à générer un impact positif sur la société à travers...
      </p>

      <section className="grid md:grid-cols-2 gap-6">
        {/* Blocs personnalisés */}
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="mb-2">Nos actions</h2>
          <p>Nous intervenons dans les domaines suivants...</p>
        </div>
        <div className="bg-gray-100 p-4 rounded shadow">
          <h2 className="mb-2">Partenaires</h2>
          <p>Nous collaborons avec des ONG, collectivités, etc.</p>
        </div>
      </section>
    </main>
  );
}
