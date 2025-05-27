import { AreasOfPractice } from "~/components/section/AreasOfPractice";
import { Contact } from "~/components/section/Contact";
import { HeroSection } from "~/components/section/Hero";
import { OurTeam } from "~/components/section/OurTeam";
import { SocialProof } from "~/components/section/SocialProof";
import { Container } from "~/components/ui/Container";

export default function HomePage() {
	return (
		<main>
			{/* Hero Section */}
			<section className="relative bg-[#0f1b2b]">
				<Container className="z-10 px-0 py-8">
					<HeroSection />
				</Container>
			</section>

			{/* Areas of Practice */}
			<section id="atuacao" className="py-10 lg:py-16">
				<Container>
					<AreasOfPractice />
				</Container>
			</section>

			{/* Our Team */}
			<section id="nossa-equipe" className="bg-white/90 pt-10 lg:py-20">
				<Container>
					<OurTeam />
				</Container>
			</section>

			{/* Social Proof */}
			<section id="prova-social" className="py-10 lg:py-20">
				<Container>
					<SocialProof />
				</Container>
			</section>

			{/* Contact & Location */}
			<section id="contato" className="bg-white/90 py-10 lg:py-20">
				<Container>
					<Contact />
				</Container>
			</section>
		</main>
	);
}
