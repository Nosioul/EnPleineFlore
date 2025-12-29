import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const DebuterPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Débuter avec En pleine flore! - Guide complet"
        description="Découvrez comment bien commencer votre transformation avec le programme Feel Great. Guide étape par étape pour réussir votre parcours bien-être."
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-flore-green-50 via-white to-flore-orange-50">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Débuter avec <span className="text-gradient">Feel Great</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Bienvenue dans votre parcours de transformation ! Cette page vous guidera pas à pas pour bien commencer avec le programme Feel Great et rejoindre notre communauté bienveillante.
              </p>

              {/* CTA App Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.unicity.feelgreatfasting&hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
              >
                Télécharger l'app Feel Great →
              </a>
            </div>
          </div>
        </section>

        {/* Section Comprendre le programme */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Comprendre le programme Feel Great
            </h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Le programme Feel Great repose sur une approche scientifique simple mais puissante : combiner le jeûne intermittent avec deux produits naturels exceptionnels - Unimate et Balance. Cette synergie unique vous permet de transformer votre bien-être sans les difficultés habituelles du jeûne.
              </p>
              
              <p className="mb-6">
                <strong>Unimate</strong> vous apporte l'énergie et la concentration dès le matin, sans rompre votre jeûne. Sa formule à base de yerba maté ultra-purifié vous aide à maintenir votre vitalité tout au long de la matinée.
              </p>
              
              <p className="mb-8">
                <strong>Balance</strong> régule votre glycémie et améliore votre digestion grâce à sa matrice de fibres brevetée. Pris avant vos repas, il optimise l'absorption des nutriments et prolonge la sensation de satiété.
              </p>
            </div>

            {/* Espace pour vidéo YouTube */}
            <div className="mt-8 bg-gray-100 rounded-lg p-8">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-[400px] rounded-lg"
                  src="https://www.youtube.com/watch?v=x4hAYXFLWeg"
                  title="Présentation du programme Feel Great"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-center text-gray-600 mt-4 text-sm">
                Vidéo de présentation du programme Feel Great
              </p>
            </div>
          </div>
        </section>

        {/* Section Étapes pour débuter */}
        <section className="section-padding bg-gradient-to-br from-flore-orange-50 to-white">
          <div className="container-custom max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Les 3 étapes pour bien débuter
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Étape 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-flore-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Télécharger l'application
                </h3>
                <p className="text-gray-600">
                  Commencez par télécharger l'application Feel Great sur votre smartphone. Elle sera votre guide quotidien avec des rappels, des conseils et un suivi personnalisé de vos progrès.
                </p>
              </div>

              {/* Étape 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-flore-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Suivre les premiers jours
                </h3>
                <p className="text-gray-600">
                  Les premiers jours sont cruciaux pour créer de nouvelles habitudes. Commencez progressivement avec une fenêtre de jeûne de 12 heures, puis augmentez graduellement jusqu'à 16 heures.
                </p>
              </div>

              {/* Étape 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-flore-green-500 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Prendre les deux produits
                </h3>
                <p className="text-gray-600">
                  Intégrez Unimate le matin à jeun et Balance 10-15 minutes avant vos deux repas principaux. Cette routine simple mais efficace transformera votre quotidien.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section vidéo/image supplémentaire */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Rejoignez notre communauté bienveillante
            </h2>
            
            <div className="bg-gradient-to-r from-flore-orange-50 to-flore-green-50 rounded-lg p-8">
              {/* Espace pour une deuxième vidéo */}
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <div className="bg-gray-200 rounded-lg flex items-center justify-center h-[400px]">
                  <p className="text-gray-500">
                    Espace réservé pour vidéo témoignages ou tutoriel
                  </p>
                </div>
              </div>
              
              <p className="text-center text-gray-700 mb-6">
                Vous n'êtes pas seul dans cette aventure ! Des milliers de personnes ont déjà transformé leur vie avec Feel Great. Rejoignez notre communauté pour partager vos expériences, poser vos questions et célébrer vos victoires.
              </p>
              
              <div className="text-center">
                <a
                  href="https://shop2.unicity.com/c/125413749"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg"
                >
                  Commencer maintenant →
                </a>
              </div>
            </div>

            {/* Conseils bonus */}
            <div className="mt-12 bg-green-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                🌟 Nos conseils pour réussir
              </h3>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-flore-green-500 font-bold mr-3">✓</span>
                  <span><strong>Soyez patient :</strong> Les changements durables prennent du temps. Donnez-vous au moins 30 jours pour voir les premiers résultats significatifs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-flore-green-500 font-bold mr-3">✓</span>
                  <span><strong>Restez hydraté :</strong> Buvez au moins 2 litres d'eau par jour pour optimiser l'efficacité des produits et faciliter le jeûne.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-flore-green-500 font-bold mr-3">✓</span>
                  <span><strong>Écoutez votre corps :</strong> Adaptez le programme à votre rythme. Si nécessaire, commencez par des fenêtres de jeûne plus courtes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-flore-green-500 font-bold mr-3">✓</span>
                  <span><strong>Célébrez vos victoires :</strong> Chaque jour réussi est une victoire. Notez vos progrès et soyez fier de votre engagement.</span>
                </li>
              </ul>
            </div>

            {/* Message motivant final */}
            <div className="mt-12 text-center">
              <p className="text-xl text-gray-700 italic">
                "Votre transformation commence aujourd'hui. Chaque petit pas vous rapproche de la meilleure version de vous-même."
              </p>
              <p className="mt-4 text-lg font-semibold text-flore-orange-600">
                Bienvenue dans la famille En Pleine Flore ! 🌿
              </p>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 bg-gradient-to-r from-flore-orange-100 to-flore-green-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Prêt à commencer votre transformation ?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Téléchargez l'application et rejoignez des milliers de personnes qui ont déjà transformé leur vie avec Feel Great.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.unicity.feelgreatfasting&hl=fr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Télécharger sur Google Play
              </a>
              <a
                href="https://apps.apple.com/app/feel-great"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                Télécharger sur App Store
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default DebuterPage;
