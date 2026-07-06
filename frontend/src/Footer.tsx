import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] text-gray-700 mt-16">
      {/* Main Footer Content */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image 
                src="/images/FramingLTD.png" 
                alt="Home Framing LTD Logo" 
                width={280} 
                height={280}
                className="h-36 sm:h-[98px] md:h-[112px] lg:h-[140px] w-auto object-contain"
              />
            </div>
            <p className="text-base leading-relaxed text-gray-700 font-medium text-lg">
              Setting the standard in residential and commercial structural excellence in Calgary. One frame at a time.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-[#092336] text-lg mb-6">SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-700 hover:text-[#B95927] transition text-lg">
                  Residential Framing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 hover:text-[#B95927] transition text-lg">
                  Commercial Framing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 hover:text-[#B95927] transition text-lg">
                  Basements
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 hover:text-[#B95927] transition text-lg">
                  Decks
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-700 hover:text-[#B95927] transition text-lg">
                  Custom Truss Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-[#092336] text-lg mb-6">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-700 hover:text-[#B95927] transition text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-700 hover:text-[#B95927] transition text-lg">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-700 hover:text-[#B95927] transition text-lg">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-700 hover:text-[#B95927] transition text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="font-bold text-[#092336] text-lg mb-6">CONTACT</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <a href="tel:+14039250600" className="text-gray-700 hover:text-[#B95927] transition flex items-center gap-2 text-lg">
                  <span>☎</span> +1(403) 925–0600
                </a>
              </li>
              <li>
                <a
                  href="mailto:HomeframingLTD@gmail.com"
                  className="text-gray-700 hover:text-[#B95927] transition flex items-center gap-2 text-lg"
                >
                  <span>✉</span> HomeframingLTD@gmail.com
                </a>
              </li>
            </ul>

            <h3 className="font-bold text-[#092336] text-lg mb-6">LEGAL</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-700 hover:text-[#B95927] transition text-lg">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-700 hover:text-[#B95927] transition text-lg">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/material-specs" className="text-gray-700 hover:text-[#B95927] transition text-lg">
                  Material Specs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-lgtext-center lg:text-left ">
              © 2025 Home Framing LTD. Structural Excellence Guaranteed.
            </p>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/home_framing_ltd?igsh=MmQybm1raGpveDJh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Home Framing LTD on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm hover:text-[#B95927] hover:shadow-md transition"
              >
                <span className="sr-only">Home Framing LTD on Instagram</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* TODO: replace with real Facebook URL */}
              <Link
                href="/"
                aria-label="Home Framing LTD on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm hover:text-[#B95927] hover:shadow-md transition"
              >
                <span className="sr-only">Home Framing LTD on Facebook</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>

              {/* TODO: replace with real Twitter/X URL */}
              <Link
                href="/"
                aria-label="Home Framing LTD on Twitter/X"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow-sm hover:text-[#B95927] hover:shadow-md transition"
              >
                <span className="sr-only">Home Framing LTD on Twitter/X</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
