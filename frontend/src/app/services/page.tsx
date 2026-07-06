"use client";
import Link from "next/link";

import { useState } from "react";
export default function Services() {
  const services = [
    {
      title: "Residential Framing",
      description:
        "We provide residential wood framing for new homes, infill builds, basement layouts, additions, and single-family construction projects. Our team focuses on accurate wall, floor, and roof framing so the structure is solid, level, and ready for the next stage of construction.",
    },
    {
      title: "Commercial Framing",
      description:
        "Our commercial framing services support offices, retail spaces, tenant improvements, and small to mid-sized business construction projects. We work with builders and contractors to deliver clean, organized framing that keeps the project moving safely and efficiently.",
    },
    {
      title: "Custom Homes",
      description:
        "Custom home framing requires more detail than a standard build. We frame unique layouts, open-concept spaces, custom rooflines, large openings, and architect-designed plans with careful attention to measurements, structure, and design requirements.",
    },
    {
      title: "Interior Framing",
      description:
        "Our interior framing services help shape the layout and function of homes and commercial spaces. We frame interior walls, partitions, bulkheads, room divisions, and basement layouts with clean workmanship and accurate placement.",
    },
    {
      title: "Additions & Renovations",
      description:
        "We provide framing support for home additions, remodels, basement developments, layout changes, and structural updates. Our team works carefully around existing structures to connect new framing properly and help the renovation move forward smoothly.",
    },
  ];

  const faqs = [
    {
      question: "What framing services does Home Framing LTD offer?",
      answer:
        "Home Framing LTD provides residential framing, commercial framing, custom home framing, interior framing, and framing for additions and renovations.",
    },
    {
      question: "Do you provide wood framing services in Calgary?",
      answer:
        "Yes. Home Framing LTD provides professional wood framing services in Calgary and nearby areas trusted by homeowners, builders, contractors, and property owners.",
    },
    {
      question: "Do you work with builders and general contractors?",
      answer:
        "Yes. Home Framing LTD works with homeowners, builders, general contractors, and property owners who need reliable framing support for residential, commercial, renovation, and custom construction projects.",
    },
    {
      question: "What makes Home Framing LTD a reliable framing contractor?",
      answer:
        "Home Framing LTD focuses on accurate measurements, clean workmanship, safe site practices, and dependable communication so each framing project can move forward with confidence.",
    },
    {
      question: "How can I request a framing quote?",
      answer:
        "You can request a free quote by contacting Home Framing LTD with your project type, location, drawings if available, and expected timeline.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Hero Section */}
        <div className="max-w-5xl mb-24">
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#092336] leading-tight mb-8">
            Calgary Wood Framing Contractors for Homes & Commercial Builds
          </h1>

          <p className="text-lg md:text-xl leading-9 text-[#4A5565]">
            Home Framing LTD supports residential, commercial, renovation,
            custom home, and interior construction with accurate wood framing
            work across Calgary and nearby areas.
          </p>

        </div>

        {/* Intro Section */}
        <div className="mb-24">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-8">
            Framing Solutions for Every Stage of Construction
          </h2>

          <div className="space-y-6 max-w-5xl">
            
            <p className="text-[#4A5565] text-lg leading-8">
              From new builds and custom layouts to renovations, additions, and
              larger developments, our team creates the structural framework
              your project needs to move forward smoothly.
            </p>

            <p className="text-[#4A5565] text-lg leading-8">
              We focus on accurate framing, clean workmanship, and reliable
              coordination so your project can move smoothly into the next stage
              of construction.
            </p>

          </div>

        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-28">
          
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 lg:p-9 shadow-md border border-gray-100 min-h-[380px] flex flex-col hover:shadow-xl transition duration-300"
            >
              
              <div className="w-14 h-14 rounded-2xl bg-[#092336] mb-8 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-white"></div>
              </div>

              <h3 className="text-2xl font-bold text-[#092336] mb-5">
                {service.title}
              </h3>

              <p className="text-[#4A5565] leading-8 text-[17px]">
                {service.description}
              </p>

            </div>
          ))}

        </div>

        {/* Expectations Section */}
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-lg border border-gray-100 mb-28">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-8">
            What You Can Expect From Our Framing Services
          </h2>

          <p className="text-[#4A5565] text-lg leading-9 max-w-5xl">
            Every framing project needs proper planning, accurate measurements,
            safe execution, and clear coordination before the next stage of
            construction begins. At Home Framing LTD, we focus on clean
            workmanship, dependable communication, and carefully built wood
            framing that supports the strength, layout, and long-term quality of
            your project.
          </p>

        </div>

        {/* CTA Section */}
        <div className="bg-[#092336] rounded-3xl p-12 md:p-16 text-center mb-28">
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Reliable Wood Framing in Calgary?
          </h2>

          <p className="text-gray-200 text-lg leading-8 max-w-4xl mx-auto mb-10">
            Planning a new home, commercial build, renovation, addition, or
            interior framing project? Home Framing LTD provides dependable wood
            framing services in Calgary, built around your project needs and
            timeline.
          </p>

          <Link href="/contact" className="inline-flex items-center justify-center bg-[#B95927] hover:bg-[#a44f22] text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition duration-300 w-full sm:w-auto max-w-[260px] mx-auto break-words text-center">
            Request Free Quote
          </Link>

        </div>

        {/* FAQ Section */}
      {/* FAQ Section */}
<div>
  
  <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-14 text-center">
    FAQ’s
  </h2>

  <div className="space-y-5 max-w-5xl mx-auto">
    
    {faqs.map((faq, index) => {
      const [openIndex, setOpenIndex] = useState<number | null>(0);

      return (
        <div
          key={index}
          className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
        >
          
          <button
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="w-full flex items-center justify-between text-left p-6"
          >
            <h3 className="text-lg md:text-xl font-semibold text-[#092336] pr-4">
              {faq.question}
            </h3>

            <span className="text-2xl text-[#092336]">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          {openIndex === index && (
            <div className="px-6 pb-6">
              <p className="text-[#4A5565] leading-8">
                {faq.answer}
              </p>
            </div>
          )}

        </div>
      );
    })}

  </div>

</div>

      </div>
    </div>
  );
}