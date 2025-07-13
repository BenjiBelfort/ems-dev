import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  href: string;
}

export default function Card({ title, description, href }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 transition hover:shadow-xl">
      <h3 className="text-xl font-semibold mb-2 h2-secondary">{title}</h3>
      <p className="text-gray-700 mb-4 p-text">{description}</p>
      <Link
        href={href}
        className="text-blue-600 hover:text-blue-800 font-medium underline"
      >
        En savoir plus →
      </Link>
    </div>
  );
}
