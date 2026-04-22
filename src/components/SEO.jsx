import { useEffect } from 'react';

/**
 * SEO Component to manage page titles and meta descriptions
 * @param {string} title - The page title
 * @param {string} description - The meta description
 */
const SEO = ({ title, description }) => {
  useEffect(() => {
    // Update Title
    const baseTitle = "Stuccord Agency";
    const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;
    document.title = fullTitle;

    // Update Meta Description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = "description";
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
    }
  }, [title, description]);

  return null;
};

export default SEO;
