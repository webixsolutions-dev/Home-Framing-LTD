import { Briefcase, CalendarDays, Smile, Users } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Briefcase size={28} />,
      value: "50+",
      label: "Projects Completed",
    },
    {
      icon: <CalendarDays size={28} />,
      value: "1.5+",
      label: "Years in Business",
    },
    {
      icon: <Smile size={28} />,
      value: "100%",
      label: "Client Satisfaction",
    },
    {
      icon: <Users size={28} />,
      value: "10+",
      label: "Skilled Team Members",
    },
  ];

  return (
    <section className="w-full bg-[#092336] py-14 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center justify-center text-center
                px-6 relative
                ${
                  index !== stats.length - 1
                    ? "lg:border-r lg:border-white/10"
                    : ""
                }
              `}
            >
              {/* Icon */}
              <div className="text-[#B95927] mb-5">{stat.icon}</div>

              {/* Value */}
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
