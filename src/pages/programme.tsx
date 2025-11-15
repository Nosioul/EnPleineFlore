import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const ProgrammePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Programme Feel Great - Jeûne Intermittent Facilité"
        description="Découvrez le programme Feel Great : jeûne intermittent facilité avec Unimate et Balance."
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-flore-green-50 via-white to-flore-orange-50">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Le Programme <span className="text-gradient">Feel Great</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Une approche scientifique du jeûne intermittent, simplifiée grâce à deux produits révolutionnaires.
              </p>
              <div className="inline-flex items-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-flore-orange-500">16:8</div>
                  <div className="text-sm text-gray-600">Fenêtre de jeûne</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-flore-green-500">2</div>
                  <div className="text-sm text-gray-600">Produits essentiels</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-flore-orange-500">90</div>
                  <div className="text-sm text-gray-600">Jours pour transformer</div>
                </div>
              </div>
              <a
                href="https://ufeelgreat.com/c/Mijo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
              >
                Commencer le programme →
              </a>
            </div>
          </div>
        </section>

        {/* Le Concept */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Le jeûne intermittent, simplifié
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Le programme Feel Great rend le jeûne intermittent accessible à tous. Plus besoin de lutter contre la faim ou les baisses d'énergie.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <p className="text-gray-700">
                      <strong>Sans sensation de faim</strong> - Unimate et Balance régulent naturellement votre appétit
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <p className="text-gray-700">
                      <strong>Énergie stable</strong> - Fini les coups de fatigue et les fringales
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl">✓</span>
                    <p className="text-gray-700">
                      <strong>Résultats durables</strong> - Une transformation qui s'installe dans le temps
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Les 3 piliers du programme</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Jeûne intermittent 16:8</h4>
                      <p className="text-gray-600">16 heures de jeûne, 8 heures pour vos repas.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-flore-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-flore-orange-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Unimate le matin</h4>
                      <p className="text-gray-600">Pour l'énergie et la concentration.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-flore-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-flore-orange-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Balance avant les repas</h4>
                      <p className="text-gray-600">Pour réguler la glycémie.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline journée type */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Votre journée type avec Feel Great
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-green-500">
                <div className="flex items-center mb-2">
                  <span className="text-lg font-bold text-gray-900 mr-3">7h00</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Unimate</span>
                </div>
                <p className="text-gray-600">Commencez votre journée avec Unimate pour une énergie durable.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-gray-300">
                <div className="flex items-center mb-2">
                  <span className="text-lg font-bold text-gray-900 mr-3">7h30 - 12h00</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Jeûne</span>
                </div>
                <p className="text-gray-600">Période de jeûne avec concentration et énergie optimales.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-flore-orange-500">
                <div className="flex items-center mb-2">
                  <span className="text-lg font-bold text-gray-900 mr-3">11h45</span>
                  <span className="px-3 py-1 bg-flore-orange-100 text-flore-orange-800 rounded-full text-sm">Balance</span>
                </div>
                <p className="text-gray-600">Prenez Balance 10-15 minutes avant votre premier repas.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                <div className="flex items-center mb-2">
                  <span className="text-lg font-bold text-gray-900 mr-3">12h00</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Déjeuner</span>
                </div>
                <p className="text-gray-600">Rompez le jeûne avec un repas équilibré.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-flore-orange-500">
                <div className="flex items-center mb-2">
                  <span className="text-lg font-bold text-gray-900 mr-3">18h45</span>
                  <span className="px-3 py-1 bg-flore-orange-100 text-flore-orange-800 rounded-full text-sm">Balance</span>
                </div>
                <p className="text-gray-600">Deuxième prise de Balance avant le dîner.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                <div className="flex items-center mb-2">
                  <span className="text-lg font-bold text-gray-900 mr-3">19h00</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Dîner</span>
                </div>
                <p className="text-gray-600">Dernier repas de la journée.</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-gray-300">
                <div className="flex items-center mb-2">
                  <span className="text-lg font-bold text-gray-900 mr-3">20h00 - 7h00</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Jeûne nocturne</span>
                </div>
                <p className="text-gray-600">Période de régénération et de repos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Bénéfices */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Les bénéfices du programme Feel Great
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-flore-orange-400 to-flore-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Perte de poids naturelle</h3>
                <p className="text-gray-600">
                  Le jeûne intermittent optimise la combustion des graisses.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🧠</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Clarté mentale</h3>
                <p className="text-gray-600">
                  Amélioration de la concentration et des performances cognitives.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-flore-orange-400 to-flore-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Santé métabolique</h3>
                <p className="text-gray-600">
                  Amélioration de la sensibilité à l'insuline.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">⏰</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Longévité cellulaire</h3>
                <p className="text-gray-600">
                  Activation de l'autophagie pour la régénération.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-flore-orange-400 to-flore-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🌿</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Microbiote équilibré</h3>
                <p className="text-gray-600">
                  Amélioration de la santé intestinale.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Immunité renforcée</h3>
                <p className="text-gray-600">
                  Réduction de l'inflammation chronique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding bg-gradient-to-br from-flore-green-50 to-flore-orange-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transformez votre vie en 90 jours
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Le programme Feel Great vous accompagne vers une meilleure version de vous-même.
            </p>
            <a
              href="https://ufeelgreat.com/c/Mijo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Démarrer le programme maintenant →
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default ProgrammePage;
