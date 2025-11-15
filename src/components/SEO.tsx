import React from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'En pleine flore! - Produits Feel Great by Unicity',
  description = 'Prenez soin de vous et de votre microbiote avec les produits Feel Great. Découvrez Unimate et Balance pour améliorer votre énergie et votre bien-être.',
}) => {
  const fullTitle = title.includes('En pleine flore') ? title : `${title} | En pleine flore!`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
