// components/ui/Titres.tsx
"use client";

interface TitreProps {
  children: React.ReactNode;
  id?: string;
}

export default function Titre({ children, id }: TitreProps) {
  const generatedId =
    id ?? (typeof children === "string"
      ? children.toLowerCase().replace(/[^a-z0-9]+/gi, "-").replace(/(^-|-$)/g, "")
      : undefined);

  return (
    <h1
      id={generatedId}
      className="scroll-mt-[80px] mt-[80px] mb-4 text-4xl md:text-6xl font-semibold text-center"
    >
      {children}
    </h1>
  );
}
