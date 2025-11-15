import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page introuvable | En Pleine Flore</title>
        <meta
          name="description"
          content="Oups, la page que vous cherchez n'existe pas. Revenez au programme ou découvrez comment bien débuter avec En Pleine Flore."
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-gradient-to-b from-green-50 to-white">
        <Header />

        <main className="flex-1 flex items-center">
          <div className="max-w-xl mx-auto px-6 text-center">
            <p className="text-sm font-semibold text-flore-orange-500 mb-2">
              Erreur 404
            </p>

            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              Oups… cette page n’existe pas.
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Il semble que vous soyez tombé sur une mauvaise adresse.
              Pas de panique, vous pouvez revenir au programme ou voir comment bien débuter 🍃🔥
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white bg-flore-orange-500 hover:bg-flore-orange-600 transition-colors"
              >
                ← Retour à l’accueil
              </Link>

              <Link
                href="/debuter"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-flore-orange-500 border border-flore-orange-500 hover:bg-flore-orange-50 transition-colors"
              >
                Débuter avec le programme
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Custom404;
