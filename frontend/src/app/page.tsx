import HeroSection from "@/components/homepagecomponent/HeroSection";
import ServicesSection from "@/components/homepagecomponent/ServicesSection";
import WhyChooseUsSection from "@/components/homepagecomponent/WhyChooseUsSection";
import ProcessSection from "@/components/homepagecomponent/ProcessSection";
import CTASection from "@/components/homepagecomponent/CTASection";
import HomeAboutSection from "@/components/homepagecomponent/HomeAboutSection";
import StatsSection from "@/components/homepagecomponent/StatsSection";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "@id": "https://www.homeframingltd.com/#business",
      "name": "Home Framing LTD",
      "url": "https://www.homeframingltd.com/",
      "telephone": "+1-403-925-0600",
      "email": "HomeframingLTD@gmail.com",
      "description": "Home Framing LTD is a professional wood framing contractor providing residential framing, commercial framing, custom home framing, and structural modification services in Calgary.",
      "sameAs": [
        "https://www.instagram.com/home_framing_ltd/"
      ],
      "areaServed": {
        "@type": "City",
        "name": "Calgary",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Alberta",
          "containedInPlace": {
            "@type": "Country",
            "name": "Canada"
          }
        }
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "07:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "08:00",
          "closes": "14:00"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-403-925-0600",
        "email": "HomeframingLTD@gmail.com",
        "contactType": "customer service",
        "areaServed": {
          "@type": "City",
          "name": "Calgary",
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": "Alberta",
            "containedInPlace": {
              "@type": "Country",
              "name": "Canada"
            }
          }
        },
        "availableLanguage": "English"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Wood Framing Services in Calgary",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://www.homeframingltd.com/services/residential-framing#service",
              "name": "Residential Framing Services in Calgary",
              "url": "https://www.homeframingltd.com/services/residential-framing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://www.homeframingltd.com/services/commercial-framing#service",
              "name": "Commercial Framing Services in Calgary",
              "url": "https://www.homeframingltd.com/services/commercial-framing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://www.homeframingltd.com/services/custom-home-framing#service",
              "name": "Custom Home Framing Services in Calgary",
              "url": "https://www.homeframingltd.com/services/custom-home-framing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://www.homeframingltd.com/services/structural-modifications#service",
              "name": "Structural Modification Services in Calgary",
              "url": "https://www.homeframingltd.com/services/structural-modifications"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.homeframingltd.com/#website",
      "url": "https://www.homeframingltd.com/",
      "name": "Home Framing LTD",
      "publisher": {
        "@id": "https://www.homeframingltd.com/#business"
      },
      "inLanguage": "en-CA"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.homeframingltd.com/#webpage",
      "url": "https://www.homeframingltd.com/",
      "name": "Professional Wood Framing Contractors in Calgary | Home Framing LTD",
      "isPartOf": {
        "@id": "https://www.homeframingltd.com/#website"
      },
      "about": {
        "@id": "https://www.homeframingltd.com/#business"
      },
      "mainEntity": {
        "@id": "https://www.homeframingltd.com/#business"
      },
      "inLanguage": "en-CA"
    }
  ]
} as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFBFB] ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HeroSection />
      <HomeAboutSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />

      <CTASection />
    </main>
  );
}
