import { Fade } from "react-awesome-reveal";
import { WppButton } from "../ui/WppButton";

const practiceAreas = [
	{
		icon: "briefcase",
		title: "Direito Trabalhista",
		description:
			"Rescisão indireta, verbas não pagas, estabilidade, demissão por justa causa, defesa para empresas e outras atuações.",
		srText: "Advogado trabalhista em Senador Canedo",
	},
	{
		icon: "users",
		title: "Direito de Família",
		description:
			"Divórcios, pensão, guarda dos filhos, reconhecimento de união estável e outras atuações.",
		srText: "Advogado de família em Senador Canedo",
	},
	{
		icon: "gavel",
		title: "Direito Penal",
		description:
			"Defesa em inquéritos, audiência de custódia, prisão preventiva e processos criminais.",
		srText: "Advogado criminalista em Senador Canedo",
	},
	{
		icon: "balance-scale",
		title: "Direito Cível",
		description: "Cobranças, danos morais, contratos e litígios particulares.",
		srText: "Advogado cível em Senador Canedo",
	},
	{
		icon: "home",
		title: "Direito Imobiliário",
		description:
			"Compra e venda, rescisão contratual, contratos, inventário e regularização de imóveis.",
		srText: "Advogado imobiliário em Senador Canedo",
	},
	{
		icon: "user-tie",
		title: "Direito Previdenciário",
		description:
			"Aposentadoria, auxílio-doença, BPC/LOAS e revisão da vida toda.",
		srText: "Advogado previdenciário em Senador Canedo",
	},
];

export function AreasOfPractice() {
	return (
		<Fade triggerOnce direction="up" cascade damping={0.15}>
			<div className="container mx-auto px-4">
				<h2 className="mb-2 text-center font-bold text-3xl text-primary">
					Áreas de Atuação
				</h2>
				<div className="mx-auto mb-10 h-1.5 w-20 bg-[#c4a35a]" />

				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
					{practiceAreas.map((area) => (
						<div
							key={area.title}
							className="card-hover rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
						>
							<div className="mb-4 flex justify-center text-4xl text-[#c4a35a]">
								<i className={`fas fa-${area.icon}`} />
							</div>
							<h3 className="mb-3 text-center font-bold text-primary text-xl">
								{area.title}
							</h3>
							<p className="text-center text-gray-700">{area.description}</p>
							<span className="sr-only">{area.srText}</span>
						</div>
					))}
				</div>

				<div className="mt-12 flex justify-center">
					<WppButton text="Precisa de ajuda? Fale com a gente no WhatsApp" />
				</div>
			</div>
		</Fade>
	);
}
