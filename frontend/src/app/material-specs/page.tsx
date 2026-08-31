import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Framing Material Specifications | Home Framing LTD',
  description: 'Review framing material specifications and information used by Home Framing LTD for residential and commercial wood framing projects.',
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.homeframingltd.com/material-specs#webpage",
      "url": "https://www.homeframingltd.com/material-specs",
      "name": "Framing Material Specifications | Home Framing LTD",
      "isPartOf": {
        "@id": "https://www.homeframingltd.com/#website"
      },
      "about": {
        "@id": "https://www.homeframingltd.com/#business"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.homeframingltd.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Material Specifications",
          "item": "https://www.homeframingltd.com/material-specs"
        }
      ]
    }
  ]
} as const;

export default function MaterialSpecs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Material Specs</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}