import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'En pleine flore! - Produits Feel Great by Unicity',
  description = 'Prenez soin de vous et de votre microbiote avec les produits Feel Great. Découvrez Unimate et Balance pour améliorer votre énergie et votre bien-être.',
  keywords = 'en pleine flore, feel great, unicity, unimate, balance, microbiote, bien-être, santé, yerba maté, jeûne intermittent, glycémie, énergie, concentration, insulinorésistance, programme feel great',
  image = '/images/Feel-great.jpg',
  url = 'https://en-pleine-flore.vercel.app',
  type = 'website',
}) => {
  const fullTitle = title.includes('En pleine flore') ? title : `${title} | En pleine flore!`;
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;

  return (
    <Head>
      {/* Balises meta de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="En pleine flore" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.png" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content="En pleine flore!" />
      <meta property="og:locale" content="fr_FR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Métadonnées supplémentaires pour le SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="content-language" content="fr" />

      {/* Métadonnées pour mobile */}
      <meta name="theme-color" content="#f97316" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="En pleine flore!" />
    </Head>
  );
};

export default SEO;
