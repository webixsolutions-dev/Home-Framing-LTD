export default function About() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-20">
        {/* Hero Section */}
        <div className="max-w-5xl mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#092336] leading-tight mb-8">
            About Home Framing LTD
          </h1>

          <p className="text-lg md:text-xl leading-9 text-[#4A5565]">
            Home Framing LTD is a trusted framing company serving in Calgary. We
            provide reliable residential, custom home, commercial, and
            structural framing services built on strong workmanship. We work
            with homeowners, builders, and developers across Calgary to support
            strong, well-planned construction projects from the ground up.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <div>
            <p className="uppercase tracking-[0.2em] text-sm font-semibold text-[#092336] mb-4">
              Our Story
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-6 leading-tight">
              A Foundation Built on Hard Work and Integrity
            </h2>

            <div className="space-y-6 text-[#4A5565] text-lg leading-8">
              <p>
                Home Framing LTD was built with a simple purpose: to deliver
                framing work that clients can trust. We understand how important
                strong framing is to the safety, quality, and long-term value of
                a building.
              </p>

              <p>
                In construction, delays, poor communication, and inaccurate
                framing can affect every trade that comes after. That is why we
                focus on clear planning, reliable scheduling, proper
                measurements, safe work practices, and clean execution from
                start to finish.
              </p>

              <p>
                We do not believe in shortcuts. We believe in doing the work
                properly the first time, respecting the job site, and helping
                each project move forward smoothly.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-[#092336] mb-6">
              What Makes Us Different
            </h3>

            <div className="space-y-5">
              {[
                "Clear communication before and during the project",
                "Organized crews and job site coordination",
                "Careful attention to measurements and layout",
                "Safe and professional work practices",
                "Reliable support for builders, homeowners, and developers",
                "Framing work prepared for the next stage of construction",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-[#092336] mt-2"></div>

                  <p className="text-[#4A5565] leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 md:p-16 mb-28">
          <p className="uppercase tracking-[0.2em] text-sm font-semibold text-[#092336] mb-4">
            Our Mission
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-8">
            Framing Services Built for Stronger Projects
          </h2>

          <div className="space-y-6 text-[#4A5565] text-lg leading-8 max-w-5xl">
            <p>
              Our mission is to provide reliable framing services that help
              clients complete stronger, safer, and better-built projects across
              Calgary and Alberta.
            </p>

            <p>
              We aim to be the framing team that homeowners, builders, and
              developers can depend on for honest communication, skilled
              workmanship, organized project support, and long-lasting
              structural quality.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-28">
          <p className="uppercase tracking-[0.2em] text-sm font-semibold text-[#092336] mb-4">
            Our Values
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-14">
            The Principles That Guide Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                desc: "We believe in honest work, clear communication, and taking responsibility for every project we complete.",
              },
              {
                title: "Quality",
                desc: "Our team focuses on accurate framing, strong connections, clean workmanship, and details that support long-term durability.",
              },
              {
                title: "Safety",
                desc: "We follow safe job site practices to protect our crew, clients, materials, and the overall project environment.",
              },
              {
                title: "Reliability",
                desc: "Construction timelines matter. We show up prepared, stay organized, and work to keep projects moving forward.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-2xl font-bold text-[#092336] mb-4">
                  {value.title}
                </h3>

                <p className="text-[#4A5565] leading-7">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-28">
          <p className="uppercase tracking-[0.2em] text-sm font-semibold text-[#092336] mb-4">
            What We Do
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#092336] mb-14">
            Professional Framing Services
          </h2>

          <p className="text-[#4A5565] text-lg leading-8 max-w-5xl mb-14">
            Home Framing LTD supports a wide range of framing projects for
            residential and commercial construction. Our services are designed
            for clients who need reliable crews, strong workmanship, and proper
            project coordination.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Residential Framing",
                desc: "We provide framing for new homes, additions, renovations, garages, basements, and residential construction projects.",
              },
              {
                title: "Custom Home Framing",
                desc: "Custom homes require careful planning and accurate execution. We help bring unique designs to life with strong and detailed framing work.",
              },
              {
                title: "Commercial Framing",
                desc: "We support builders, contractors, and developers with commercial framing services that require organization, safety, and dependable scheduling.",
              },
              {
                title: "Structural Modification",
                desc: "We assist with framing changes, openings, wall modifications, additions, and structural adjustments with a careful, plan-focused approach.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-md border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-[#092336] mb-4">
                  {service.title}
                </h3>

                <p className="text-[#4A5565] leading-7">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Serving Section */}
        <div className="bg-[#092336] rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Proudly Serving in Calgary
          </h2>

          <p className="text-lg leading-8 text-gray-200 max-w-4xl mx-auto">
            Home Framing LTD proudly serves clients across Calgary. Our team
            works with homeowners, builders, contractors, and developers on
            projects of different sizes and scopes.
          </p>
        </div>
      </div>
    </div>
  );
}
