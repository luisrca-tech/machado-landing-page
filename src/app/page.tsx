import Office from "public/images/officePhoto.jpg";
import { Acting } from "~/components/section/Acting";
import { Faq } from "~/components/section/Faq";
import { HeroSection } from "~/components/section/Hero";
import { OurBenefits } from "~/components/section/OurBenefits";
import { WhatTheySay } from "~/components/section/WhatTheySay";
import { WhoWeAre } from "~/components/section/WhoWeAre";
import { Container } from "~/components/ui/Container";

export default function HomePage() {
  return (
    <main>
      <section className="relative">
        <Container className="z-10 px-0 py-8">
          <HeroSection />
        </Container>
      </section>
      <section
        className="bg-[#f9f9f9] py-10 lg:py-16"
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
      <section className="bg-[#f9f9f9] pt-10 lg:py-20">
        <Container>
          <WhoWeAre />
        </Container>
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
        className="bg-[#f9f9f9] py-10 lg:py-20"
        id="faq"
      >
        <Container>
          <Faq />
        </Container>
      </section>
    </main>
  );
}
