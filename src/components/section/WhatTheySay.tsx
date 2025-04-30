import Image from "next/image";
import GoogleIcon from "public/icons/google.jpeg";
import { Fade } from "react-awesome-reveal";
import { Marquee } from "../magicui/marquee";

const testimonials = [
	{
		id: 1,
		name: "João S.",
		text: "Fui muito bem atendido. Em pouco tempo já estava com tudo resolvido. Recomendo!",
		rating: 5,
	},
	{
		id: 2,
		name: "Maria F.",
		text: "Tive todas as minhas dúvidas respondidas com clareza. Atendimento humanizado de verdade.",
		rating: 5,
	},
	{
		id: 3,
		name: "Carlos A.",
		text: "Falei no WhatsApp e recebi orientação no mesmo dia. Nota 10!",
		rating: 5,
	},
];

export function WhatTheySay() {
	return (
		<Fade triggerOnce direction="up" cascade damping={0.15}>
			<section className="relative overflow-hidden bg-[#0f1b2b] py-16">
				{/* Background texture overlay */}
				<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CiAgPHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiIGZpbGw9Im5vbmUiLz4KICA8cGF0aCBkPSJNMzAgMzBoMXYxaC0xeiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4=')] opacity-10"></div>

				<div className="container relative z-10 mx-auto px-4">
					<div className="mb-12 text-center">
						<h2 className="mb-4 font-bold text-3xl text-white">
							O que dizem sobre nós?
						</h2>
						<p className="mx-auto max-w-3xl text-gray-300">
							O Dr. Rafael Machado é sócio da Machado Advogados, que possui
							excelência em atendimento, estando aberto há mais de 5 anos no
							mercado, com atuação em mais de 1.000 processos e clientes
							satisfeitos em todo país.
						</p>
					</div>

					<Marquee className="py-4" pauseOnHover={true}>
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.id}
								className="mx-4 flex w-96 flex-col justify-between rounded-lg bg-white p-6 shadow-lg"
							>
								<div className="mb-3 flex items-center">
									<div className="mr-2 flex">
										{[...Array(testimonial.rating)].map((_, i) => (
											<span key={i} className="text-[#4285F4]">
												⭐
											</span>
										))}
									</div>
									<div className="flex items-center">
										<Image
											src={GoogleIcon}
											alt="Google Review"
											width={20}
											height={20}
											className="mr-1"
										/>
										<span className="text-gray-600 text-sm">Google</span>
									</div>
								</div>
								<p className="mb-4 text-gray-800">"{testimonial.text}"</p>
								<p className="font-medium text-[#4285F4]">
									— {testimonial.name}
								</p>
							</div>
						))}
					</Marquee>
				</div>
			</section>
		</Fade>
	);
}
