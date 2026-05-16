import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CollaborationSection, ContactSection, Footer, ImpactSection, MethodSection, OperatingSection, PostsSection, PrinciplesSection, ProjectsSection, ServicesSection } from "@/components/sections";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <Header />
      <Hero />
      <ServicesSection />
      <ImpactSection />
      <OperatingSection />
      <ProjectsSection />
      <MethodSection />
      <PrinciplesSection />
      <PostsSection />
      <CollaborationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
