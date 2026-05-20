"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="w-full z-[100]">
      {/* Top Info Bar */}
      <div className="bg-[#092336] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center text-[10px] sm:text-xs">
            <div className="flex flex-wrap gap-x-4 gap-y-0.5">
              <a
                href="mailto:HomeframingLTD@gmail.com"
                className="hover:text-[#B95927]"
              >
                ✉ HomeframingLTD@gmail.com
              </a>

              <a href="tel:+14039250600" className="hover:text-[#B95927]">
                ☎ +1(403) 925–0600
              </a>
            </div>

            <p className="hidden sm:block text-gray-300 whitespace-nowrap">
              Mon-Fri 7AM–5PM | Sat 8AM–2PM
            </p>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md sticky top-0 z-[100]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 md:h-24 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full py-2">
            <Image
              src="/images/FramingLTD.png"
              alt="Home Framing LTD Logo"
              width={280}
              height={280}
              className="h-20 sm:h-[98px] md:h-[112px] lg:h-[135px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 items-center h-full">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#B95927] font-medium text-lg transition"
            >
              HOME
            </Link>

            <Link
              href="/about"
              className="text-gray-700 hover:text-[#B95927] font-medium text-lg transition"
            >
              ABOUT
            </Link>

            {/* Desktop Services Dropdown */}
            <div className="relative group h-full flex items-center">
              <button className="text-gray-700 hover:text-[#B95927] font-medium text-lg flex items-center gap-1 transition">
                SERVICES
                <svg
                  className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              <div className="pointer-events-none absolute left-0 top-full mt-4 w-[340px] rounded-2xl border border-gray-100 bg-white shadow-2xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50 p-6">
                {/* Top Row */}
                <div className="flex items-center justify-between gap-5 mb-6">
                  <Link
                    href="/services"
                    className="text-[17px] font-medium text-[#092336] hover:text-[#B95927] transition whitespace-nowrap"
                  >
                    • All Services
                  </Link>

                  <Link
                    href="/services/structural-modifications"
                    className="text-[17px] font-medium text-[#092336] hover:text-[#B95927] transition whitespace-nowrap"
                  >
                    • Structural Modification
                  </Link>
                </div>

                {/* Remaining Links */}
                <div className="flex flex-col gap-5">
                  <Link
                    href="/services/residential-framing"
                    className="text-[17px] font-medium text-[#092336] hover:text-[#B95927] transition"
                  >
                    • Residential Framing
                  </Link>

                  <Link
                    href="/services/commercial-framing"
                    className="text-[17px] font-medium text-[#092336] hover:text-[#B95927] transition"
                  >
                    • Commercial Framing
                  </Link>

                  <Link
                    href="/services/custom-home-framing"
                    className="text-[17px] font-medium text-[#092336] hover:text-[#B95927] transition"
                  >
                    • Custom Home Framing
                  </Link>

                  {/* <Link
                    href="/services/page5"
                    className="text-[17px] font-medium text-[#092336] hover:text-[#B95927] transition"
                  >
                    • Basement Framing
                  </Link> */}

                  {/* <Link
                    href="/services/page6"
                    className="text-[17px] font-medium text-[#092336] hover:text-[#B95927] transition"
                  >
                    • Deck Framing
                  </Link> */}
                </div>
              </div>
            </div>

            <Link
              href="/projects"
              className="text-gray-700 hover:text-[#B95927] font-medium text-lg transition"
            >
              PROJECTS
            </Link>

            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#B95927] font-medium text-lg transition"
            >
              CONTACT
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+14039250600"
              className="text-[#B95927] font-bold text-sm hidden xl:block whitespace-nowrap"
            >
              (403) 925–0600
            </a>

            <Link
              href="/contact"
              className="bg-[#B95927] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded font-bold hover:bg-[#a04d20] transition text-xs sm:text-sm uppercase shadow-sm whitespace-nowrap"
            >
              Free Quote
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-[#B95927] p-1 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[200] flex flex-col bg-white overflow-y-auto">
          {/* Top */}
          <div className="flex items-center justify-between px-5 py-4 bg-white border-b border-gray-100 flex-shrink-0">
            <Link href="/" onClick={closeAll}>
              <Image
                src="/images/FramingLTD.png"
                alt="Home Framing LTD Logo"
                width={180}
                height={180}
                className="h-[90px] w-auto object-contain"
              />
            </Link>

            <button
              onClick={closeAll}
              className="text-[#092336] p-2"
              aria-label="Close menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Nav */}
          <nav className="flex-1 px-6 py-2 flex flex-col divide-y divide-gray-100">
            <Link
              href="/"
              onClick={closeAll}
              className="flex items-center gap-3 py-4 font-bold text-lg text-[#092336]"
            >
              <span className="w-2 h-2 rounded-full bg-[#B95927]" />
              HOME
            </Link>

            <Link
              href="/about"
              onClick={closeAll}
              className="flex items-center gap-3 py-4 font-bold text-lg text-[#092336]"
            >
              <span className="w-2 h-2 rounded-full bg-[#B95927]" />
              ABOUT
            </Link>

            {/* Mobile Services */}
            <div className="py-1">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between py-3 font-bold text-lg text-[#092336]"
              >
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#B95927]" />
                  SERVICES
                </span>

                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="mt-3 ml-5 bg-gray-50 rounded-2xl p-5 shadow-sm">
                  {/* Top Row */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <Link
                      href="/services"
                      onClick={closeAll}
                      className="text-base font-medium text-[#092336] whitespace-nowrap"
                    >
                      • All Services
                    </Link>

                    <Link
                      href="/services/page4"
                      onClick={closeAll}
                      className="text-base font-medium text-[#092336] whitespace-nowrap"
                    >
                      • Structural Modification
                    </Link>
                  </div>

                  {/* Remaining */}
                  <div className="flex flex-col gap-4">
                    <Link
                      href="/services/page1"
                      onClick={closeAll}
                      className="text-base font-medium text-[#092336]"
                    >
                      • Residential Framing
                    </Link>

                    <Link
                      href="/services/page2"
                      onClick={closeAll}
                      className="text-base font-medium text-[#092336]"
                    >
                      • Commercial Framing
                    </Link>

                    <Link
                      href="/services/page3"
                      onClick={closeAll}
                      className="text-base font-medium text-[#092336]"
                    >
                      • Custom Home Framing
                    </Link>

                    <Link
                      href="/services/page5"
                      onClick={closeAll}
                      className="text-base font-medium text-[#092336]"
                    >
                      • Basement Framing
                    </Link>

                    <Link
                      href="/services/page6"
                      onClick={closeAll}
                      className="text-base font-medium text-[#092336]"
                    >
                      • Deck Framing
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/projects"
              onClick={closeAll}
              className="flex items-center gap-3 py-4 font-bold text-lg text-[#092336]"
            >
              <span className="w-2 h-2 rounded-full bg-[#B95927]" />
              PROJECTS
            </Link>

            <Link
              href="/contact"
              onClick={closeAll}
              className="flex items-center gap-3 py-4 font-bold text-lg text-[#092336]"
            >
              <span className="w-2 h-2 rounded-full bg-[#B95927]" />
              CONTACT
            </Link>
          </nav>

          {/* Bottom CTA */}
          <div className="px-6 pb-8 pt-4 border-t border-gray-100">
            <Link
              href="/contact"
              onClick={closeAll}
              className="block w-full text-center bg-[#B95927] text-white font-bold py-3.5 rounded-xl hover:bg-[#a04d20] transition text-base uppercase tracking-wide shadow-lg"
            >
              Get Free Quote
            </Link>

            <a
              href="tel:+14039250600"
              className="block text-center text-[#092336] font-semibold text-lg mt-4"
            >
              ☎ +1(403) 925–0600
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
