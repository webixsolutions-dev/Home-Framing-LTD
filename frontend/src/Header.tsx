"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/contact", label: "CONTACT" },
];

const serviceLinks = [
  { href: "/services", label: "All Services" },
  { href: "/services/page1", label: "Residential Framing" },
  { href: "/services/page2", label: "Commercial Framing" },
  { href: "/services/page3", label: "Custom Home Framing" },
  { href: "/services/page4", label: "Structural Modification" },
  { href: "/services/page5", label: "Basement Framing" },
  { href: "/services/page6", label: "Deck Framing" },
];

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
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 py-2">
          <div className="flex justify-between items-center text-[10px] sm:text-xs">
            <div className="flex flex-wrap gap-x-4 gap-y-0.5">
              <a href="mailto:HomeframingLTD@gmail.com" className="hover:text-[#B95927]">
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
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 h-16 sm:h-20 md:h-24 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center h-full py-2">
            <Image
              src="/images/FramingLTD.png"
              alt="Home Framing LTD Logo"
              width={280}
              height={280}
              className="h-20 sm:h-[98px] md:h-[112px] lg:h-[140px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 items-center h-full">
            <Link href="/" className="text-gray-700 hover:text-[#B95927] font-medium text-sm">HOME</Link>
            <Link href="/about" className="text-gray-700 hover:text-[#B95927] font-medium text-sm">ABOUT</Link>

            {/* Desktop Services Dropdown */}
            <div className="relative group h-full flex items-center">
              <button className="text-gray-700 hover:text-[#B95927] font-medium text-sm flex items-center gap-1">
                SERVICES
                <svg className="w-3.5 h-3.5 mt-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="pointer-events-none absolute left-0 top-full w-56 rounded-xl border border-slate-100 bg-white shadow-2xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                <ul className="py-2">
                  {serviceLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-orange-50 hover:text-[#B95927] transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B95927] flex-shrink-0" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link href="/projects" className="text-gray-700 hover:text-[#B95927] font-medium text-sm">PROJECTS</Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#B95927] font-medium text-sm">CONTACT</Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <a href="tel:+14039250600" className="text-[#B95927] font-bold text-sm hidden xl:block whitespace-nowrap">
              (403) 925–0600
            </a>
            <Link href="/contact" className="bg-[#B95927] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded font-bold hover:bg-[#a04d20] transition text-xs sm:text-sm uppercase shadow-sm whitespace-nowrap">
              Free Quote
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-[#B95927] p-1 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — full screen overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[200] flex flex-col bg-white overflow-y-auto">

          {/* Top bar inside menu */}
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
            <button onClick={closeAll} className="text-[#092336] p-2" aria-label="Close menu">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-6 py-2 flex flex-col divide-y divide-gray-100">

            {/* HOME */}
            <Link href="/" onClick={closeAll}
              className="flex items-center gap-3 py-4 font-bold text-lg text-[#092336] hover:text-[#B95927] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#B95927] flex-shrink-0" />
              HOME
            </Link>

            {/* ABOUT */}
            <Link href="/about" onClick={closeAll}
              className="flex items-center gap-3 py-4 font-bold text-lg text-[#092336] hover:text-[#B95927] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#B95927] flex-shrink-0" />
              ABOUT
            </Link>

            {/* SERVICES accordion */}
            <div className="py-1">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full flex items-center justify-between py-3 font-bold text-lg text-[#092336] hover:text-[#B95927] transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#B95927] flex-shrink-0" />
                  SERVICES
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isServicesOpen ? "rotate-180 text-[#B95927]" : "text-[#092336]"}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <ul className="mb-2 ml-5 border-l-2 border-[#B95927] pl-4 flex flex-col">
                  {serviceLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeAll}
                        className="block py-2.5 text-base font-medium text-gray-700 hover:text-[#B95927] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* PROJECTS */}
            <Link href="/projects" onClick={closeAll}
              className="flex items-center gap-3 py-4 font-bold text-lg text-[#092336] hover:text-[#B95927] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#B95927] flex-shrink-0" />
              PROJECTS
            </Link>

            {/* CONTACT */}
            <Link href="/contact" onClick={closeAll}
              className="flex items-center gap-3 py-4 font-bold text-lg text-[#092336] hover:text-[#B95927] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#B95927] flex-shrink-0" />
              CONTACT
            </Link>
          </nav>

          {/* CTA at bottom */}
          <div className="px-6 pb-8 pt-4 flex-shrink-0 border-t border-gray-100">
            <Link
              href="/contact"
              onClick={closeAll}
              className="block w-full text-center bg-[#B95927] text-white font-bold py-3.5 rounded-xl hover:bg-[#a04d20] transition text-base uppercase tracking-wide shadow-lg"
            >
              Get Free Quote
            </Link>
            <a href="tel:+14039250600" className="block text-center text-[#092336] font-semibold text-sm mt-4 hover:text-[#B95927]">
              ☎ +1(403) 925–0600
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
