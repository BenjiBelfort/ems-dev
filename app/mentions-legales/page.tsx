// app/mentions-legales/page.tsx
"use client";

import Titre from "@/components/ui/Titres";

export default function MentionsLegales() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      {/* Titre de page (H1) */}
      <Titre>Mentions Légales</Titre>

      {/* Éditeur */}
      <section id="editeur" className="mt-10">
        <h2 className="text-xl font-semibold mb-2 scroll-mt-20">Éditeur du site</h2>
        <p>
          <span className="footer-logo font-semibold">EMS <span className="text-lime-400">A</span>udit</span>
           – SAS au capital de [●] €, immatriculée au RCS de [Ville] sous le n° [●],  
          dont le siège social est situé :  
          1 Rue Eric de Martimprey, 95300 Pontoise.
        </p>
      </section>

      {/* Directeur de la publication */}
      <section id="directeur-publication" className="mt-8">
        <h2 className="text-xl font-semibold mb-2 scroll-mt-20">Directeur de la publication</h2>
        <p>
          Monsieur/Madame [Prénom NOM], en qualité de [Fonction] au sein de <span className="footer-logo font-semibold">EMS <span className="text-lime-400">A</span>udit</span>.
        </p>
      </section>

      {/* Hébergeur */}
      <section id="hebergeur" className="mt-8">
        <h2 className="text-xl font-semibold mb-2 scroll-mt-20">Hébergement</h2>
        <p>
          Le site est hébergé par :  
          Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
        </p>
      </section>

      {/* Propriété intellectuelle */}
      <section id="propriete-intellectuelle" className="mt-8">
        <h2 className="text-xl font-semibold mb-2 scroll-mt-20">Propriété intellectuelle</h2>
        <p>
          Tous les contenus (textes, images, logos, vidéos…) présents sur ce site  
          sont la propriété exclusive de <span className="footer-logo font-semibold">EMS <span className="text-lime-400">A</span>udit</span>, sauf mentions contraires.
        </p>
      </section>

      {/* Données personnelles */}
      <section id="donnees-personnelles" className="mt-8">
        <h2 className="text-xl font-semibold mb-2 scroll-mt-20">Données personnelles</h2>
        <p>
          Conformément à la loi “Informatique et Libertés” et au RGPD,  
          vous disposez d’un droit d’accès, de rectification et de suppression  
          des données vous concernant.  
          Pour l’exercer, envoyez un mail à   
          <a href="mailto:contact@emsaudit.com" className="text-lime-400 underline ml-1">
            contact@emsaudit.com
          </a>.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-8">
        <h2 className="text-xl font-semibold mb-2 scroll-mt-20">Contact</h2>
        <p>
          Pour toute question, écrivez-nous à  
          <a href="mailto:contact@emsaudit.com" className="text-lime-400 underline ml-1">
            contact@emsaudit.com
          </a>  
          ou appelez-nous au 01 30 17 42 50.
        </p>
      </section>
    </main>
  );
}
