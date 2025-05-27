import Office from "public/images/officePhoto.jpg";
import { Acting } from "~/components/section/Acting";
import { AdvogadoTrabalhistaHeroSection } from "~/components/section/AdvogadoTrabalhistaHero";
import { Faq } from "~/components/section/Faq";
import { OurBenefits } from "~/components/section/OurBenefits";
import { WhatTheySay } from "~/components/section/WhatTheySay";
import { WhoWeAre } from "~/components/section/WhoWeAre";
import { Container } from "~/components/ui/Container";

export default function AdvogadoTrabalhistaPage() {
	return (
		<main>
			<section className="relative bg-[#0f1b2b]">
				<Container className="z-10 px-0">
					<AdvogadoTrabalhistaHeroSection />
				</Container>
			</section>
			<section className="py-10 lg:py-16">
				<Container>
					<OurBenefits />
				</Container>
			</section>
			<section className="bg-[#0f1b2b] py-10 lg:py-20" id="acting">
				<Container>
					<Acting />
				</Container>
			</section>
			<section className="bg-white/90 pt-10 lg:py-20">
				<Container>
					<WhoWeAre />
				</Container>
			</section>
			<section className="pb-10 md:py-20">
				<WhatTheySay />
			</section>
			<section className="bg-white/90 py-10 lg:py-20">
				<Container>
					<Faq />
				</Container>
			</section>
		</main>
	);
}
