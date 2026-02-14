import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo width={180} height={50} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/produit-unimate" className="text-gray-700 hover:text-flore-orange-500 font-medium transition-colors">
              Unimate
            </Link>
            <Link href="/produit-balance" className="text-gray-700 hover:text-flore-orange-500 font-medium transition-colors">
              Balance
            </Link>
            <Link href="/programme" className="text-gray-700 hover:text-flore-orange-500 font-medium transition-colors">
              Le Programme
            </Link>

            {/* 🆕 Débuter */}
            <Link href="/debuter" className="text-gray-700 hover:text-flore-orange-500 font-medium transition-colors">
              Débuter
            </Link>

            <Link href="/temoignages" className="text-gray-700 hover:text-flore-orange-500 font-medium transition-colors">
              Témoignages
            </Link>

            <Link href="/pourquoi" className="text-gray-700 hover:text-flore-orange-500 font-medium transition-colors">
              Pourquoi nous?
            </Link>

            <Link href="/rendez-vous" className="text-gray-700 hover:text-flore-orange-500 font-medium transition-colors">
              Rendez-vous
            </Link>

            <a
              href="https://shop2.unicity.com/fra/fr/product/feel-great?focus=true&sku=36648"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Acheter →
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link href="/produit-unimate" className="text-gray-700 hover:text-flore-orange-500 font-medium py-2">
                Unimate
              </Link>
              <Link href="/produit-balance" className="text-gray-700 hover:text-flore-orange-500 font-medium py-2">
                Balance
              </Link>
              <Link href="/programme" className="text-gray-700 hover:text-flore-orange-500 font-medium py-2">
                Le Programme
              </Link>

              {/* 🆕 Débuter (mobile) */}
              <Link href="/debuter" className="text-gray-700 hover:text-flore-orange-500 font-medium py-2">
                Débuter
              </Link>

              <Link href="/temoignages" className="text-gray-700 hover:text-flore-orange-500 font-medium py-2">
                Témoignages
              </Link>
              <Link href="/pourquoi" className="text-gray-700 hover:text-flore-orange-500 font-medium py-2">
                Pourquoi nous?
              </Link>
              <Link href="/rendez-vous" className="text-gray-700 hover:text-flore-orange-500 font-medium py-2">
                Rendez-vous
              </Link>
              <a
                href="https://shop2.unicity.com/fra/fr/product/feel-great?focus=true&sku=36648"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center mt-4"
              >
                Acheter →
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
