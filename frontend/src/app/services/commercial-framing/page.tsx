"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ServicePage2() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const processSteps = [
    {
      title: "Quote and Scope Review",
      desc: "Send your drawings, project type, and target timeline. We respond with a clear, itemized quote.",
    },
    {
      title: "Site Walk and Coordination",
      desc: "We confirm access, working hours, trade sequencing, and any landlord or building rules.",
    },
    {
      title: "Framing Execution",
      desc: "Crews start on the scheduled date and frame to drawings with daily progress updates.",
    },
    {
      title: "Inspection-Ready Handoff",
      desc: "Walls plumbed, openings squared, blocking in place, and the site cleaned for the next trade.",
    },
  ];

  const services = [
    {
      title: "Tenant Improvement Framing",
      desc: "Framing support for tenant improvements, leased spaces, business upgrades, and interior layout changes that need to match the project drawings and commercial requirements.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
    },
    {
      title: "Office & Retail Framing",
      desc: "Wood framing for office spaces, retail units, customer areas, staff rooms, storage spaces, and business interiors that need clean layout and efficient construction flow.",
      image:
        "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1200&q=80",
    },
  ];

  const pricingFactors = [
    "Size and total framing area",
    "Office, retail, tenant improvement, or renovation scope",
    "Wall framing, partition framing, and interior layout requirements",
    "Project drawings and structural details",
    "Site access and working conditions",
    "Timeline, scheduling, and trade coordination",
    "Materials, lumber needs, and special framing requirements",
  ];

  const faqs = [
    {
      q: "What commercial framing services does Home Framing LTD offer?",
      a: "Home Framing LTD provides commercial framing for office spaces, retail units, tenant improvements, commercial interiors, business renovations, build-outs, partitions, and layout changes. ",
    },
    {
      q: "What information do I need for a commercial framing quote?",
      a: "To request a quote, share your project type, location, drawings or plans if available, approximate size, expected timeline, and details about the framing work required. ",
    },
    {
      q: "How much does commercial framing cost per square foot in Calgary?",
      a: "There's no single number because commercial framing pricing depends on layout, project type, drawing complexity, site access, and any after-hours requirements.",
    },
    {
      q: "How long does commercial framing take?",
      a: "A small partition or single-office reconfiguration can often be completed in a few days. A typical tenant improvement runs 1–3 weeks for the framing stage. Larger commercial build-outs run longer and are scheduled around the overall project timeline.",
    },
    {
      q: "How soon should I contact a commercial framing contractor?",
      a: "It is best to contact a framing contractor once you have drawings, measurements, or a clear project scope. Early contact helps with scheduling, quote preparation, and project coordination. ",
    },
    {
      q: "Can you work after hours or on weekends?",
      a: "Yes. Many Calgary commercial spaces, especially occupied office buildings and active retail locations, require framing work outside normal business hours. We schedule crews to match landlord, building, and operational requirements at no compromise to quality.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[650px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
          alt="Commercial Framing"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#092336]/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Commercial Framing Services in Calgary
            </h1>

            <p className="text-lg md:text-xl leading-9 text-gray-200 mb-10">
              Home Framing LTD delivers commercial wood framing across Calgary
              for office build-outs, retail units, tenant improvements, and
              small to mid-sized commercial projects. Our crew focuses on clean,
              accurate framing that helps contractors and property owners keep
              projects on schedule and ready for the next stage of construction.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#B95927] hover:bg-[#a44f22] text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Request a Quote
              </Link>

              <Link
                href="/contact"
                className="border border-white/20 hover:bg-white hover:text-[#092336] px-8 py-4 rounded-xl font-semibold transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#092336] leading-tight mb-8">
                Wood Framing Support for Commercial Builds
              </h2>

              <div className="space-y-6">
                <p className="text-[#4A5565] text-lg leading-8">
                  Commercial framing requires more than basic construction work.
                  It needs accurate planning, clear communication, and the
                  ability to coordinate with contractors, builders, and other
                  trades on active job sites.
                </p>

                <p className="text-[#4A5565] text-lg leading-8">
                  At Home Framing LTD, we provide commercial framing services
                  for business spaces that need clean structure, proper layout,
                  and reliable execution. Whether the project involves a new
                  commercial build, office layout, retail space, tenant
                  improvement, or commercial renovation, our team works to
                  deliver framing that is strong, organized, and ready for the
                  next stage of construction.
                </p>
              </div>
            </div>

            <div className="relative h-[520px] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
                alt="Commercial Construction"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-8">
            Reliable Framing for Commercial Builds
          </h2>

          <div className="space-y-6">
            <p className="text-[#4A5565] text-lg leading-9">
              Commercial framing requires accurate planning, clear
              communication, and proper coordination with contractors, builders,
              and other trades. At Home Framing LTD, we provide framing support
              for office spaces, retail units, tenant improvements, business
              renovations, and small to mid-sized commercial builds.
            </p>

            <p className="text-[#4A5565] text-lg leading-9">
              Our team focuses on clean layout, safe site practices, and
              dependable execution so the framing stage is completed properly
              and your project is ready for the next phase of construction.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-6">
              Our Commercial Framing Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 min-h-[320px]"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#092336] text-white flex items-center justify-center text-2xl font-bold mb-8">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-[#092336] mb-5">
                  {step.title}
                </h3>

                <p className="text-[#4A5565] leading-8 text-[15px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-6">
              What Our Commercial Framing Includes
            </h2>

            <p className="text-[#4A5565] text-lg leading-8">
              We provide commercial framing solutions for different types of
              business and construction projects, from interior build-outs to
              renovation framing and structural layout work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="relative h-[320px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#092336] mb-5">
                    {service.title}
                  </h3>

                  <p className="text-[#4A5565] leading-8">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COST */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] p-10 md:p-16 shadow-xl border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-8">
              What Affects Commercial Framing Cost?
            </h2>

            <p className="text-[#4A5565] text-lg leading-9 mb-10">
              Commercial framing cost depends on the size, layout, access, and
              complexity of the project. A small office partition job will not
              have the same scope as a full retail build-out, commercial
              renovation, or new business space.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {pricingFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#B95927] mt-2"></div>

                  <p className="text-[#4A5565] leading-7">{factor}</p>
                </div>
              ))}
            </div>

            <p className="text-[#4A5565] text-lg leading-9">
              For an accurate quote, share your project type, location, drawings
              if available, expected timeline, and any important details about
              the commercial framing work needed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#092336] rounded-[2rem] p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Commercial Framing for Your Next Project?
            </h2>

            <p className="text-gray-200 text-lg leading-8 max-w-4xl mx-auto mb-10">
              Planning an office build-out, retail space, tenant improvement,
              business renovation, or commercial framing project? Home Framing
              LTD provides dependable commercial framing services built around
              your project scope, schedule, and construction needs.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#B95927] hover:bg-[#a44f22] text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Request a Quote
              </Link>

              <Link
                href="/contact"
                className="border border-white/20 hover:bg-white hover:text-[#092336] px-8 py-4 rounded-xl font-semibold transition text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND CTA */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-6">
            Need a Reliable Commercial Framing Crew?
          </h2>

          <p className="text-[#4A5565] text-lg leading-9">
            Planning an office space, retail unit, tenant improvement, or
            commercial build-out? Home Framing LTD provides dependable
            commercial framing support built around your project scope,
            schedule, and construction needs.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#092336]">
              FAQ’s
            </h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left p-6"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-[#092336] pr-4">
                    {faq.q}
                  </h3>

                  <span className="text-2xl text-[#092336]">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#4A5565] leading-8">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
