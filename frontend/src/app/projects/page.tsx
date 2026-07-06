"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const filters = [
  "All",
  "Residential",
  "Commercial",
  "Custom Homes",
  "Additions",
  "Interior",
];

const projects = [
  {
    title: "Modern Residential Home",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
  },
  {
    title: "Commercial Office Build",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
  },
  {
    title: "Luxury Custom Home",
    category: "Custom Homes",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
  {
    title: "Home Addition Project",
    category: "Additions",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
  },
  {
    title: "Interior Basement Framing",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
  },
  {
    title: "Residential Roof Framing",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
  },
  {
    title: "Retail Space Framing",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
  },
  {
    title: "Custom Ceiling Structure",
    category: "Custom Homes",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Wood Framing Projects"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#092336]/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.2em] text-sm font-semibold text-[#B95927] mb-5">
              Our Projects
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Wood Framing Projects Completed Across Calgary
            </h1>

            <p className="text-lg md:text-xl leading-9 text-gray-200">
              Explore completed framing work by Home Framing LTD, including
              residential homes, commercial builds, custom homes, additions,
              renovations, and interior framing projects across Calgary and
              nearby areas.
            </p>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-[#092336] text-white shadow-lg"
                    : "bg-white text-[#092336] border border-gray-200 hover:border-[#092336]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-[2rem] overflow-hidden shadow-lg border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-[320px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition duration-500" />

                  <div className="absolute top-5 left-5">
                    <span className="bg-white/90 backdrop-blur-md text-[#092336] px-4 py-2 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#092336] mb-4">
                    {project.title}
                  </h3>

                  <p className="text-[#4A5565] leading-8">
                    Professional wood framing completed by Home Framing LTD with
                    attention to structure, layout, and clean workmanship.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#092336] rounded-[2rem] p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have a Framing Project Coming Up?
            </h2>

            <p className="text-gray-200 text-lg leading-9 max-w-4xl mx-auto mb-10">
              Planning a new home, commercial build, custom home, renovation,
              addition, or interior framing project? Home Framing LTD provides
              dependable wood framing services across Calgary and nearby areas.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#B95927] hover:bg-[#a44f22] text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                Request Free Quote
              </Link>

              <a
                href="tel:+14039250600"
                className="border border-white/20 text-white hover:bg-white hover:text-[#092336] px-8 py-4 rounded-xl font-semibold transition"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
