import { Acting } from "~/components/section/Acting";
import { HeroSection } from "~/components/section/Hero";
import { OurBenefits } from "~/components/section/OurBenefits";
import { Container } from "~/components/ui/Container";

export default function HomePage() {
  return (
    <main>
      <section className="pt-14 pb-10 lg:pt-32 lg:pb-20">
        <Container>
          <HeroSection />
        </Container>
      </section>
      <section className="py-10 lg:py-20 bg-[#f9f9f9]">
        <Container>
          <OurBenefits />
        </Container>
      </section>
      <section className="py-10 lg:py-20">
        <Container>
          <Acting />
        </Container>
      </section>
    </main>
  );
}
