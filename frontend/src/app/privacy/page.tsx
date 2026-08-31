import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Home Framing LTD',
  description: 'Read the Home Framing LTD privacy policy to learn how information submitted through our website is collected, used and protected.',
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.homeframingltd.com/privacy#webpage",
      "url": "https://www.homeframingltd.com/privacy",
      "name": "Privacy Policy | Home Framing LTD",
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
          "name": "Privacy Policy",
          "item": "https://www.homeframingltd.com/privacy"
        }
      ]
    }
  ]
} as const;

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  );
}