import Image from "next/image";
import RafaelMachado from "public/images/rafaelMachadoAboutUs.jpg";
import { Fade } from "react-awesome-reveal";
import { WppButton } from "../ui/WppButton";

export function WhoWeAre() {
	return (
		<Fade triggerOnce direction="up" cascade damping={0.15}>
			<div className="block md:hidden">
				<div className="mx-auto max-w-md">
					<div className="mb-8 text-center">
						<h2 className="mb-2 font-bold text-4xl text-black">
							Quem vai te atender?
						</h2>
						<div className="mx-auto h-1.5 w-20 bg-[#c4a35a]" />
					</div>

					<div className="mb-8 overflow-hidden rounded-2xl bg-[rgba(255,255,255,0.15)] pt-8">
						<div className="mb-4 flex justify-center">
							<div className="h-40 w-40 overflow-hidden rounded-full border-4 border-[#c4a35a]">
								<Image
									src={RafaelMachado}
									alt="Dr. Rafael Machado Nascimento"
									width={160}
									height={160}
									className="h-full w-full object-cover"
									priority
								/>
							</div>
						</div>

						<div className="px-6 pb-8 text-center">
							<h3 className="mb-1 font-semibold text-2xl text-black">
								Dr. Rafael Machado
							</h3>
							<p className="mb-4 font-medium text-[#c4a35a] text-lg">
								Advogado Trabalhista
							</p>

							<div className="mb-6 text-base text-black leading-relaxed">
								<p className="mb-4 font-normal">
									Formado pela PUC/GO e pós-graduando em Direito do Trabalho
									pelo IGD, o Dr. Rafael Machado Nascimento é atual Presidente
									da Comissão de Direito do Trabalho da OAB Senador Canedo/GO
									(2025–2027).
								</p>
								<p>
									Com atendimento personalizado e direto, você conversará
									exclusivamente com o especialista, garantindo orientação clara
									e sigilosa sobre seu caso.
								</p>
							</div>

							<div className="mt-6">
								<WppButton text="Falar diretamente com o Dr. Rafael Machado" />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Desktop Layout */}
			<div className="hidden md:block">
				<div className="mx-auto max-w-6xl">
					<div className="mb-16 text-center">
						<h2 className="mb-3 font-bold text-4xl text-black">
							Quem vai te atender?
						</h2>
						<div className="mx-auto h-1.5 w-24 bg-[#c4a35a]" />
					</div>

					<div className="flex items-center justify-center">
						<div className="flex w-1/3 justify-center">
							<div className="h-64 w-64 overflow-hidden rounded-full border-4 border-[#c4a35a]">
								<Image
									src={RafaelMachado}
									alt="Dr. Rafael Machado Nascimento"
									width={256}
									height={256}
									className="h-full w-full object-cover"
									priority
								/>
							</div>
						</div>

						<div className="w-2/3 pl-12">
							<h3 className="mb-2 font-bold text-3xl text-black">
								Dr. Rafael Machado
							</h3>
							<p className="mb-6 font-medium text-[#c4a35a] text-xl">
								Advogado Trabalhista
							</p>

							<div className="mb-8 text-base text-black leading-relaxed">
								<p className="mb-5">
									Formado pela PUC/GO e pós-graduando em Direito do Trabalho
									pelo IGD, o Dr. Rafael Machado Nascimento é atual Presidente
									da Comissão de Direito do Trabalho da OAB Senador Canedo/GO
									(2025–2027).
								</p>
								<p>
									Com atendimento personalizado e direto, você conversará
									exclusivamente com o especialista, garantindo orientação clara
									e sigilosa sobre seu caso.
								</p>
							</div>

							<div className="mt-8">
								<WppButton
									className="lg:text-lg"
									text="Falar diretamente com o Dr. Rafael Machado"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
}
