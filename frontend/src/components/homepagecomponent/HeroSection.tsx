"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[100svh] flex items-start sm:items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541976590-713941681591?w=1920&q=80"
          alt="Professional Wood Framing Construction"
          fill
          className="object-cover object-center brightness-[0.45]"
          priority
          sizes="100vw"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-0 text-center text-white">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            font-bold mb-4 sm:mb-6
            text-[1.8rem] leading-[2.3rem]
            sm:text-[2.6rem] sm:leading-[3.2rem]
            md:text-[3.2rem] md:leading-[3.8rem]
            lg:text-[4rem] lg:leading-[4.5rem]
            xl:text-[4.5rem] xl:leading-[5rem]
          "
        >
          Professional Wood Framing <br className="hidden sm:block" />
          Contractors in{" "}
          <span className="text-[#B95927]">
            Calgary & Alberta
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="
            mb-6 sm:mb-10
            max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto
            text-[0.95rem] leading-[1.7rem]
            sm:text-[1.1rem] sm:leading-[1.9rem]
            lg:text-[1.2rem] lg:leading-[2rem]
            text-gray-200
          "
        >
          We provide professional wood framing services for residential
          projects, custom homes, commercial buildings, and structural
          modifications in Calgary and across Alberta. Our team focuses on
          precise workmanship, strong structural details, and reliable project
          execution from start to finish.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="
              inline-block
              bg-[#B95927]
              text-white
              font-semibold
              rounded-xl
              shadow-xl
              hover:bg-[#a04d20]
              transition-all
              duration-300
              hover:scale-105
              px-6 py-3
              sm:px-10 sm:py-4
              text-sm sm:text-lg
            "
          >
            Get Your Free Estimate
          </Link>
        </motion.div>

      </div>
    </section>
  );
}