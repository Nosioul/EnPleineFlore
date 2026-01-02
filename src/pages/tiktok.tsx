import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

const TikTokPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Feel Great - Transformez votre bien-être | En pleine flore!"
        description="Découvrez le programme Feel Great : jeûne intermittent facilité avec Unimate et Balance. Rejoignez des milliers de personnes qui ont transformé leur vie."
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section - Ultra compact et percutant */}
        <section className="py-12 px-4 bg-gradient-to-br from-flore-green-50 via-white to-flore-orange-50">
          <div className="max-w-2xl mx-auto text-center">
            {/* Logo rapide */}
            <div className="mb-6">
              <a href="https://en-pleine-flore.vercel.app/" className="inline-block">
                <svg width="180" height="60" viewBox="0 0 200 60" className="mx-auto transition-transform duration-300 hover:scale-105" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(10, 30)">
                    <circle cx="0" cy="-8" r="6" fill="#f97316" opacity="0.9"></circle>
                    <circle cx="8" cy="-4" r="6" fill="#fb923c" opacity="0.9"></circle>
                    <circle cx="8" cy="4" r="6" fill="#f97316" opacity="0.9"></circle>
                    <circle cx="0" cy="8" r="6" fill="#fb923c" opacity="0.9"></circle>
                    <circle cx="-8" cy="4" r="6" fill="#f97316" opacity="0.9"></circle>
                    <circle cx="-8" cy="-4" r="6" fill="#fb923c" opacity="0.9"></circle>
                    <circle cx="0" cy="0" r="5" fill="#ea580c"></circle>
                  </g>
                  <text x="35" y="28" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="700" fill="#1f2937">En pleine</text>
                  <text x="35" y="48" fontFamily="Inter, sans-serif" fontSize="24" fontWeight="800" fill="#f97316">flore!</text>
                </svg>
              </a>
            </div>

            {/* Titre accrocheur */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Combattre efficacement <span className="text-transparent bg-clip-text bg-gradient-to-r from-flore-orange-500 to-flore-orange-600">l'insulino-résistance</span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 font-medium">
              C'est possible avec Feel Great ! 🌟
            </p>

            {/* CTA principal - ÉNORME */}
            <a
              href="https://shop2.unicity.com/c/125413749"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full max-w-md px-8 py-5 mb-2 text-xl font-bold text-white rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl bg-gradient-to-r from-flore-orange-500 to-flore-orange-600 hover:from-flore-orange-600 hover:to-flore-orange-700"
            >
              🛒 COMMANDER MAINTENANT
            </a>

            <p className="text-sm text-gray-600 mb-4 max-w-md mx-auto">
              le pack feel great avec 1 unimate et 2 balance
            </p>

            {/* CTA secondaire */}
            <Link
              href="/"
              className="inline-block w-full max-w-md px-8 py-4 text-lg font-semibold text-flore-orange-600 bg-white border-2 border-flore-orange-500 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-flore-orange-50"
            >
              Découvrir le site complet →
            </Link>
          </div>
        </section>

        {/* Section "Comment ça marche" - Vidéo de présentation */}
        <section className="py-12 px-4 bg-white/80 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Comment ça marche ? 🤔
            </h2>

            {/* Vidéo de présentation */}
            <div className="bg-gray-100 rounded-2xl p-6 shadow-xl">
              <video
                className="w-full h-auto rounded-xl"
                controls
                preload="metadata"
              >
                <source src="/videos/explicationTiktok.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
              <p className="text-center text-gray-600 mt-4 text-sm">
                Découvrez le programme Feel Great en vidéo
              </p>
            </div>
          </div>
        </section>

        {/* Les résultats */}
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Les résultats ? 💪
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-flore-orange-600 mb-1">-20%</div>
                <div className="text-sm text-gray-600">Glycémie après repas</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-1">3x</div>
                <div className="text-sm text-gray-600">Plus de satiété</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-flore-orange-600 mb-1">16:8</div>
                <div className="text-sm text-gray-600">Jeûne facile</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-1">90j</div>
                <div className="text-sm text-gray-600">Pour transformer</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-flore-orange-50 rounded-2xl p-6 mb-8">
              <p className="text-lg text-gray-700 italic">
                "Des milliers de personnes ont déjà transformé leur vie avec Feel Great. Pas de régime drastique, pas de sensation de faim, juste des résultats durables ! ✨"
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi ça fonctionne */}
        <section className="py-12 px-4 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Pourquoi ça fonctionne ? 🔬
            </h2>

            <div className="space-y-4">
              <div className="flex items-start bg-white rounded-xl p-5 shadow-md">
                <span className="text-2xl mr-4">✅</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Scientifiquement prouvé</h3>
                  <p className="text-gray-600">35 ans de recherche clinique (Cleveland Clinic, UCLA, Mayo Clinic)</p>
                </div>
              </div>

              <div className="flex items-start bg-white rounded-xl p-5 shadow-md">
                <span className="text-2xl mr-4">✅</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Jeûne intermittent simplifié</h3>
                  <p className="text-gray-600">Plus besoin de lutter contre la faim grâce à Unimate et Balance</p>
                </div>
              </div>

              <div className="flex items-start bg-white rounded-xl p-5 shadow-md">
                <span className="text-2xl mr-4">✅</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Microbiote équilibré</h3>
                  <p className="text-gray-600">Les fibres de Balance nourrissent votre flore intestinale</p>
                </div>
              </div>

              <div className="flex items-start bg-white rounded-xl p-5 shadow-md">
                <span className="text-2xl mr-4">✅</span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Énergie stable toute la journée</h3>
                  <p className="text-gray-600">Fini les coups de fatigue et les fringales</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final - Double impact */}
        <section className="py-16 px-4 bg-gradient-to-r from-flore-orange-500 to-flore-orange-600">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Prêt à transformer votre vie ? 🚀
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Rejoignez des milliers de personnes qui ont déjà sauté le pas !
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://shop2.unicity.com/c/125413749"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 text-xl font-bold text-flore-orange-600 bg-white rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-3xl"
              >
                🛒 COMMANDER
              </a>

              <Link
                href="/"
                className="inline-block px-10 py-5 text-xl font-bold text-white bg-transparent border-4 border-white rounded-2xl transform transition-all duration-300 hover:scale-110 hover:bg-white hover:text-flore-orange-600"
              >
                📖 EN SAVOIR PLUS
              </Link>
            </div>

            <p className="mt-6 text-white/80 text-sm">
              Livraison rapide • Paiement sécurisé • Satisfaction garantie
            </p>
          </div>
        </section>

        {/* Footer minimaliste */}
        <footer className="py-8 px-4 bg-gray-900 text-center">
          <p className="text-white/70 text-sm mb-2">
            En pleine flore! - Distributeur indépendant Unicity
          </p>
          <p className="text-white/50 text-xs">
            Les produits Feel Great ne sont pas destinés à diagnostiquer, traiter, guérir ou prévenir une maladie.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://www.tiktok.com/@en_pleine_flore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              TikTok
            </a>
            <a
              href="https://www.instagram.com/enpleineflore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </footer>
      </main>
    </>
  );
};

export default TikTokPage;
