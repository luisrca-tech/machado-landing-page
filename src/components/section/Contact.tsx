import { Fade } from "react-awesome-reveal";
import { WppButton } from "../ui/WppButton";

export function Contact() {
	return (
		<Fade triggerOnce direction="up" cascade damping={0.15}>
			<div className="container mx-auto px-4">
				<h2 className="mb-2 text-center font-bold text-3xl text-primary">
					Onde estamos
				</h2>
				<div className="mx-auto mb-10 h-1.5 w-20 bg-[#c4a35a]" />

				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
					{/* Contact Information */}
					<div className="flex flex-col gap-6">
						<div className="space-y-4">
							<h3 className="font-bold text-primary text-xl">
								Machado Advogados
							</h3>
							<p className="text-gray-700">
								Rua 10, Quadra 02, Lote 09-A
								<br />
								Conjunto Uirapuru
								<br />
								Senador Canedo – GO, CEP 75261-211
								<br />
								Em frente ao Fórum de Senador Canedo
							</p>
						</div>

						<div className="space-y-4">
							<p className="flex items-center gap-2 text-gray-700">
								<i className="fas fa-phone text-[#c4a35a]" />
								(62) 99475-5652 (WhatsApp e telefone direto)
							</p>
							<p className="flex items-center gap-2 text-gray-700">
								<i className="fas fa-envelope text-[#c4a35a]" />
								contato@machadoadvogado.com.br
							</p>
							<p className="flex items-center gap-2 text-gray-700">
								<i className="fas fa-clock text-[#c4a35a]" />
								Segunda à sexta-feira, das 8h às 18h
							</p>
						</div>

						<WppButton text="Fale com um advogado agora no WhatsApp" />
					</div>

					{/* Map */}
					<div className="h-[400px] w-full overflow-hidden rounded-lg">
						<iframe
							title="Localização do Machado Advogados em Senador Canedo"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.1234567890123!2d-49.089273!3d-16.707452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQyJzI2LjgiUyA0OcKwMDUnMjEuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
							width="100%"
							height="100%"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
				</div>

				<span className="sr-only">
					advogado em Senador Canedo, em frente ao Fórum de Senador Canedo
				</span>
			</div>
		</Fade>
	);
}
