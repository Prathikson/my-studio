import { Title, Meta, Link } from 'react-head';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogUrl?: string;
  siteName?: string;
  type?: 'website' | 'article' | 'profile';
}

export const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogImage,
  ogUrl,
  siteName = "XTOIC Studio",
  type = "website"
}: SEOProps) => {
  return (
    <>
      {/* Basic SEO */}
      <Title>{title}</Title>
      <Meta name="description" content={description} />
      <Meta name="author" content="XTOIC Studio" />
      {keywords && <Meta name="keywords" content={keywords} />}
      {canonical && <Link rel="canonical" href={canonical} />}
      
      {/* OpenGraph tags */}
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:site_name" content={siteName} />
      <Meta property="og:type" content={type} />
      {ogImage && <Meta property="og:image" content={ogImage} />}
      {ogUrl && <Meta property="og:url" content={ogUrl} />}
      
      {/* Twitter Card tags */}
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
      {ogImage && <Meta name="twitter:image" content={ogImage} />}
    </>
  );
};