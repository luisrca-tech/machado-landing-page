import { Fade } from "react-awesome-reveal";
import { WppButton } from "../ui/WppButton";

export function SocialProof() {
	return (
		<Fade triggerOnce direction="up" cascade damping={0.15}>
			<div className="container mx-auto px-4">
				<h2 className="mb-2 text-center font-bold text-3xl text-primary">
					Avaliação dos nossos clientes
				</h2>
				<div className="mx-auto mb-10 h-1.5 w-20 bg-[#c4a35a]" />

				<div className="mx-auto max-w-3xl text-center">
					<p className="mb-8 text-gray-700 text-lg">
						O Machado Advogados tem 69 avaliações no Google. Todas com 5
						estrelas. Sendo um dos escritórios de advocacia mais bem avaliados
						da nossa região.
					</p>

					<div className="mb-12">
						<div className="h-[400px] w-full overflow-hidden rounded-lg">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.1234567890123!2d-49.089273!3d-16.707452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ee903263cceb7%3A0x5cebe2bd7902faed!2sMachado%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1710864000000!5m2!1spt-BR!2sbr"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								title="Localização do Machado Advogados em Senador Canedo"
							/>
						</div>
					</div>

					<div className="flex items-center justify-center">
						<WppButton text="Fale com um advogado agora pelo WhatsApp" />
					</div>
				</div>

				<span className="sr-only">
					escritório de advocacia bem avaliado em Senador Canedo
				</span>
			</div>
		</Fade>
	);
}
