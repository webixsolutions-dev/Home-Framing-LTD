import Link from "next/link";

export default function HomeAboutSection() {
  const points = [
    "Clear communication before and during the project",
    "Organized crews and job site coordination",
    "Safe and professional work practices",
    "Reliable support for homeowners and builders",
  ];

  return (
    <section className="w-full bg-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="uppercase tracking-[0.2em] text-sm font-semibold text-[#B95927] mb-4">
              About Home Framing LTD
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#092336] leading-tight mb-8">
              Trusted Wood Framing Contractors in Calgary
            </h2>

            <div className="space-y-6">
              <p className="text-[#4A5565] text-lg leading-8">
                Home Framing LTD provides reliable residential, custom home,
                commercial, and structural framing services across Calgary and
                nearby areas.
              </p>

              <p className="text-[#4A5565] text-lg leading-8">
                Our team focuses on strong workmanship, accurate framing,
                dependable scheduling, and clean project execution from start to
                finish.
              </p>
            </div>

            {/* Bullet Points */}
            <div className="mt-10 space-y-5">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#092336] mt-2"></div>

                  <p className="text-[#4A5565] leading-7">{point}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-[#092336] hover:bg-[#0d2d45] text-white font-semibold px-7 py-4 rounded-xl transition duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm min-h-[240px] flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#092336] flex items-center justify-center mb-6">
                <div className="w-5 h-5 rounded-full bg-white"></div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#092336] mb-4">
                  Quality Workmanship
                </h3>

                <p className="text-[#4A5565] leading-7">
                  We focus on accurate framing, strong structure, and clean
                  workmanship for every project.
                </p>
              </div>
            </div>

            <div className="bg-[#092336] rounded-3xl p-8 shadow-xl min-h-[240px] flex flex-col justify-between">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6">
                <div className="w-5 h-5 rounded-full bg-[#092336]"></div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Reliable Service
                </h3>

                <p className="text-gray-200 leading-7">
                  Our team stays organized, follows timelines, and supports
                  projects with dependable communication.
                </p>
              </div>
            </div>

            <div className="bg-[#B95927] rounded-3xl p-8 shadow-xl min-h-[240px] flex flex-col justify-between sm:col-span-2">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6">
                <div className="w-5 h-5 rounded-full bg-[#B95927]"></div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Built on Integrity & Professionalism
                </h3>

                <p className="text-orange-100 text-lg leading-8 max-w-3xl">
                  We believe in doing the work properly the first time while
                  maintaining safe practices, careful planning, and respect for
                  every job site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
