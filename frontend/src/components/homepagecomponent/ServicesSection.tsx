"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // Added Link import

export default function ServicesSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const leftCard: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightCard: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading & Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#092336] mb-3 sm:mb-4 md:mb-6 px-2 leading-tight">
            Wood Framing Services Built for Strong, Reliable Structures
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            Strong structures start with accurate framing.{" "}
            <Link href="/services" className="text-[#B95927] hover:underline font-medium">
              view all wood framing services
            </Link>{" "}
            We provide residential framing, custom home framing, commercial framing, and
            structural modification services with careful planning, quality
            materials, and dependable workmanship. Every project is built with
            attention to strength, precision, and long-term durability.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {/* Service Card 1 - Left to Right */}
          <motion.div
            variants={leftCard}
            className="bg-[#FBFBFB] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col"
          >
            <div className="relative h-48 sm:h-56 md:h-64">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
                alt="Residential Framing Services"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#092336] mb-2 sm:mb-3 md:mb-4">
                Residential Framing
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
                Reliable residential framing for new homes, additions, garages,
                basements, and home construction projects. We focus on accurate
                layouts, strong framing details, and clean workmanship to
                support safe, durable, and long-lasting home structures.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link href="/services/residential-framing" className="text-[#B95927] hover:underline font-semibold text-sm md:text-base inline-flex items-center">
                  Residential Framing Services in Calgary <span className="ml-1 text-lg">→</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Service Card 2 - Right to Left */}
          <motion.div
            variants={rightCard}
            className="bg-[#FBFBFB] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col"
          >
            <div className="relative h-48 sm:h-56 md:h-64">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                alt="Commercial Framing Services"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#092336] mb-2 sm:mb-3 md:mb-4">
                Commercial Framing
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
                Professional commercial framing for business spaces, commercial
                buildings, and construction projects that require reliable
                coordination and strong execution. Our team focuses on
                structural accuracy, efficient workmanship, and long-term
                performance.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link href="/services/commercial-framing" className="text-[#B95927] hover:underline font-semibold text-sm md:text-base inline-flex items-center">
                  Commercial Framing Services <span className="ml-1 text-lg">→</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Service Card 3 - Left to Right */}
          <motion.div
            variants={leftCard}
            className="bg-[#FBFBFB] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col"
          >
            <div className="relative h-48 sm:h-56 md:h-64">
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Custom Home Framing Services"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#092336] mb-2 sm:mb-3 md:mb-4">
                Custom Home Framing
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
                Custom home framing requires careful planning, precision, and
                attention to unique architectural details. We work with project
                plans and structural requirements to help bring custom home
                designs to life with strength, accuracy, and dependable
                craftsmanship.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link href="/services/custom-home-framing" className="text-[#B95927] hover:underline font-semibold text-sm md:text-base inline-flex items-center">
                  Custom Home Framing <span className="ml-1 text-lg">→</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Service Card 4 - Right to Left */}
          <motion.div
            variants={rightCard}
            className="bg-[#FBFBFB] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 flex flex-col"
          >
            <div className="relative h-48 sm:h-56 md:h-64">
              <Image
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80"
                alt="Structural Modification Services"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#092336] mb-2 sm:mb-3 md:mb-4">
                Structural Modification
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
                Structural modification services for renovations, layout
                changes, wall openings, reinforcements, and property upgrades.
                We handle framing changes with careful planning, safety, and
                attention to structural strength and long-term durability.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link href="/services/structural-modifications" className="text-[#B95927] hover:underline font-semibold text-sm md:text-base inline-flex items-center">
                  Structural Modification Services <span className="ml-1 text-lg">→</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}