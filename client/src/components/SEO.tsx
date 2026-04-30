import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
  noIndex?: boolean;
}

export function SEO({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
  canonical,
  noIndex = false
}: SEOProps) {
  useEffect(() => {
    // Set page title
    if (title) {
      document.title = `${title} | Safeway Trips`;
    } else {
      document.title = 'Safeway Trips - Curated Travel Experiences in Kenya';
    }

    // Update or create meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Escape to Kenya\'s hidden gems with curated travel experiences. From pristine beaches to wildlife safaris, discover authentic adventures designed for discerning travelers.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description || 'Escape to Kenya\'s hidden gems with curated travel experiences. From pristine beaches to wildlife safaris, discover authentic adventures designed for discerning travelers.';
      document.head.appendChild(meta);
    }

    // Update or create meta keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    // Update or create OG title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title || 'Safeway Trips - Curated Travel Experiences in Kenya');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = title || 'Safeway Trips - Curated Travel Experiences in Kenya';
      document.head.appendChild(meta);
    }

    // Update or create OG description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description || 'Escape to Kenya\'s hidden gems with curated travel experiences. From pristine beaches to wildlife safaris, discover authentic adventures designed for discerning travelers.');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = description || 'Escape to Kenya\'s hidden gems with curated travel experiences. From pristine beaches to wildlife safaris, discover authentic adventures designed for discerning travelers.';
      document.head.appendChild(meta);
    }

    // Update or create OG image
    if (ogImage) {
      const ogImg = document.querySelector('meta[property="og:image"]');
      if (ogImg) {
        ogImg.setAttribute('content', ogImage);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:image');
        meta.content = ogImage;
        document.head.appendChild(meta);
      }
    }

    // Update or create OG URL
    if (ogUrl) {
      const ogUrlMeta = document.querySelector('meta[property="og:url"]');
      if (ogUrlMeta) {
        ogUrlMeta.setAttribute('content', ogUrl);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', 'og:url');
        meta.content = ogUrl;
        document.head.appendChild(meta);
      }
    }

    // Update or create canonical URL
    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      } else {
        const link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', canonical);
        document.head.appendChild(link);
      }
    }

    // Update or create robots meta
    if (noIndex) {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) {
        robotsMeta.setAttribute('content', 'noindex, nofollow');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = 'noindex, nofollow';
        document.head.appendChild(meta);
      }
    }

    // Set default meta tags
    const defaultMetas = [
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Safeway Trips' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@safewaytrips' },
      { name: 'author', content: 'Safeway Trips' }
    ];

    defaultMetas.forEach(metaData => {
      const existing = document.querySelector(
        metaData.property 
          ? `meta[property="${metaData.property}"]`
          : `meta[name="${metaData.name}"]`
      );
      
      if (!existing) {
        const meta = document.createElement('meta');
        if (metaData.property) {
          meta.setAttribute('property', metaData.property);
        } else {
          meta.name = metaData.name;
        }
        meta.content = metaData.content;
        document.head.appendChild(meta);
      }
    });

    // Cleanup function
    return () => {
      // Reset to default when component unmounts
      document.title = 'Safeway Trips - Curated Travel Experiences in Kenya';
    };
  }, [title, description, keywords, ogImage, ogUrl, canonical, noIndex]);

  return null; // This component doesn't render anything
}

// Default SEO values for different pages
export const seoConfig = {
  home: {
    title: 'Escape to Kenya\'s Hidden Gems',
    description: 'Escape to Kenya\'s hidden gems with curated travel experiences. From pristine beaches to wildlife safaris, discover authentic adventures designed for discerning travelers.',
    keywords: 'Kenya travel, safari, Diani beach, Maasai Mara, travel experiences, curated trips, luxury travel, adventure travel',
    ogImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663443948049/CxdDMGsa3Pr7Yyr2abi8Vv/homepage-hero-DRefRzrceisymxGcgWLeip.webp'
  },
  destinations: {
    title: 'Destinations',
    description: 'Explore our curated destinations across Kenya. From the pristine beaches of Diani to the wildlife of Maasai Mara, each experience is carefully crafted.',
    keywords: 'Kenya destinations, Diani beach, Maasai Mara, Mount Kenya, Zanzibar, travel destinations',
  },
  contact: {
    title: 'Plan Your Adventure',
    description: 'Ready to plan your Kenyan adventure? Contact Safeway Trips today and let us craft your perfect itinerary.',
    keywords: 'contact Safeway Trips, plan Kenya trip, travel booking, Kenya travel consultation',
  },
  about: {
    title: 'About Safeway Trips',
    description: 'Learn about Safeway Trips and our mission to create authentic, curated travel experiences across Kenya.',
    keywords: 'about Safeway Trips, Kenya travel company, travel mission, curated experiences',
  },
  caseStudy: {
    title: 'Case Study - How I Designed Safeway Trips',
    description: 'A deep dive into the strategy, UX decisions, and marketing funnel behind Safeway Trips - a conversion-optimized travel brand.',
    keywords: 'web design case study, UX design, conversion optimization, travel website design, marketing funnel',
  }
};
