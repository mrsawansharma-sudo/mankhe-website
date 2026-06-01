import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

export default function SEO({ 
  title = "MANKHE | The Chhattisgarh Regeneration Project", 
  description = "Rewiring the carbon cycle from the soil up. Carbon removal through biochar and soil restoration in Chhattisgarh.",
  canonical = "https://mankhe.com",
  ogType = "website",
  ogImage = "https://mankhe.com/og-image.jpg"
}: SEOProps) {
  const fullTitle = title.includes("MANKHE") ? title : `${title} | MANKHE`;

  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
