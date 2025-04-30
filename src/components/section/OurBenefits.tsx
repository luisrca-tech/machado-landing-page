import { CheckCircle, MessageCircle, UserCheck } from "lucide-react";
import { Fade } from "react-awesome-reveal";

export function OurBenefits() {
	return (
		<Fade triggerOnce direction="up" cascade damping={0.15}>
			<div className="flex flex-col gap-5 lg:gap-9">
				<h2 className="mb-12 text-center font-medium text-3xl text-black">
					Por que falar com um advogado trabalhista agora?
				</h2>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{/* Card 1 */}
					<div className="rounded-lg border border-gray-100 bg-white/80 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
						<div className="flex flex-col items-center md:items-start">
							<div className="mb-4 text-4xl">💰</div>
							<h3 className="mb-3 text-center font-semibold text-xl md:text-left">
								Você pode estar perdendo dinheiro e nem sabe.
							</h3>
							<p className="text-center text-gray-700 md:text-left">
								Seus direitos valem dinheiro. Se você não está recebendo, esse
								dinheiro está ficando com a empresa.
							</p>
						</div>
					</div>

					{/* Card 2 */}
					<div className="rounded-lg border border-gray-100 bg-white/80 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
						<div className="flex flex-col items-center md:items-start">
							<div className="mb-4 text-4xl">💬</div>
							<h3 className="mb-3 text-center font-semibold text-xl md:text-left">
								Sem custos iniciais.
							</h3>
							<p className="text-center text-gray-700 md:text-left">
								Você terá seu caso analisado por um advogado especialista que
								vai tirar todas suas dúvidas pelo WhatsApp — sem pagar nada por
								isso.
							</p>
						</div>
					</div>

					{/* Card 3 */}
					<div className="rounded-lg border border-gray-100 bg-white/80 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
						<div className="flex flex-col items-center md:items-start">
							<div className="mb-4 text-4xl">✋</div>
							<h3 className="mb-3 text-center font-semibold text-xl md:text-left">
								Quem toma a decisão é VOCÊ.
							</h3>
							<p className="text-center text-gray-700 md:text-left">
								Aqui ninguém te pressiona. Você será orientado com clareza e
								decide o que fazer no seu tempo.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
}
