import { Fade } from "react-awesome-reveal";
import { WppButton } from "../ui/WppButton";

export function Acting() {
	return (
		<Fade triggerOnce direction="up" cascade damping={0.15}>
			<div className="container mx-auto px-4">
				<h2 className="mb-2 text-center font-bold text-3xl text-white">
					Em quais casos um advogado trabalhista pode te ajudar?
				</h2>
				<div className="mx-auto mb-10 h-0.5 w-20 bg-white" />

				<p className="mb-8 text-center font-bold text-lg text-white">
					Descobrir se sua situação pode ser avaliada por um advogado{" "}
					<span className="text-[#c4a35a]">é bem simples</span>: <br /> caso
					você <span className="text-[#c4a35a]">desconfie</span> que tem algo de
					errado fale agora mesmo. Veja alguns <br /> casos mais comuns:
				</p>

				<div className="my-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
					{[
						{ icon: "file-signature", text: "Sua carteira não foi assinada" },
						{ icon: "user-slash", text: "Foi demitido e não recebeu" },
						{ icon: "clock", text: "Fez horas extras e não recebeu" },
						{ icon: "piggy-bank", text: "A empresa não deposita o FGTS" },
						{ icon: "briefcase", text: "Trabalha como PJ e tem horário" },
						{ icon: "radiation", text: "Não recebe insalubridade" },
						{ icon: "user-injured", text: "Teve um acidente no trabalho" },
						{ icon: "baby", text: "Foi despedida grávida" },
					].map((item) => (
						<div
							key={item.text}
							className="card-hover flex items-center rounded-lg bg-[rgba(255,255,255,0.15)] p-4 shadow-md transition-all duration-300 hover:shadow-lg"
						>
							<div className="mr-4 text-[#c4a35a] text-xl">
								<i className={`fas fa-${item.icon}`} />
							</div>
							<p className="font-medium text-lg text-white">{item.text}</p>
						</div>
					))}
				</div>

				<div className="mx-auto mb-8 flex max-w-3xl flex-col items-center justify-center gap-4 text-center">
					<p className="mb-6 font-bold text-lg text-white">
						Qualquer que seja sua situação, é importante falar com um advogado.
					</p>

					<WppButton text="Tire sua dúvida agora pelo WhatsApp" />
				</div>
			</div>
		</Fade>
	);
}
