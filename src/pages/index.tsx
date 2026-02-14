import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useTrackPurchaseClick } from '../hooks/useVisitTracker';

const HomePage: React.FC = () => {
  const { trackClick } = useTrackPurchaseClick();

  return (
    <>
      <SEO 
        title="En pleine flore! - UNICITY"
        description="Transformez votre bien-être avec le programme Feel Great. Découvrez Unimate et Balance pour optimiser votre microbiote."
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center bg-gradient-to-br from-flore-orange-50 via-white to-flore-green-50 overflow-hidden">
          {/* Animated organic ribbons */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <defs>
                <linearGradient id="heroRibbon1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'rgba(251,146,60,0.4)'}}/>
                  <stop offset="100%" style={{stopColor:'rgba(253,186,116,0.3)'}}/>
                </linearGradient>
                <linearGradient id="heroRibbon2" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:'rgba(234,88,12,0.3)'}}/>
                  <stop offset="100%" style={{stopColor:'rgba(251,191,36,0.25)'}}/>
                </linearGradient>
                <linearGradient id="heroRibbon3" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:'rgba(74,222,128,0.25)'}}/>
                  <stop offset="100%" style={{stopColor:'rgba(253,186,116,0.3)'}}/>
                </linearGradient>
              </defs>
              <path className="ribbon-anim" d="M-50,350 C150,100 400,50 600,200 C800,350 900,100 1250,250"
                    stroke="url(#heroRibbon1)" strokeWidth="2.5" fill="none" strokeLinecap="round"
                    strokeDasharray="2000" style={{animationDelay:'0.2s'}} />
              <path className="ribbon-anim" d="M-30,150 C200,400 350,50 550,300 C750,550 950,200 1250,450"
                    stroke="url(#heroRibbon2)" strokeWidth="2" fill="none" strokeLinecap="round"
                    strokeDasharray="2000" style={{animationDelay:'0.5s'}} />
              <path className="ribbon-anim" d="M-50,600 C100,300 300,500 500,250 C700,0 900,400 1250,150"
                    stroke="url(#heroRibbon3)" strokeWidth="3" fill="none" strokeLinecap="round"
                    strokeDasharray="2000" style={{animationDelay:'0.8s'}} />
              <path className="ribbon-anim" d="M-50,100 C200,350 450,0 650,300 C850,600 1000,100 1250,350"
                    stroke="url(#heroRibbon1)" strokeWidth="1.5" fill="none" strokeLinecap="round"
                    strokeDasharray="2000" style={{animationDelay:'1.1s'}} />
              <path className="ribbon-anim" d="M-30,500 C150,200 350,650 600,400 C850,150 1050,550 1260,300"
                    stroke="url(#heroRibbon2)" strokeWidth="2" fill="none" strokeLinecap="round"
                    strokeDasharray="2000" style={{animationDelay:'0.3s'}} />
            </svg>
          </div>
          <div className="container-custom py-8 md:py-12 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                {/* Phrase manuscrite juste au-dessus du titre */}
                <p className="hero-text-reveal text-flore-orange-500 text-xl sm:text-2xl md:text-3xl mb-1" style={{ fontFamily: "'Caveat', cursive" }}>
                  Découvrez notre présentation ! <span className="inline-block lg:hidden">👇</span>
                </p>
                <h1 className="hero-text-reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                  Prenez soin de vous,{' '}
                  <span className="text-gradient">prenez soin de votre microbiote</span>
                </h1>
                <p className="hero-text-reveal text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
                  Découvrez le programme Feel Great et transformez votre quotidien grâce à Unimate et Balance.
                  Une approche scientifique pour optimiser votre bien-être.
                </p>
                <div className="hero-text-reveal flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://shop2.unicity.com/fra/fr/product/feel-great?focus=true&sku=36648"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-lg"
                    onClick={() => trackClick('Acheter via partenaire - Hero')}
                  >
                    Acheter via partenaire →
                  </a>
                  <Link href="/programme" className="btn-secondary text-lg">
                    Découvrir le programme
                  </Link>
                </div>
              </div>
              <div className="relative flex flex-col items-center hero-text-reveal">
                <div className="bg-white rounded-2xl shadow-2xl p-2 md:p-3 max-w-sm md:max-w-xs lg:max-w-sm">
                  <video
                    className="w-full h-auto rounded-xl"
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <source src="/videos/presentation.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture vidéo.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section Insulinorésistance */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            {/* Titre */}
            <div className="text-center mb-14 md:mb-20">
              <p className="text-flore-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Comprendre le problème</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                L'insulinorésistance : <span className="text-gradient">le problème caché</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Un phénomène métabolique silencieux qui touche des millions de personnes.
              </p>
            </div>

            {/* Layout : Problème → Conséquences → Solution */}
            <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-12 md:gap-8 lg:gap-12 mb-16">

              {/* Colonne gauche : Le problème */}
              <div className="md:col-span-5">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-flore-orange-500 flex items-center justify-center">
                      <span className="text-white text-lg font-bold">?</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Qu'est-ce que c'est ?</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    L'insulinorésistance se produit lorsque vos cellules deviennent moins sensibles à l'action de l'insuline. Le glucose reste dans le sang au lieu d'alimenter vos cellules.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Votre pancréas sécrète alors <span className="font-semibold text-flore-orange-600">toujours plus d'insuline</span>, créant un cercle vicieux pouvant mener au diabète de type 2.
                  </p>
                </div>
              </div>

              {/* Colonne droite : Conséquences + Solution */}
              <div className="md:col-span-7 space-y-8">
                {/* Conséquences */}
                <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center">
                      <span className="text-white text-lg">⚠</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Les conséquences</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: 'Diabète de type 2', desc: 'Épuisement du pancréas' },
                      { title: 'Syndrome métabolique', desc: 'Obésité, hypertension' },
                      { title: 'Risques cardiovasculaires', desc: 'Augmentés de 37%' },
                      { title: 'Fatigue persistante', desc: 'Inflammation chronique' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white/70 rounded-xl p-3">
                        <span className="text-red-400 mt-0.5 flex-shrink-0">●</span>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                          <p className="text-gray-500 text-xs">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* La solution */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">La solution Feel Great</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Balance */}
                    <div>
                      <h4 className="font-bold text-flore-orange-600 mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-flore-orange-100 flex items-center justify-center text-xs font-bold text-flore-orange-600">1</span>
                        Balance
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">→</span>Glycémie réduite de <b>20-28%</b></li>
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">→</span>Insuline réduite de <b>13-27%</b></li>
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">→</span>Absorption des glucides ralentie</li>
                      </ul>
                    </div>
                    {/* Unimate */}
                    <div>
                      <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-600">2</span>
                        Unimate
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">→</span>Stimule le <b>métabolisme</b></li>
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">→</span>Améliore la <b>signalisation insuline</b></li>
                        <li className="flex items-start gap-2"><span className="text-green-500 flex-shrink-0">→</span>Combustion des graisses</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Validation scientifique */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start gap-6">
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">🔬</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">Validation scientifique</h4>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Plus de <span className="font-semibold">35 ans de recherche</span> clinique par Cleveland Clinic, UCLA, Mayo Clinic, Stanford School of Medicine et l'Université de Sydney.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Amélioration significative du contrôle glycémique, réduction de l'hyperinsulinémie et des lipides plasmatiques. Balance est référencé dans le Prescribers Desk Reference depuis 2002.
                </p>
              </div>
            </div>

            {/* Phrase finale */}
            <p className="text-center text-gray-400 text-base mt-10 italic">
              Une approche naturelle, scientifiquement prouvée, pour retrouver l'équilibre métabolique.
            </p>
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
        <section className="py-12 md:py-16 lg:py-24">
          <div className="container-custom">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Les produits <span className="text-gradient">Feel Great</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
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
                href="https://shop2.unicity.com/fra/fr/product/feel-great?focus=true&sku=36648"
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
        <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  Le programme <span className="text-gradient">Feel Great</span>
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6">
                  Un protocole simple et efficace basé sur le jeûne intermittent, soutenu par deux produits scientifiquement formulés.
                </p>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-flore-orange-100 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <span className="text-flore-orange-600 font-bold text-sm md:text-base">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Matin : Unimate</h3>
                      <p className="text-gray-600 text-xs md:text-base">Commencez votre journée avec énergie et concentration.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-flore-orange-100 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <span className="text-flore-orange-600 font-bold text-sm md:text-base">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Repas : Balance</h3>
                      <p className="text-gray-600 text-xs md:text-base">Prenez Balance avant vos repas pour réguler votre glycémie.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-flore-orange-100 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                      <span className="text-flore-orange-600 font-bold text-sm md:text-base">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Jeûne intermittent facilité</h3>
                      <p className="text-gray-600 text-xs md:text-base">Profitez des bénéfices du jeûne sans la sensation de faim.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/programme" className="btn-primary">
                    Découvrir le programme complet →
                  </Link>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 md:mb-6 text-center">
                  Votre journée type
                </h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="border-l-4 border-green-500 pl-3 md:pl-4">
                    <div className="font-semibold text-gray-900 text-sm md:text-base">7h00 - Réveil</div>
                    <div className="text-gray-600 text-xs md:text-base">Buvez Unimate pour démarrer</div>
                  </div>
                  <div className="border-l-4 border-gray-300 pl-3 md:pl-4">
                    <div className="font-semibold text-gray-900 text-sm md:text-base">7h30 - 12h00</div>
                    <div className="text-gray-600 text-xs md:text-base">Période de jeûne énergique</div>
                  </div>
                  <div className="border-l-4 border-flore-orange-500 pl-3 md:pl-4">
                    <div className="font-semibold text-gray-900 text-sm md:text-base">12h00 - Déjeuner</div>
                    <div className="text-gray-600 text-xs md:text-base">Balance 15 min avant le repas</div>
                  </div>
                  <div className="border-l-4 border-flore-orange-500 pl-3 md:pl-4">
                    <div className="font-semibold text-gray-900 text-sm md:text-base">19h00 - Dîner</div>
                    <div className="text-gray-600 text-xs md:text-base">Balance 15 min avant le repas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-12 md:py-16 lg:py-24">
          <div className="container-custom">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Ils ont transformé leur quotidien
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
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
                href="https://shop2.unicity.com/fra/fr/product/feel-great?focus=true&sku=36648"
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
        <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-flore-orange-50 to-flore-orange-100">
          <div className="container-custom text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Prêt à transformer votre bien-être ?
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Rejoignez des milliers de personnes qui ont déjà adopté le programme Feel Great.
            </p>
            <a
              href="https://shop2.unicity.com/fra/fr/product/feel-great?focus=true&sku=36648"
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
