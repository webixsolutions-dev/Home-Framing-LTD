"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Michael Carter",
    role: "Custom Home Owner",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    review:
      "Home Framing LTD delivered outstanding framing work for our custom home. Their team stayed organized, communicated clearly, and completed the project exactly on schedule.",
  },
  {
    name: "Sarah Mitchell",
    role: "Property Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    review:
      "Very professional and reliable crew. The framing quality was excellent, and the entire process was smooth from planning to completion.",
  },
  {
    name: "Daniel Thompson",
    role: "General Contractor",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80",
    review:
      "We’ve worked with many framing contractors, and Home Framing LTD stands out for their clean workmanship, strong communication, and dependable timelines.",
  },
  {
    name: "Emily Roberts",
    role: "Home Renovation Client",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    review:
      "Their team handled our renovation framing carefully and professionally. Everything was completed with attention to detail and excellent coordination.",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gray-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="uppercase tracking-[0.2em] text-sm font-semibold text-[#B95927] mb-4">
            Testimonials
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#092336] mb-6 leading-tight">
            Trusted By Homeowners & Builders
          </h2>

          <p className="text-[#4A5565] text-lg leading-8">
            We focus on quality workmanship, dependable scheduling, and
            professional framing support for every project.
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-14 text-center"
          >
            {/* Quote */}
            <div className="text-6xl text-[#B95927] leading-none mb-6">“</div>

            {/* Review */}
            <p className="text-[#4A5565] text-lg md:text-xl leading-9 max-w-4xl mx-auto mb-10">
              {testimonials[active].review}
            </p>

            {/* Client */}
            <div className="flex flex-col items-center">
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-[#092336]/10">
                <Image
                  src={testimonials[active].image}
                  alt={testimonials[active].name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-[#092336]">
                {testimonials[active].name}
              </h3>

              <p className="text-[#4A5565] mt-1">{testimonials[active].role}</p>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`transition-all duration-300 rounded-full ${
                  active === index
                    ? "w-10 h-3 bg-[#092336]"
                    : "w-3 h-3 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
