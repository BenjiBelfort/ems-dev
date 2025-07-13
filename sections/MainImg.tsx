import Image from "next/image";

export default function MainImg() {
  return (
    <section className="relative w-full h-[700px] overflow-hidden">
      {/* Image de fond */}
      <Image
        src="/images/header-fond.webp"
        alt="Image d'en-tête"
        fill
        priority
        className="object-cover"
      />

      {/* Bloc texte superposé */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur EMS Audit</h1>
        <h2 className="text-2xl font-medium">
          Expertise comptable & accompagnement carbone
        </h2>
      </div>
    </section>
  );
}
