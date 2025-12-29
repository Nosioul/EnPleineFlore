import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const UnimateProductPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Unimate - Énergie et Concentration | En pleine flore!"
        description="Découvrez Unimate, la boisson à base de yerba maté qui améliore votre concentration et votre énergie."
      />
      
      <Header />
      
      <main>
        {/* Hero Section Produit */}
        <section className="section-padding bg-gradient-to-br from-green-50 to-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-4">
                  Produit phare
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Unimate
                </h1>
                <p className="text-2xl text-gray-700 mb-4 font-medium">
                  Votre allié énergie et concentration
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Une boisson matinale révolutionnaire à base de yerba maté ultra-purifiée, conçue pour optimiser vos performances mentales et physiques.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a
                    href="https://shop2.unicity.com/c/125413749"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg"
                  >
                    Acheter Unimate →
                  </a>
                  <Link href="/produit-balance" className="btn-secondary text-lg">
                    Voir aussi Balance
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-green-600">5x</div>
                    <div className="text-sm text-gray-600">Plus de chlorogène</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-green-600">30x</div>
                    <div className="text-sm text-gray-600">Plus de théobromine</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-green-600">0</div>
                    <div className="text-sm text-gray-600">Sucre ajouté</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-12 shadow-2xl">
                  <img 
                    src="/images/Feel-great.jpg" 
                    alt="Unimate Feel Great"
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
              Les bienfaits d'Unimate
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Énergie durable</h3>
                <p className="text-gray-600">
                  Fournit une énergie stable et prolongée sans les pics et chutes du café.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Clarté mentale</h3>
                <p className="text-gray-600">
                  Améliore la concentration, la mémoire et les performances cognitives.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Soutien au jeûne</h3>
                <p className="text-gray-600">
                  Facilite le jeûne intermittent en réduisant la sensation de faim.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Humeur positive</h3>
                <p className="text-gray-600">
                  Contient des composés qui favorisent le bien-être et la bonne humeur.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Métabolisme optimisé</h3>
                <p className="text-gray-600">
                  Stimule naturellement le métabolisme pour une meilleure utilisation de l'énergie.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Antioxydants</h3>
                <p className="text-gray-600">
                  Riche en polyphénols qui protègent vos cellules du stress oxydatif.
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
                Comment utiliser Unimate ?
              </h2>
              
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Préparation simple</h3>
                      <p className="text-gray-600">
                        Versez un sachet d'Unimate dans 250-350ml d'eau chaude ou froide. Mélangez bien.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Moment idéal</h3>
                      <p className="text-gray-600">
                        Consommez Unimate le matin à jeun pour maximiser ses effets.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Fréquence</h3>
                      <p className="text-gray-600">
                        1 à 2 sachets par jour selon vos besoins en énergie.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Important :</strong> Unimate ne rompt pas le jeûne, idéal pour le jeûne intermittent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding bg-gradient-to-br from-green-50 to-green-100">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Prêt à booster votre énergie naturellement ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de personnes qui ont fait d'Unimate leur rituel matinal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://shop2.unicity.com/c/125413749"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
              >
                Commander Unimate maintenant →
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

export default UnimateProductPage;
