import { HeroSection } from "~/components/section/Hero";
import { Container } from "~/components/ui/Container";

export default function HomePage() {
  return (
    <main>
      <section className="pt-14 pb-10 lg:pt-32 lg:pb-20">
        <Container>
          <HeroSection />
        </Container>
      </section>
    </main>
  );
}
