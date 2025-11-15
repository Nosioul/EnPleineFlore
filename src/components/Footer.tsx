import React from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <Logo width={160} height={48} />
            <p className="mt-4 text-gray-600">
              Prenez soin de vous, prenez soin de votre microbiote. Découvrez les produits Feel Great by Unicity.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-flore-orange-500">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/produit-unimate" className="text-gray-600 hover:text-flore-orange-500">
                  Unimate
                </Link>
              </li>
              <li>
                <Link href="/produit-balance" className="text-gray-600 hover:text-flore-orange-500">
                  Balance
                </Link>
              </li>
              <li>
                <Link href="/programme" className="text-gray-600 hover:text-flore-orange-500">
                  Programme Feel Great
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Commander</h3>
            <a 
              href="https://ufeelgreat.com/c/Mijo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Acheter via partenaire →
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © 2024 En pleine flore! - Distributeur indépendant Unicity. Tous droits réservés.
          </p>
          <p className="text-center text-gray-400 text-xs mt-2">
            Les produits Feel Great ne sont pas destinés à diagnostiquer, traiter, guérir ou prévenir une maladie.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
