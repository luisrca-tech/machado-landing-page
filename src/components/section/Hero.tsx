import Image from "next/image";
import Link from "next/link";
import WhatsappIcon from "public/icons/wpp.png";
import LogoTransparent from "public/images/logoTransparent1.png";
import MachadoAdvogadosPanel from "public/images/machadoAdvogadosEntry.png";
import HeroImage from "public/images/rafaelBgTransparent.png";
import { Fade } from "react-awesome-reveal";

export function HeroSection() {
	return (
		<Fade triggerOnce direction="down" cascade damping={0.15}>
			<div className="relative grid grid-cols-1 items-center justify-center gap-5 lg:grid-cols-2 lg:items-start lg:justify-start">
				<div className="z-10 flex flex-col items-center justify-center lg:items-start lg:justify-start">
					<div className="h-32 w-32 md:h-48 md:w-48 lg:h-56 lg:w-72">
						<Image
							src={LogoTransparent}
							alt="Logo"
							className="h-full w-full object-center"
							priority
						/>
					</div>
					<div className="flex flex-col items-center justify-center gap-2 text-center lg:items-start lg:justify-start lg:text-start">
						<h1 className="font-medium text-amber-100 text-sm md:text-xl">
							DR. RAFAEL MACHADO NASCIMENTO – ADVOGADO RECOMENDADO
						</h1>
						<span className="font-medium text-amber-100 text-sm md:text-xl">
							Fale com um advogado trabalhista agora.
						</span>
						<span className="font-medium text-amber-100 text-sm md:text-xl">
							Algo errado no seu trabalho? Descubra o que fazer.
						</span>
						{/* This is the desktop button */}
						<Link
							href="https://wa.me/+556284015585"
							className="mt-4 hidden items-center justify-center gap-2 rounded-md bg-green-500 px-4 py-2 text-emerald-50 text-lg transition-all duration-300 hover:bg-emerald-300 hover:text-green-500 lg:flex"
							target="_blank"
						>
							<Image
								src={WhatsappIcon}
								alt="Whatsapp"
								width={26}
								height={26}
								className=""
							/>
							<span>Fale com um advogado trabalhista agora.</span>
						</Link>
						<span className="font-medium text-amber-100 text-sm md:text-xl">
							Atendimento sigiloso • Resposta rápida • Análise gratuita
						</span>
					</div>
				</div>
				<div className="relative h-full w-full lg:static">
					<Image
						src={MachadoAdvogadosPanel}
						alt="Machado Advogados"
						className="h-full w-full rounded-md object-cover md:max-h-[80%] lg:min-h-full"
					/>
					<div className="lg:-translate-x-1/2 absolute top-0 flex h-full w-full items-center justify-center md:h-[80%] lg:top-11 lg:hidden lg:h-full 2xl:block">
						<Image
							src={HeroImage}
							alt="Hero"
							className="h-full w-full object-contain"
						/>
						<Link
							href="https://wa.me/+556284015585"
							className="absolute right-0 bottom-20 left-0 mx-4 mt-4 flex items-center justify-center gap-2 rounded-md bg-green-500 p-2 text-emerald-50 text-xs transition-all duration-300 hover:bg-emerald-300 hover:text-green-500 md:bottom-50 md:text-base lg:hidden"
							target="_blank"
						>
							<Image
								src={WhatsappIcon}
								alt="Whatsapp"
								width={26}
								height={26}
								className=""
							/>
							<span>Fale com um advogado trabalhista agora.</span>
						</Link>
					</div>
				</div>
			</div>
		</Fade>
	);
}
