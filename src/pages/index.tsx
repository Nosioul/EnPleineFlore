import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="En pleine flore! - Produits Feel Great by Unicity | Unimate & Balance"
        description="Transformez votre bien-être avec le programme Feel Great. Découvrez Unimate et Balance pour optimiser votre microbiote."
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-flore-orange-50 via-white to-flore-green-50">
          <div className="container-custom py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Prenez soin de vous,{' '}
                  <span className="text-gradient">prenez soin de votre microbiote</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Découvrez le programme Feel Great et transformez votre quotidien grâce à Unimate et Balance. 
                  Une approche scientifique pour optimiser votre bien-être.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://ufeelgreat.com/c/Mijo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg"
                  >
                    Acheter via partenaire →
                  </a>
                  <Link href="/programme" className="btn-secondary text-lg">
                    Découvrir le programme
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-3xl shadow-2xl p-8">
                  <img 
                    src="/images/start.png" 
                    alt="Programme Feel Great"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
<section className="relative py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-orange-50 overflow-hidden">
  {/* Animations de fond subtiles */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* En-tête de la section */}
    <div className="text-center mb-16 animate-fade-in">
      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
        L'insulinorésistance : <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
          le problème caché
        </span>
      </h2>
      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Comprendre ce phénomène métabolique silencieux qui affecte des millions de personnes, 
        et découvrir comment y remédier naturellement.
      </p>
    </div>

    {/* Grid des 3 cartes principales */}
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {/* Carte 1 : Qu'est-ce que l'insulinorésistance ? */}
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-200 hover:-translate-y-2">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 text-center">
          <div className="text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-300">❗</div>
          <h3 className="text-2xl font-bold text-white">Qu'est-ce que c'est ?</h3>
        </div>
        <div className="p-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold text-gray-900">L'insulinorésistance</span> se produit lorsque vos cellules (muscles, foie, tissu adipeux) deviennent moins sensibles à l'action de l'insuline.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Normalement, l'insuline permet au glucose de pénétrer dans les cellules pour produire de l'énergie. Mais lorsque les cellules résistent, le sucre reste dans le sang.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pour compenser, votre pancréas sécrète <span className="font-semibold text-orange-600">toujours plus d'insuline</span>, créant un cercle vicieux qui peut mener au diabète de type 2.
          </p>
        </div>
      </div>

      {/* Carte 2 : Les conséquences */}
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-red-200 hover:-translate-y-2">
        <div className="bg-gradient-to-br from-red-500 to-red-600 p-6 text-center">
          <div className="text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-300">⚠️</div>
          <h3 className="text-2xl font-bold text-white">Les conséquences</h3>
        </div>
        <div className="p-8">
          <p className="text-gray-700 leading-relaxed mb-5">
            Si elle n'est pas prise en charge, l'insulinorésistance entraîne des complications sérieuses :
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2 text-xl">•</span>
              <span><span className="font-semibold">Diabète de type 2</span> : épuisement du pancréas et glycémie chroniquement élevée</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2 text-xl">•</span>
              <span><span className="font-semibold">Syndrome métabolique</span> : obésité abdominale, hypertension, dyslipidémie</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2 text-xl">•</span>
              <span><span className="font-semibold">Risques cardiovasculaires</span> augmentés de 37%</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2 text-xl">•</span>
              <span><span className="font-semibold">Inflammation chronique</span> et stress oxydatif</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-bold mr-2 text-xl">•</span>
              <span><span className="font-semibold">Fatigue persistante</span> et troubles métaboliques</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Carte 3 : Comment Feel Great aide */}
      <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-green-200 hover:-translate-y-2">
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 text-center">
          <div className="text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-300">✅</div>
          <h3 className="text-2xl font-bold text-white">La solution Feel Great</h3>
        </div>
        <div className="p-8">
          <p className="text-gray-700 leading-relaxed mb-5">
            Le programme Feel Great combine deux produits scientifiquement validés pour agir en synergie :
          </p>
          
          <div className="mb-6">
            <h4 className="font-bold text-lg text-orange-600 mb-3 flex items-center">
              <span className="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm">1</span>
              Balance (Matrice de fibres)
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>Réduit la glycémie de <span className="font-semibold">20-28%</span> après les repas</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>Diminue l'insuline sanguine de <span className="font-semibold">13-27%</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>Ralentit l'absorption des glucides grâce au gel de fibres</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>Améliore la sensibilité à l'insuline naturellement</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg text-green-600 mb-3 flex items-center">
              <span className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center mr-2 text-sm">2</span>
              Unimate (Yerba Maté concentré)
            </h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>Stimule le <span className="font-semibold">métabolisme cellulaire</span> et la production d'énergie</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>Améliore la <span className="font-semibold">signalisation de l'insuline</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>Favorise la combustion des graisses (thermogenèse)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">→</span>
                <span>Riche en antioxydants protecteurs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Encadré scientifique avec validation clinique */}
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-indigo-500 shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start">
        <div className="text-5xl mr-6 flex-shrink-0">🔬</div>
        <div>
          <h4 className="text-2xl font-bold text-gray-900 mb-4">Validation scientifique</h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Le système Feel Great a fait l'objet de <span className="font-semibold">plus de 35 ans de recherche</span> clinique par des institutions de premier plan : Cleveland Clinic, UCLA, Mayo Clinic, Stanford School of Medicine et l'Université de Sydney.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Les études démontrent une <span className="font-semibold text-indigo-600">amélioration significative</span> du contrôle glycémique, une réduction de l'hyperinsulinémie, et une diminution des lipides plasmatiques chez les patients atteints de syndrome métabolique. Balance est répertorié dans le <span className="italic">Prescribers Desk Reference</span> depuis 2002.
          </p>
        </div>
      </div>
    </div>

    {/* Call-to-action subtil */}
    <div className="text-center mt-12">
      <p className="text-gray-600 text-lg italic">
        Une approche naturelle, scientifiquement prouvée, pour retrouver l'équilibre métabolique
      </p>
    </div>
  </div>

  <style jsx>{`
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in {
      animation: fade-in 0.8s ease-out;
    }
  `}</style>
