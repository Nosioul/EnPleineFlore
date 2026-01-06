import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "En pleine flore!",
    "url": "https://en-pleine-flore.vercel.app",
    "logo": "https://en-pleine-flore.vercel.app/favicon.png",
    "description": "Prenez soin de vous et de votre microbiote avec les produits Feel Great by Unicity. Découvrez Unimate et Balance.",
    "sameAs": [
      "https://www.tiktok.com/@enpleineflore"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "En pleine flore!",
    "url": "https://en-pleine-flore.vercel.app",
    "description": "Site officiel En pleine flore - Produits Feel Great by Unicity",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://en-pleine-flore.vercel.app/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Programme Feel Great",
    "description": "Programme complet Feel Great avec Unimate et Balance pour optimiser votre bien-être et votre microbiote",
    "brand": {
      "@type": "Brand",
      "name": "Unicity"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://shop2.unicity.com/fra/fr/product/feel-great?focus=true&sku=36648",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <Html lang="fr">
      <Head>
        <meta name="google-site-verification" content="QPVReAiAyLEOpVGq4_Z8HhsiEIqn6KW43PbMLuOjHu8" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Données structurées JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />

        {/* Microsoft Clarity */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "u6ghq07jr8");`,
          }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
