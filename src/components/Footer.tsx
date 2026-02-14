import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">

          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <Logo width={160} height={48} />
            <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600">
              Prenez soin de vous, prenez soin de votre microbiote. Découvrez les produits Feel Great by Unicity.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4 mt-6">
              {/* TikTok */}
              <a
                href="https://en-pleine-flore.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-flore-orange-500 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/enpleineflore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-flore-orange-500 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Navigation</h3>
            <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base">
              <li>
                <Link href="/" className="text-gray-600 hover:text-flore-orange-500 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/produit-unimate" className="text-gray-600 hover:text-flore-orange-500 transition-colors">
                  Unimate
                </Link>
              </li>
              <li>
                <Link href="/produit-balance" className="text-gray-600 hover:text-flore-orange-500 transition-colors">
                  Balance
                </Link>
              </li>
              <li>
                <Link href="/programme" className="text-gray-600 hover:text-flore-orange-500 transition-colors">
                  Programme Feel Great
                </Link>
              </li>
              <li>
                <Link href="/debuter" className="text-gray-600 hover:text-flore-orange-500 transition-colors">
                  Débuter
                </Link>
              </li>
              <li>
                <Link href="/temoignages" className="text-gray-600 hover:text-flore-orange-500 transition-colors">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link href="/pourquoi" className="text-gray-600 hover:text-flore-orange-500 transition-colors">
                  Pourquoi nous
                </Link>
              </li>
            </ul>
          </div>

          {/* Zone Commander */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 md:mb-4 text-sm md:text-base">Commander</h3>

            {/* Bouton Boutique complète */}
            <a
              href="https://shop2.unicity.com/c/125413749"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 md:px-4 py-2 bg-flore-orange-500 text-white text-xs md:text-sm font-semibold rounded-full hover:bg-flore-orange-600 transition-colors mb-2 md:mb-3"
            >
              Boutique complète →
            </a>

            <br />

            {/* Bouton Feel Great (renommé et taille ajustée) */}
            <a
              href="https://shop2.unicity.com/fra/fr/product/feel-great?focus=true&sku=36648"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-3 md:px-4 py-2 bg-flore-orange-500 text-white text-xs md:text-sm font-semibold rounded-full hover:bg-flore-orange-600 transition-colors"
            >
              Produits Feel Great →
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-xs md:text-sm px-4">
            © 2025 En pleine flore! - Distributeur indépendant Unicity. Tous droits réservés. Site créé par Nosioul
          </p>
          <p className="text-center text-gray-400 text-xs mt-2 px-4">
            Les produits Feel Great ne sont pas destinés à diagnostiquer, traiter, guérir ou prévenir une maladie.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
