import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Home Framing LTD',
  description: 'Contact Home Framing LTD for residential, commercial, custom home or structural framing in Calgary. Share your project and request a quote.',
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.homeframingltd.com/contact#webpage",
      "url": "https://www.homeframingltd.com/contact",
      "name": "Contact Home Framing LTD | Calgary Framing Contractor",
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
          "name": "Contact",
          "item": "https://www.homeframingltd.com/contact"
        }
      ]
    }
  ]
} as const;

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Content */}
          <div>
            {/* Heading */}
            <div className="max-w-3xl mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#092336] leading-tight">
                Contact Home Framing LTD
              </h1>

              <p className="text-lg leading-8 text-[#4A5565]">
                Planning a new build, renovation, custom home, commercial
                space, or interior framing project? Share your project details
                with our team and we’ll help you take the next step with clear
                communication and dependable framing support.
              </p>
            </div>

            {/* Response Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-[#092336]">
                We Respond Quickly
              </h2>

              <p className="text-[#4A5565] text-lg leading-7">
                Our team reviews each request carefully and follows up with
                helpful information based on your project type, timeline, and
                framing needs.
              </p>
            </div>

            {/* Bullet Points */}
            <div className="space-y-8">
              
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 mt-2 rounded-full bg-[#092336]" />
                
                <div>
                  <h3 className="text-xl font-semibold text-[#092336] mb-2">
                    Free Consultation
                  </h3>

                  <p className="text-[#4A5565] leading-7">
                    Discuss your project before getting started.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 mt-2 rounded-full bg-[#092336]" />
                
                <div>
                  <h3 className="text-xl font-semibold text-[#092336] mb-2">
                    Clear Estimates
                  </h3>

                  <p className="text-[#4A5565] leading-7">
                    Get information based on your scope of work.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-3 h-3 mt-2 rounded-full bg-[#092336]" />
                
                <div>
                  <h3 className="text-xl font-semibold text-[#092336] mb-2">
                    Framing Guidance
                  </h3>

                  <p className="text-[#4A5565] leading-7">
                    Receive practical next-step advice for your build.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-white max-w-lg rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
            
            <h2 className="text-3xl font-bold text-[#092336] mb-2">
              Get In Touch
            </h2>

            <p className="text-[#4A5565] mb-8 leading-7">
              Fill out the form below and our team will contact you shortly.
            </p>

            <form className="space-y-6">
              
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-[#092336] mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#092336]/20 focus:border-[#092336] transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#092336] mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#092336]/20 focus:border-[#092336] transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-[#092336] mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#092336]/20 focus:border-[#092336] transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#092336] mb-2">
                  Project Details
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#092336]/20 focus:border-[#092336] transition resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#A04D20]  text-white font-semibold py-4 rounded-xl transition duration-300"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
}