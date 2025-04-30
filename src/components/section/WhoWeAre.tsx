import Image from "next/image";
import RafaelMachado from "public/images/rafaelMachadoAboutUs.jpg";
import { Fade } from "react-awesome-reveal";

export function WhoWeAre() {
	return (
		<Fade triggerOnce direction="up" cascade damping={0.15}>
			<div className="flex min-h-[400px] flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16">
				{/* Foto do Rafael */}
				<div className="flex w-full justify-center lg:w-2/5 lg:justify-end">
					<div className="h-40 w-40 overflow-hidden rounded-full border-4 border-white bg-white shadow-lg lg:h-64 lg:w-64">
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
				{/* Texto */}
				<div className="flex w-full flex-col items-center justify-center text-center lg:w-3/5 lg:items-start lg:text-left">
					<h2 className="mb-6 font-bold text-3xl text-amber-100">
						Quem está por trás do atendimento?
					</h2>
					<p className="mb-4 font-medium text-black text-lg">
						Quem cuidará pessoalmente do seu atendimento será o{" "}
						<span className="font-bold text-black">
							Dr. Rafael Machado Nascimento
						</span>
						,
						<br />
						advogado formado pela PUC/GO, pós-graduando em Direito do Trabalho e
						Processo do Trabalho pelo IGD,
						<br />e atual Presidente da Comissão de Direito do Trabalho da OAB
						Senador Canedo/GO (2025–2027).
					</p>
					<p className="font-medium text-black text-lg">
						Você será atendido diretamente por ele, com orientação clara, humana
						e sigilosa.
						<br />
						Nada de atendente. Nada de enrolação. Aqui é direto com o
						especialista.
					</p>
				</div>
			</div>
		</Fade>
	);
}
