// app/politique-confidentialite/page.tsx
"use client";

import Titre from "@/components/ui/Titres";

export default function PolitiqueConfidentialite() {
  return (
    <main className="p-8 max-w-3xl mx-auto space-y-10">
      {/* H1 géré par ton composant */}
      <Titre>Politique de confidentialité</Titre>

      {/* 1. Introduction */}
      <section id="introduction" className="scroll-mt-20">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Chez <span className="footer-logo font-semibold">EMS <span className="text-lime-400">A</span>udit</span>, nous prenons votre vie privée aussi sérieusement qu’un audit financier :  
          ce document vous explique quelles données nous collectons, pourquoi, et comment vous pouvez garder la main.
        </p>
      </section>

      {/* 2. Données collectées */}
      <section id="donnees-collectees" className="scroll-mt-20">
        <h2 className="text-xl font-semibold mb-2">2. Données collectées</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Formulaire de contact</strong> : nom, email, message.</li>
          <li><strong>Logs serveur</strong> : IP, user agent, date/heure de visite.</li>
          <li><strong>Cookies</strong> : uniquement ceux nécessaires tant que Analytics n’est pas activé.</li>
        </ul>
      </section>

      {/* 3. Finalités et fondements juridiques */}
      <section id="finalites" className="scroll-mt-20">
        <h2 className="text-xl font-semibold mb-2">3. Finalités &amp; fondements juridiques</h2>
        <p>
          Nous utilisons vos données pour :
          <ul className="list-disc list-inside ml-4">
            <li>Répondre à vos demandes via le formulaire (📝 base contractuelle).</li>
            <li>Assurer la sécurité et la stabilité du site (🔒 intérêt légitime).</li>
            <li>Analyser le trafic si vous acceptez les cookies Analytics (📊 consentement).</li>
          </ul>
        </p>
      </section>

      {/* 4. Durée de conservation */}
      <section id="duree-conservation" className="scroll-mt-20">
        <h2 className="text-xl font-semibold mb-2">4. Durée de conservation</h2>
        <p>
          Vos messages sont conservés <strong>3 ans</strong> après dernier contact.  
          Les logs serveur sont conservés <strong>6 mois</strong>.  
          Les cookies, <strong>1 an</strong> (selon votre choix dans les paramètres).
        </p>
      </section>

      {/* 5. Cookies */}
      <section id="cookies" className="scroll-mt-20">
        <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
        <p>
          Pour l’instant, on ne pose que les cookies techniques indispensables.  
          Si vous acceptez les cookies d’analyse, on pourra injecter Google Analytics uniquement avec votre accord.
        </p>
        <p>
          Gèrez tout ça ici ☞
          <a
            href="/parametres-cookies"
            className="text-lime-400 underline ml-1"
          >
            Paramètres des cookies
          </a>
          .
        </p>
      </section>

      {/* 6. Partage & sous-traitants */}
      <section id="partage-sous-traitants" className="scroll-mt-20">
        <h2 className="text-xl font-semibold mb-2">6. Partage &amp; sous-traitants</h2>
        <p>
          Vos données ne sont pas vendues. Pour le fonctionnement (hébergement, email),  
          nous faisons appel à Vercel, Netlify, et notre provider mail [●]. Ils sont tous tenus à la confidentialité.
        </p>
      </section>

      {/* 7. Vos droits */}
      <section id="droits" className="scroll-mt-20">
        <h2 className="text-xl font-semibold mb-2">7. Vos droits</h2>
        <p>
          À tout moment, vous pouvez demander :
          <ul className="list-disc list-inside ml-4">
            <li>Accès à vos données.</li>
            <li>Rectification ou effacement.</li>
            <li>Portabilité.</li>
            <li>Opposition ou limitation.</li>
          </ul>
          Pour ça, envoyez un mail à
          <a href="mailto:contact@emsaudit.com" className="text-lime-500 underline mx-1">
            contact@emsaudit.com
          </a>
          ou écrivez-nous à 1 rue Eric de Martimprey, 95300 Pontoise.
        </p>
      </section>

      {/* 8. Mise à jour */}
      <section id="mise-a-jour" className="scroll-mt-20">
        <h2 className="text-xl font-semibold mb-2">8. Mise à jour de la politique</h2>
        <p>
          Cette politique peut évoluer : la date de dernière mise à jour est indiquée ci-dessous.  
          Pensez à la vérifier régulièrement.
        </p>
        <p className="text-sm text-center text-gray-500 mt-4">
          Dernière mise à jour : 5 août 2025
        </p>
      </section>
    </main>
  );
}