</section>
        {/* Produits Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Les produits <span className="text-gradient">Feel Great</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Deux produits complémentaires pour un programme complet de bien-être
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Unimate */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">Unimate</h3>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Énergie et concentration</h4>
                  <p className="text-gray-600 mb-4">
                    Boisson matinale à base de yerba maté premium pour démarrer votre journée avec énergie et clarté mentale.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Améliore la concentration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Soutient le métabolisme</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Facilite le jeûne</span>
                    </li>
                  </ul>
                  <Link href="/produit-unimate" className="btn-secondary w-full text-center">
                    En savoir plus sur Unimate
                  </Link>
                </div>
              </div>

              {/* Balance */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-flore-orange-400 to-flore-orange-600 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">Balance</h3>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Équilibre glycémique</h4>
                  <p className="text-gray-600 mb-4">
                    Matrice de fibres brevetée pour réguler l'absorption des glucides et maintenir une glycémie stable.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Régule la glycémie</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Favorise la satiété</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span className="text-gray-700">Soutient la digestion</span>
                    </li>
                  </ul>
                  <Link href="/produit-balance" className="btn-secondary w-full text-center">
                    En savoir plus sur Balance
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="https://ufeelgreat.com/c/Mijo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg"
              >
                Commander le pack complet →
              </a>
            </div>
          </div>
        </section>

        {/* Programme Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Le programme <span className="text-gradient">Feel Great</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Un protocole simple et efficace basé sur le jeûne intermittent, soutenu par deux produits scientifiquement formulés.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-flore-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-flore-orange-600 font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Matin : Unimate</h3>
                      <p className="text-gray-600">Commencez votre journée avec énergie et concentration.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-flore-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-flore-orange-600 font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Repas : Balance</h3>
                      <p className="text-gray-600">Prenez Balance avant vos repas pour réguler votre glycémie.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-flore-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-flore-orange-600 font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Jeûne intermittent facilité</h3>
                      <p className="text-gray-600">Profitez des bénéfices du jeûne sans la sensation de faim.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/programme" className="btn-primary">
                    Découvrir le programme complet →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Votre journée type
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="font-semibold text-gray-900">7h00 - Réveil</div>
                    <div className="text-gray-600">Buvez Unimate pour démarrer</div>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-4">
                    <div className="font-semibold text-gray-900">7h30 - 12h00</div>
                    <div className="text-gray-600">Période de jeûne énergique</div>
                  </div>
                  <div className="border-l-4 border-flore-orange-500 pl-4">
                    <div className="font-semibold text-gray-900">12h00 - Déjeuner</div>
                    <div className="text-gray-600">Balance 15 min avant le repas</div>
                  </div>
                  <div className="border-l-4 border-flore-orange-500 pl-4">
                    <div className="font-semibold text-gray-900">19h00 - Dîner</div>
                    <div className="text-gray-600">Balance 15 min avant le repas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ils ont transformé leur quotidien
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Découvrez les témoignages de nos clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-6 italic">
                  "Depuis que j'ai commencé le programme Feel Great, mon énergie est revenue et je me sens vraiment mieux au quotidien."
                </blockquote>
                <div className="font-semibold text-gray-900">Sophie L.</div>
                <div className="text-sm text-gray-500">Cliente depuis 6 mois</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-6 italic">
                  "J'ai enfin trouvé l'équilibre que je cherchais. Ma digestion va mieux et mes performances sportives se sont améliorées."
                </blockquote>
                <div className="font-semibold text-gray-900">Marc D.</div>
                <div className="text-sm text-gray-500">Sportif amateur</div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-6 italic">
                  "Les journées chargées ne me font plus peur ! Unimate me donne le coup de boost dont j'ai besoin le matin."
                </blockquote>
                <div className="font-semibold text-gray-900">Isabelle M.</div>
                <div className="text-sm text-gray-500">Entrepreneure</div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="https://ufeelgreat.com/c/Mijo"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Commencer mon programme →
              </a>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding bg-gradient-to-br from-flore-orange-50 to-flore-orange-100">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Prêt à transformer votre bien-être ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers de personnes qui ont déjà adopté le programme Feel Great.
            </p>
            <a
              href="https://ufeelgreat.com/c/Mijo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              Commander maintenant via notre partenaire →
            </a>
            <p className="mt-6 text-sm text-gray-500">
              Livraison rapide • Paiement sécurisé • Satisfaction garantie
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default HomePage;
