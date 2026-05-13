import HeroSection from "@/components/homepagecomponent/HeroSection";
import ServicesSection from "@/components/homepagecomponent/ServicesSection";
import WhyChooseUsSection from "@/components/homepagecomponent/WhyChooseUsSection";
import ProcessSection from "@/components/homepagecomponent/ProcessSection";
import CTASection from "@/components/homepagecomponent/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FBFBFB]">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <CTASection />
    </main>
  );
}
