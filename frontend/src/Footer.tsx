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
            <div className="flex gap-6">
              <a href="#" className="text-gray-700 hover:text-[#B95927] transition">
                <span className="text-xl">f</span>
              </a>
              <a href="#" className="text-gray-700 hover:text-[#B95927] transition">
                <span className="text-xl">in</span>
              </a>
              <a href="#" className="text-gray-700 hover:text-[#B95927] transition">
                <span className="text-xl">✉</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
