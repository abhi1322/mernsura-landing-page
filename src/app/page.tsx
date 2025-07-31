import {
  AboutSection,
  FeatureSection,
  WorkingSection,
  CTASection,
  Footer,
  HeroSection,
} from "@/components/home";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <WorkingSection />
      <FeatureSection />
      <CTASection />
      <Footer />
    </main>
  );
}
