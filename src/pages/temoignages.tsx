import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Temoignages: React.FC = () => {
  return (
    <>
      <SEO
        title="Témoignages - En Pleine Flore"
        description="Découvrez les témoignages de nos clients qui ont transformé leur bien-être avec Feel Great by Unicity. Vidéos authentiques et retours d'expérience."
        keywords="témoignages, avis, feel great, unicity, bien-être, résultats"
        url="https://en-pleine-flore.com/temoignages"
      />

      <Header />

      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-flore-orange-50 via-white to-flore-green-50">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Ils ont testé, <span className="text-gradient">ils témoignent</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les expériences authentiques de personnes qui ont intégré Feel Great dans leur quotidien.
            </p>
          </div>
        </section>

        {/* Témoignages vidéo */}
        <section className="section-padding bg-gradient-to-br from-flore-orange-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Témoignages vidéo
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Des résultats concrets, racontés par ceux qui les vivent au quotidien.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Témoignage Steff */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative bg-black">
                  <video
                    className="w-full"
                    controls
                    preload="metadata"
                    poster=""
                  >
                    <source src="/videos/temoin_steff.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture vidéo.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Le témoignage de Steff
                  </h3>
                  <p className="text-gray-600">
                    Découvrez comment Feel Great a changé son quotidien et amélioré son bien-être.
                  </p>
                </div>
              </div>

              {/* Témoignage Sandi */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative bg-black">
                  <video
                    className="w-full"
                    controls
                    preload="metadata"
                    poster=""
                  >
                    <source src="/videos/temoin_sandi.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture vidéo.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Le témoignage de Sandi
                  </h3>
                  <p className="text-gray-600">
                    Son expérience avec le programme Feel Great et les résultats obtenus.
                  </p>
                </div>
              </div>
            </div>

            {/* Témoignage Clotilde */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
                    La transformation de Clotilde
                  </h3>
                  <p className="text-flore-orange-500 font-semibold text-center mb-6 text-lg">
                    -10 kg et ce n&apos;est que le début !
                  </p>
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <img
                        src="/images/clo-1.jpeg"
                        alt="Clotilde - Avant"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-md">
                      <img
                        src="/images/clo-2.jpeg"
                        alt="Clotilde - Après"
                        className="w-full h-auto object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className="text-gray-600 mt-6 text-center text-lg">
                    Grâce au programme Feel Great, Clotilde a perdu 10 kg et continue sa transformation. Une belle preuve que les résultats sont au rendez-vous !
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-flore-green-50 to-flore-orange-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Prêt(e) à vivre votre propre transformation ?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
              Rejoignez ceux qui ont déjà franchi le pas et commencez votre parcours bien-être dès aujourd&apos;hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/debuter" className="btn-primary text-lg">
                Débuter maintenant →
              </Link>
              <Link href="/rendez-vous" className="btn-secondary text-lg">
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Temoignages;
