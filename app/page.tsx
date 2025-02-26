import Hero from "@/components/layout/Hero";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { Grid } from "@/components/layout/sections/grid";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { Testimonials } from "@/components/layout/sections/Testimonials";

export const metadata = {
  title: "Crevozone - AI-Powered Coding Analytics",
  description:
    "Empowering institutes with real-time coding analytics, leaderboards, and AI-driven student insights.",
  openGraph: {
    type: "website",
    url: "https://crevozone.com",
    title: "Crevozone - AI-Powered Coding Analytics",
    description:
      "Track student coding performance, enhance placements, and manage talent seamlessly with Crevozone.",
    images: [
      {
        url: "https://img.icons8.com/pulsar-gradient/48/collaborating-in-circle.png",
        width: 1200,
        height: 630,
        alt: "Crevozone - AI-Powered Coding Analytics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://crevozone.com",
    title: "Crevozone - AI-Powered Coding Analytics",
    description:
      "A powerful platform for institutes to track, analyze, and enhance student coding skills.",
    images: [
      "https://img.icons8.com/pulsar-gradient/48/collaborating-in-circle.png",
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <HeroSection />

      <BenefitsSection />
      <FeaturesSection />
      {/* <ServicesSection /> */}
      <Grid />

      <CommunitySection />

      <Testimonials />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
