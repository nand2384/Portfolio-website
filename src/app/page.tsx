import { AboutTeaser } from "@/components/about-teaser";
import { ContactSection } from "@/components/contact-section";
import { FeaturedProjects } from "@/components/featured-projects";
import { Hero } from "@/components/hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteNav } from "@/components/site-nav";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <Hero />
        <FeaturedProjects />
        <AboutTeaser />
        <TechStack />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
