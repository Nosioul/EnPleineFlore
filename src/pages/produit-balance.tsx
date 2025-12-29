import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const BalanceProductPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Balance - Équilibre Glycémique | En pleine flore!"
        description="Découvrez Balance, la matrice de fibres qui régule votre glycémie et améliore votre digestion."
      />
      
      <Header />
      
      <main>
        {/* Hero Section Produit */}
        <section className="section-padding bg-gradient-to-br from-flore-orange-50 to-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-flore-orange-100 text-flore-orange-800 mb-4">
                  Innovation brevetée
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Balance
                </h1>
                <p className="text-2xl text-gray-700 mb-4 font-medium">
                  L'équilibre glycémique optimal
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Une formule révolutionnaire de fibres brevetées qui transforme la façon dont votre corps gère les glucides.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="https://shop2.unicity.com/c/125413749"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg"
                  >
                    Acheter Balance →
                  </a>
                  <Link href="/produit-unimate" className="btn-secondary text-lg">
                    Voir aussi Unimate
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-flore-orange-600">4-6</div>
                    <div className="text-sm text-gray-600">Fibres essentielles</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-flore-orange-600">70%</div>
                    <div className="text-sm text-gray-600">Réduction des pics</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-flore-orange-600">3x</div>
                    <div className="text-sm text-gray-600">Plus de satiété</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-flore-orange-100 to-flore-orange-200 rounded-3xl p-12 shadow-2xl">
                  <img 
                    src="/images/balance.png" 
                    alt="Balance Feel Great"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bienfaits */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Les bienfaits de Balance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-flore-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Régulation glycémique</h3>
                <p className="text-gray-600">
                  Atténue les pics de glycémie après les repas pour une énergie stable.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-flore-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Satiété prolongée</h3>
                <p className="text-gray-600">
                  Les fibres créent une sensation de plénitude qui dure plus longtemps.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-flore-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Santé digestive</h3>
                <p className="text-gray-600">
                  Nourrit le microbiote intestinal avec des prébiotiques naturels.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-flore-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Santé cardiaque</h3>
                <p className="text-gray-600">
                  Aide à maintenir des niveaux sains de cholestérol.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-flore-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Gestion du poids</h3>
                <p className="text-gray-600">
                  Soutient naturellement vos objectifs de poids en régulant l'appétit.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-flore-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Absorption optimisée</h3>
                <p className="text-gray-600">
                  Améliore l'absorption des nutriments essentiels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mode d'emploi */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                Comment utiliser Balance ?
              </h2>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-flore-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-flore-orange-600 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Préparation facile</h3>
                      <p className="text-gray-600">
                        Mélangez un sachet de Balance dans 250-300ml d'eau. Remuez vigoureusement.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-flore-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-flore-orange-600 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Timing parfait</h3>
                      <p className="text-gray-600">
                        Consommez Balance 10-15 minutes avant vos deux repas principaux.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-flore-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-flore-orange-600 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Routine quotidienne</h3>
                      <p className="text-gray-600">
                        2 sachets par jour : un avant le déjeuner et un avant le dîner.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-flore-orange-50 rounded-lg">
                  <p className="text-sm text-flore-orange-800">
                    <strong>Astuce :</strong> Combinez Balance avec Unimate pour une synergie parfaite.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding bg-gradient-to-br from-flore-orange-50 to-flore-orange-100">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Équilibrez votre glycémie naturellement
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Balance est votre allié quotidien pour une glycémie stable et une digestion optimale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://shop2.unicity.com/c/125413749"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
              >
                Commander Balance maintenant →
              </a>
              <Link href="/programme" className="btn-secondary text-lg">
                Découvrir le programme complet
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default BalanceProductPage;
