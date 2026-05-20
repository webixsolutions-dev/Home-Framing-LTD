import HeroSection from "@/components/homepagecomponent/HeroSection";
import ServicesSection from "@/components/homepagecomponent/ServicesSection";
import WhyChooseUsSection from "@/components/homepagecomponent/WhyChooseUsSection";
import ProcessSection from "@/components/homepagecomponent/ProcessSection";
import CTASection from "@/components/homepagecomponent/CTASection";
import HomeAboutSection from "@/components/homepagecomponent/HomeAboutSection";
import TestimonialsSection from "@/components/homepagecomponent/TestimonialsSection";
import StatsSection from "@/components/homepagecomponent/StatsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFBFB] ">
      <HeroSection />
      <HomeAboutSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />

      <CTASection />
    </main>
  );
}
