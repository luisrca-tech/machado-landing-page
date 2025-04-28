import { Acting } from "~/components/section/Acting";
import { HeroSection } from "~/components/section/Hero";
import { OurBenefits } from "~/components/section/OurBenefits";
import { WhoWeAre } from "~/components/section/WhoWeAre";
import { Container } from "~/components/ui/Container";
import Office from "public/images/officePhoto.jpg";
import { Faq } from "~/components/section/Faq";
import { WhatTheySay } from "~/components/section/WhatTheySay";

export default function HomePage() {
  return (
    <main>
      <section
        className="pt-14 pb-10 lg:pt-32 lg:pb-20"
        id="hero"
      >
        <Container>
          <HeroSection />
        </Container>
      </section>
      <section
        className="py-10 lg:py-20 bg-[#f9f9f9]"
        id="benefits"
      >
        <Container>
          <OurBenefits />
        </Container>
      </section>
      <section
        className="py-10 lg:py-20"
        id="acting"
      >
        <Container>
          <Acting />
        </Container>
      </section>
      <section
        className="py-10 lg:py-20 relative overflow-hidden"
        id="who-we-are"
      >
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src={Office.src}
            alt="Escritório Machado Advogados"
            className="w-full h-full object-cover object-center blur-xs brightness-80"
            draggable={false}
          />
        </div>
        <div className="relative z-10">
          <Container>
            <WhoWeAre />
          </Container>
        </div>
      </section>
      <section
        className="py-10 lg:py-20"
        id="what-they-say"
      >
        <Container>
          <WhatTheySay />
        </Container>
      </section>
      <section
        className="py-10 lg:py-20 bg-[#f9f9f9]"
        id="faq"
      >
        <Container>
          <Faq />
        </Container>
      </section>
    </main>
  );
}
