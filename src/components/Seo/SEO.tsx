import { Title, Meta, Link } from 'react-head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogUrl?: string;
  siteName?: string; // Added missing prop
  type?: string;     // Added missing prop
}

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogImage,
  ogUrl,
  siteName = "XTOIC STUDIO", // Default value
  type = "website",           // Default value
}: SEOProps) => {
  const fullTitle = `${title} | XTOIC STUDIO`;

  const companySchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "XTOIC STUDIO",
    "url": "https://xtoicstudio.com",
    "logo": "https://xtoicstudio.com/logo.png", 
    "sameAs": [
      "https://www.instagram.com/xtoicstudio",
      "https://www.linkedin.com/company/xtoicstudio"
    ],
    "description": description
  };

  return (
    <>
      <Title>{fullTitle}</Title>
      <Meta name="description" content={description} />
      {/* Cleanup keywords: remove newlines and extra spaces */}
      {keywords && <Meta name="keywords" content={keywords.replace(/\s+/g, ' ').trim()} />}
      {canonical && <Link rel="canonical" href={canonical} />}
      
      {/* OpenGraph (Social Media) */}
      <Meta property="og:title" content={fullTitle} />
      <Meta property="og:description" content={description} />
      <Meta property="og:site_name" content={siteName} />
      <Meta property="og:type" content={type} />
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