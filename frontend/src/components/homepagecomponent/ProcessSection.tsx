"use client";

import { motion } from "framer-motion";

export default function ProcessSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-200 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#B95927] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#092336] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 xl:px-24">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-16 sm:w-20 md:w-24 h-1 bg-[#B95927] mx-auto mb-3 sm:mb-4 md:mb-6"
          />

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#092336] mb-3 sm:mb-4 md:mb-6 px-2 leading-tight">
            Our Framing Process
          </h2>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-2">
            We keep every framing project organized from the first review to
            Ready for Next Stage. Our process helps you understand what happens
            at each stage, so your project moves forward with clear planning,
            accurate workmanship, and reliable communication.
          </p>
        </motion.div>

        {/* Timeline Process Steps */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#B95927] via-[#B95927] to-transparent"></div>

          {/* Process Steps */}
          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative flex flex-col lg:flex-row items-center gap-8"
            >
              <div className="lg:w-1/2 lg:text-right lg:pr-12">
                <div className="bg-[#FBFBFB] p-6 sm:p-8 rounded-2xl border-2 border-[#B95927] hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#B95927] mb-3 sm:mb-4">
                    Project Review
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    We review your drawings, project details, site conditions,
                    and framing needs to understand the full scope before work
                    begins.
                  </p>
                </div>
              </div>

              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B95927] to-[#a04d20] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl border-4 border-white z-10">
                  1
                </div>
              </div>

              <div className="lg:w-1/2 lg:pl-12"></div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex flex-col lg:flex-row items-center gap-8"
            >
              <div className="lg:w-1/2 lg:pr-12"></div>

              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B95927] to-[#a04d20] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl border-4 border-white z-10">
                  2
                </div>
              </div>

              <div className="lg:w-1/2 lg:pl-12">
                <div className="bg-[#FBFBFB] p-6 sm:p-8 rounded-2xl border-2 border-[#B95927] hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#B95927] mb-3 sm:mb-4">
                    Estimate & Schedule
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    We prepare the estimate, plan the timeline, and organize
                    crew and material needs to keep the project moving smoothly.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex flex-col lg:flex-row items-center gap-8"
            >
              <div className="lg:w-1/2 lg:text-right lg:pr-12">
                <div className="bg-[#FBFBFB] p-6 sm:p-8 rounded-2xl border-2 border-[#B95927] hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#B95927] mb-3 sm:mb-4">
                    Site Layout
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    We check measurements, confirm layout lines, and prepare the
                    work area for accurate walls, openings, floors, and framing
                    details.
                  </p>
                </div>
              </div>

              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B95927] to-[#a04d20] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl border-4 border-white z-10">
                  3
                </div>
              </div>

              <div className="lg:w-1/2 lg:pl-12"></div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex flex-col lg:flex-row items-center gap-8"
            >
              <div className="lg:w-1/2 lg:pr-12"></div>

              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B95927] to-[#a04d20] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl border-4 border-white z-10">
                  4
                </div>
              </div>

              <div className="lg:w-1/2 lg:pl-12">
                <div className="bg-[#FBFBFB] p-6 sm:p-8 rounded-2xl border-2 border-[#B95927] hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#B95927] mb-3 sm:mb-4">
                    Framing Work
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    We complete the framing according to project plans, focusing
                    on strength, alignment, safety, and clean workmanship from
                    start to finish.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative flex flex-col lg:flex-row items-center gap-8"
            >
              <div className="lg:w-1/2 lg:text-right lg:pr-12">
                <div className="bg-[#FBFBFB] p-6 sm:p-8 rounded-2xl border-2 border-[#B95927] hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#B95927] mb-3 sm:mb-4">
                    Quality Check
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    We review the completed framing for accuracy, stability, and
                    structural strength before the next construction stage or
                    inspection.
                  </p>
                </div>
              </div>

              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B95927] to-[#a04d20] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl border-4 border-white z-10">
                  5
                </div>
              </div>

              <div className="lg:w-1/2 lg:pl-12"></div>
            </motion.div>

            {/* Step 6 */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative flex flex-col lg:flex-row items-center gap-8"
            >
              <div className="lg:w-1/2 lg:pr-12"></div>

              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-[#B95927] to-[#a04d20] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl border-4 border-white z-10">
                  6
                </div>
              </div>

              <div className="lg:w-1/2 lg:pl-12">
                <div className="bg-[#FBFBFB] p-6 sm:p-8 rounded-2xl border-2 border-[#B95927] hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#B95927] mb-3 sm:mb-4">
                    Ready for Next Stage
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    We make sure the framing scope is finished properly and the
                    project is ready for the next trade or construction phase.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
