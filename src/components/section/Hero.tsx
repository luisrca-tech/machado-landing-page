import Image from "next/image";
import Logo from "public/images/logoTransparent1.png";
import HeroImage from "public/images/rafaelBgTransparent.png";
import { Fade } from "react-awesome-reveal";

import OfficePhoto from "public/images/officePhoto.jpg";
import { WppButton } from "../ui/WppButton";

export function HeroSection() {
	return (
		<Fade
			triggerOnce
			direction="down"
			cascade
			damping={0.15}
			className="flex flex-col justify-between"
		>
			<div className="mb-5 ml-4 flex h-20 w-80 transform items-center justify-center rounded-md duration-300 hover:scale-105 lg:mb-0">
				<Image
					src={Logo}
					alt="Machado Advogados"
					className="h-full w-full object-contain"
				/>
			</div>

			<div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
				<div className="z-10 flex flex-col gap-6 px-4">
					<div className="flex flex-col gap-4">
						<strong className="font-medium text-[#C4A35A] text-sm uppercase tracking-wider">
							Dr. Rafael Machado (Advogado Recomendado)
						</strong>
						<div className="flex flex-col gap-2">
							<span className="font-bold text-2xl text-white md:text-5xl lg:text-6xl">
								Está procurando advogado trabalhista?
							</span>
						</div>
						<span className="text-lg text-white/90 md:text-xl">
							Se você enfrenta problemas no trabalho, não espere para buscar
							seus direitos. Converse agora com um especialista.
						</span>
					</div>

					<div className="hidden flex-col gap-3 lg:flex">
						<WppButton className="mt-8 h-16" />

						<span className="text-base text-white/70">
							Atendimento sigiloso • Resposta rápida • Análise gratuita
						</span>
					</div>
				</div>

				<div className="relative aspect-[4/3] w-full md:h-[400px] lg:aspect-auto lg:h-[600px] lg:px-4">
					<Image
						src={OfficePhoto}
						alt="Machado Advogados"
						className="h-full w-full rounded-md object-cover blur-xs lg:min-h-full lg:blur-none"
					/>
					<div className="lg:-left-1/2 -bottom-0.5 absolute flex h-full w-full items-center justify-center lg:bottom-0 lg:h-full">
						<Image
							src={HeroImage}
							alt="Hero"
							className="absolute h-full w-full object-contain"
						/>
						<div className="absolute right-0 bottom-10 left-0 z-10 flex flex-col items-center justify-center gap-1 md:bottom-15 lg:hidden">
							<WppButton className="h-14 text-xs" />
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
}
