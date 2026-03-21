import { useEffect } from 'react';

interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  published_date?: string;
  modified_date?: string;
}

export const useSEO = (metadata: SEOMetadata) => {
  useEffect(() => {
    // Update title
    document.title = metadata.title;
    
    // Update or create meta tags
    updateMetaTag('name', 'title', metadata.title);
    updateMetaTag('name', 'description', metadata.description);
    
    if (metadata.keywords) {
      updateMetaTag('name', 'keywords', metadata.keywords);
    }
    
    if (metadata.author) {
      updateMetaTag('name', 'author', metadata.author);
    }
    
    // Open Graph tags
    updateMetaTag('property', 'og:title', metadata.title);
    updateMetaTag('property', 'og:description', metadata.description);
    updateMetaTag('property', 'og:type', metadata.type || 'website');
    
    if (metadata.image) {
      updateMetaTag('property', 'og:image', metadata.image);
    }
    
    if (metadata.url) {
      updateMetaTag('property', 'og:url', metadata.url);
    }
    
    // Twitter tags
    updateMetaTag('name', 'twitter:title', metadata.title);
    updateMetaTag('name', 'twitter:description', metadata.description);
    
    if (metadata.image) {
      updateMetaTag('name', 'twitter:image', metadata.image);
    }
    
    // Canonical URL
    if (metadata.url) {
      updateCanonicalTag(metadata.url);
    }
    
    // Article specific tags
    if (metadata.type === 'article') {
      if (metadata.published_date) {
        updateMetaTag('property', 'article:published_time', metadata.published_date);
      }
      if (metadata.modified_date) {
        updateMetaTag('property', 'article:modified_time', metadata.modified_date);
      }
    }
  }, [metadata]);
};

const updateMetaTag = (
  attribute: 'name' | 'property',
  attributeValue: string,
  content: string
) => {
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
};

const updateCanonicalTag = (url: string) => {
  let link = document.querySelector('link[rel="canonical"]');
  
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  
  link.setAttribute('href', url);
};

export default useSEO;
