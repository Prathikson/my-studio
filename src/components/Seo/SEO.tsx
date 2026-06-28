import { Title, Meta, Link } from 'react-head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogUrl?: string;
}

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogImage,
  ogUrl,
}: SEOProps) => {
  const fullTitle = `${title} | Xtoic Studio`;

  // THIS IS THE KEY FOR COMPANY RECOGNITION
  const companySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Xtoic Studio",
    "url": "https://xtoicstudio.com",
    "logo": "https://xtoicstudio.com/logo.png", // Replace with your actual logo URL
    "sameAs": [
      "https://www.instagram.com/xtoicstudio",
      "https://www.linkedin.com/company/xtoicstudio",
      "https://twitter.com/xtoicstudio"
    ],
    "description": "Xtoic Studio is a creative studio specializing in brand, design, and digital building."
  };

  return (
    <>
      <Title>{fullTitle}</Title>
      <Meta name="description" content={description} />
      {keywords && <Meta name="keywords" content={keywords} />}
      {canonical && <Link rel="canonical" href={canonical} />}
      
      {/* OpenGraph (Social Media) */}
      <Meta property="og:title" content={fullTitle} />
      <Meta property="og:description" content={description} />
      <Meta property="og:site_name" content="Xtoic Studio" />
      <Meta property="og:type" content="website" />
      {ogImage && <Meta property="og:image" content={ogImage} />}
      <Meta property="og:url" content={ogUrl || "https://xtoicstudio.com"} />
      
      {/* Twitter Card */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={fullTitle} />
      <Meta name="twitter:description" content={description} />
      {ogImage && <Meta name="twitter:image" content={ogImage} />}

      {/* JSON-LD Schema Script */}
      <script type="application/ld+json">
        {JSON.stringify(companySchema)}
      </script>
    </>
  );
};