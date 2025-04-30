import Image from "next/image";
import Link from "next/link";
import WhatsappIcon from "public/icons/wpp.png";
import { Fade } from "react-awesome-reveal";
import { actingCasesItems } from "~/constants/actingCasesItems";

export function Acting() {
	return (
		<Fade triggerOnce direction="up" cascade damping={0.15}>
			<div className="relative overflow-hidden bg-[#0f1b2b]">
				{/* Background texture overlay */}
				<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNMzAgMzBoMXYxaC0xeiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=')] opacity-10"></div>

				<div className="relative">
					<div className="mb-10 text-center">
						<h2 className="mb-4 font-bold text-3xl text-white">
							Em quais casos um advogado trabalhista pode te ajudar?
						</h2>
						<p className="mx-auto max-w-3xl text-gray-300">
							É bem simples saber se sua situação pode ser avaliada por um
							advogado trabalhista. Se você trabalha e desconfia que passa por
							situação ilegal no seu trabalho, fale agora mesmo. Veja alguns
							casos mais comuns:
						</p>
					</div>

					<div className="mx-auto mb-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
						{actingCasesItems.map((item, i) => (
							<div
								key={i}
								className="flex items-center gap-4 rounded-lg bg-white/10 p-4 backdrop-blur-sm"
							>
								<div className="flex-shrink-0 rounded-full bg-white/20 p-3 text-white text-xl">
									📌
								</div>
								<p className="text-white">{item.title}</p>
							</div>
						))}
					</div>

					<div className="text-center">
						<p className="mb-6 text-lg text-white">
							Qualquer que seja sua situação, é importante falar com um
							advogado.
						</p>
						<Link
							href="https://wa.me/+556284015585"
							className="inline-flex items-center gap-2 rounded-md bg-green-500 px-6 py-3 text-white transition-all duration-300 hover:bg-green-600"
							target="_blank"
						>
							<Image src={WhatsappIcon} alt="Whatsapp" width={24} height={24} />
							<span>
								👉 Clique no botão abaixo e tire sua dúvida agora pelo WhatsApp.
							</span>
						</Link>
					</div>
				</div>
			</div>
		</Fade>
	);
}
