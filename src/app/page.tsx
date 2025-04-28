import { Acting } from "~/components/section/Acting";
import { HeroSection } from "~/components/section/Hero";
import { OurBenefits } from "~/components/section/OurBenefits";
import { WhoWeAre } from "~/components/section/WhoWeAre";
import { Container } from "~/components/ui/Container";
import Office from "public/images/officePhoto.jpg";

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
      <section className="py-10 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={Office.src}
            alt="Escritório Machado Advogados"
            className="w-full h-full object-cover object-center blur-sm brightness-75"
            draggable={false}
          />
        </div>
        <div className="relative z-10">
          <Container>
            <WhoWeAre />
          </Container>
        </div>
      </section>
    </main>
  );
}
