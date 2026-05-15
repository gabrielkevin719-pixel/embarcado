import { Header } from "@/components/header";
import {
  HeroSection,
  BenefitsSection,
  FeaturesSection,
  CoursesSection,
  TeachersSection,
  TestimonialsSection,
  WhatsAppSection,
  StatsSection,
  Footer
} from "@/components/landing-sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <section id="beneficios">
          <BenefitsSection />
        </section>
        <FeaturesSection />
        <section id="planos">
          <CoursesSection />
        </section>
        <section id="professores">
          <TeachersSection />
        </section>
        <section id="aprovados">
          <TestimonialsSection />
        </section>
        <WhatsAppSection />
        <StatsSection />
      </main>
      <Footer />
    </>
  );
}
