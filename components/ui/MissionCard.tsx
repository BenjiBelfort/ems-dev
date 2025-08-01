// components/Card.tsx
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  href: string;
}

export default function Card({ title, description, href }: CardProps) {
  return (
    <Link href={href} className="group block transition-shadow duration-300 hover:shadow-xl">
      <div className="bg-white rounded-lg p-6 shadow-md flex flex-col justify-between h-full">
        {/* Titre & description */}
        <div>
          <h3 className="logo-title text-2xl font-medium text-black mb-2">
            {title}
          </h3>
          <p className="p-text text-gray-700">
            {description}
          </p>
        </div>

        {/* "En savoir plus" centré en bas */}
        <div className="mt-6 text-center">
          <span className="inline-flex items-center text-lime-500 font-medium">
            <span>En savoir plus</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
              <FaArrowRight />
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
