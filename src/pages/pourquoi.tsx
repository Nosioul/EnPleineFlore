import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const PourquoiPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Pourquoi En pleine flore ? - Votre Partenaire Bien-être"
        description="Découvrez pourquoi En pleine flore est votre meilleur choix pour les produits Feel Great."
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-flore-orange-50 via-white to-flore-green-50">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Pourquoi choisir <span className="text-gradient">En pleine flore</span> ?
              </h1>
              <p className="text-xl text-gray-600">
                Plus qu'un distributeur, nous sommes votre partenaire dans votre transformation bien-être. 
                Découvrez notre approche unique et notre engagement envers votre santé.
              </p>
            </div>
          </div>
        </section>

        {/* Notre Mission */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Notre mission : votre bien-être
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Chez En pleine flore!, nous croyons que chacun mérite de vivre en pleine santé, avec énergie et vitalité.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-flore-orange-500 mr-3 text-xl">✓</span>
                    <p className="text-gray-700">
                      <strong>Expertise</strong> - Une connaissance approfondie des produits Feel Great
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-flore-orange-500 mr-3 text-xl">✓</span>
                    <p className="text-gray-700">
                      <strong>Accompagnement</strong> - Un suivi personnalisé tout au long de votre parcours
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-flore-orange-500 mr-3 text-xl">✓</span>
                    <p className="text-gray-700">
                      <strong>Communauté</strong> - Un groupe bienveillant partageant les mêmes objectifs
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-flore-orange-400 to-flore-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl text-white">👥</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Plus de 1000 clients satisfaits</h3>
                <p className="text-gray-600 mb-6">
                  Nous avons accompagné des centaines de personnes dans leur transformation.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold text-flore-orange-500">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-flore-orange-500">24h</div>
                    <div className="text-sm text-gray-600">Réponse</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Le microbiote */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
                Le microbiote : la clé de votre bien-être
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                Votre microbiote intestinal joue un rôle crucial dans votre santé globale.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🌿</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Digestion optimale</h3>
                  <p className="text-gray-600">
                    Un microbiote équilibré améliore la digestion et l'absorption des nutriments.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Immunité renforcée</h3>
                  <p className="text-gray-600">
                    70% de votre système immunitaire se trouve dans l'intestin.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Mental équilibré</h3>
                  <p className="text-gray-600">
                    L'axe intestin-cerveau influence votre humeur et votre bien-être mental.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Énergie vitale</h3>
                  <p className="text-gray-600">
                    Un microbiote sain optimise la production d'énergie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Nos valeurs fondamentales
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-flore-orange-400 to-flore-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Qualité Premium</h3>
                <p className="text-gray-600">
                  Nous ne proposons que les meilleurs produits, scientifiquement validés.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Accompagnement</h3>
                <p className="text-gray-600">
                  Nous vous accompagnons avec bienveillance selon vos besoins.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-flore-orange-400 to-flore-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transparence</h3>
                <p className="text-gray-600">
                  Des résultats réels basés sur la science et l'expérience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding bg-gradient-to-br from-flore-orange-50 to-flore-orange-100">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Rejoignez la communauté En pleine flore!
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Des milliers de personnes ont déjà transformé leur vie. C'est votre tour !
            </p>
            <a
              href="https://ufeelgreat.com/c/Mijo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Commander mes produits Feel Great →
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default PourquoiPage;
