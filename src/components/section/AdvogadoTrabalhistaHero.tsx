import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, CheckCircle, MapPin, Phone, Scale, Users } from "lucide-react";
import Image from "next/image";
import Rafael from "public/images/rafaelBgTransparent.png";

import Link from "next/link";
import { WppButton } from "../ui/WppButton";

export function AdvogadoTrabalhistaHeroSection() {
	return (
		<div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 pt-8">
			{/* Background Elements */}
			<div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-20" />

			{/* Gradient Overlays */}
			<div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-amber-500/10 to-transparent" />
			<div className="absolute right-0 bottom-0 h-1/2 w-1/2 bg-gradient-to-l from-blue-600/10 to-transparent" />

			<div className="container relative z-10 mx-auto px-4 py-20">
				<div className="grid min-h-[80vh] items-center gap-16 lg:grid-cols-2">
					{/* Left Column - Content */}
					<div className="animate-fade-in space-y-8">
						{/* Badge */}
						<Badge className="border-amber-500/30 bg-amber-500/20 px-4 py-2 font-medium text-amber-300 text-sm">
							<Scale className="mr-2 h-4 w-4" />
							Escritório Especializado
						</Badge>

						{/* Main Heading */}
						<div className="space-y-6">
							<h1 className="font-bold text-2xl leading-tight lg:text-4xl">
								<span className="text-white">
									Fale com um advogado trabalhista
								</span>
								<br />
								<span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
									agora
								</span>
							</h1>

							<div className="max-w-2xl text-slate-300 text-xl leading-relaxed lg:text-3xl">
								algo errado no seu trabalho?
								<span className="font-semibold text-amber-400">
									{" "}
									descubra oque fazer
								</span>{" "}
							</div>
						</div>

						{/* Specialties */}
						<div className="space-y-4">
							<div className="grid grid-cols-2 gap-3">
								{[
									"Atendimento sigiloso ",
									"Resposta rápida ",
									"Análise gratuita",
								].map((area, index) => (
									<div
										key={index + area}
										className="flex items-center gap-2 text-slate-300"
									>
										<CheckCircle className="h-4 w-4 text-amber-400" />
										<span className="text-sm">{area}</span>
									</div>
								))}
							</div>
						</div>

						<WppButton
							text="Fale com um advogado trabalhista agora"
							className="bg-gradient-to-r from-[#25D366] to-[#20a854] px-8 py-4 font-semibold text-base text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-[#20a854] hover:to-[#1a8a47] hover:shadow-green-500/25 lg:mt-20 lg:text-lg"
						/>
					</div>

					{/* Right Column - Professional Image & Trust Elements */}
					<div className="animation-delay-300 relative animate-fade-in">
						{/* Professional Photo */}
						<div className="relative">
							<Card className="border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur-sm">
								<Image
									src={Rafael}
									alt="Dr. Rafael Machado - Advogado Especialista"
									className="mb-6 h-96 w-full rounded-lg object-cover object-top"
								/>

								{/* Name and Title */}
								<div className="space-y-2 text-center">
									<h3 className="font-bold text-2xl text-white">
										Dr. Rafael Machado
									</h3>
									<p className="font-medium text-amber-400">
										Advogado Especialista
									</p>
									<p className="text-slate-300 text-sm">OAB/GO 00.000</p>
								</div>

								{/* Credentials */}
								<div className="mt-6 space-y-3">
									<div className="flex items-center gap-2 text-slate-300">
										<Award className="h-4 w-4 text-amber-400" />
										<span className="text-sm">
											Pós-graduado em Direito Civil
										</span>
									</div>
									<div className="flex items-center gap-2 text-slate-300">
										<Users className="h-4 w-4 text-amber-400" />
										<span className="text-sm">Membro da OAB Goiás</span>
									</div>
									<div className="flex items-center gap-2 text-slate-300">
										<Scale className="h-4 w-4 text-amber-400" />
										<span className="text-sm">Especialista em Litígios</span>
									</div>
								</div>
							</Card>

							{/* Floating Elements */}
							<div className="-top-4 -right-4 absolute animate-pulse rounded-full bg-amber-500 p-3 text-white shadow-lg">
								<Award className="h-6 w-6" />
							</div>

							<div className="-bottom-4 -left-4 animation-delay-1000 absolute animate-pulse rounded-full bg-blue-600 p-3 text-white shadow-lg">
								<CheckCircle className="h-6 w-6" />
							</div>
						</div>

						{/* Trust Indicators */}
						<div className="mt-8 grid grid-cols-2 gap-4">
							<Card className="border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
								<div className="font-bold text-green-400 text-lg">100%</div>
								<div className="text-slate-300 text-xs">Taxa de Sucesso</div>
							</Card>
							<Card className="border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
								<div className="font-bold text-blue-400 text-lg">24h</div>
								<div className="text-slate-300 text-xs">Tempo Resposta</div>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
