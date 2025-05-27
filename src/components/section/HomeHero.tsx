import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, CheckCircle, MapPin, Phone, Scale, Users } from "lucide-react";
import Image from "next/image";
import OfficePhoto from "public/images/officePhoto.jpg";

import Link from "next/link";
import { WppButton } from "../ui/WppButton";

export function HomeHeroSection() {
	return (
		<div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 pt-8">
			{/* Background Elements */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

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
							<h1 className="font-bold text-5xl leading-tight lg:text-7xl">
								<span className="text-white">Advocacia de</span>
								<br />
								<span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
									Excelência
								</span>
							</h1>

							<div className="max-w-2xl text-slate-300 text-xl leading-relaxed lg:text-2xl">
								Mais de{" "}
								<span className="font-semibold text-amber-400">7 anos</span>{" "}
								defendendo seus direitos em
								<span className="font-semibold text-amber-400">
									{" "}
									Senador Canedo
								</span>{" "}
								e todo o Brasil
							</div>
						</div>

						{/* Stats Cards */}
						<div className="grid grid-cols-3 gap-4">
							<Card className="border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
								<div className="font-bold text-2xl text-amber-400">+1.000</div>
								<div className="text-slate-300 text-sm">Processos</div>
							</Card>
							<Card className="border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
								<div className="font-bold text-2xl text-amber-400">7+</div>
								<div className="text-slate-300 text-sm">Anos</div>
							</Card>
							<Card className="border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
								<div className="font-bold text-2xl text-amber-400">6</div>
								<div className="text-slate-300 text-sm">Estados</div>
							</Card>
						</div>

						{/* Specialties */}
						<div className="space-y-4">
							<h3 className="font-semibold text-lg text-white">
								Áreas de atuação:
							</h3>
							<div className="grid grid-cols-2 gap-3">
								{[
									"Direito Civil",
									"Direito Trabalhista",
									"Direito Previdenciário",
									"Direito Penal",
									"Direito Família",
									"Direito Previdenciário",
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

						<div className="grid grid-cols-1 gap-5">
							<Link
								href="https://www.google.com/maps?ll=-16.695062,-49.102833&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=6695694574423309037"
								className="flex w-full cursor-pointer items-center justify-center rounded-xl border-2 border-white/20 bg-white px-8 py-4 text-black text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:text-white lg:w-fit"
								target="_blank"
							>
								<MapPin className="mr-2 h-5 w-5" />
								Nossa Localização
							</Link>
							<WppButton
								text="Fale com um advogado trabalhista agora"
								className="bg-gradient-to-r from-[#25D366] to-[#20a854] px-8 py-4 font-semibold text-base text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:from-[#20a854] hover:to-[#1a8a47] hover:shadow-green-500/25 lg:text-lg"
							/>
						</div>
					</div>

					{/* Right Column - Office Info & Trust Elements */}
					<div className="animation-delay-300 relative animate-fade-in">
						{/* Office Card */}
						<div className="relative">
							<Card className="border-white/20 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur-sm">
								<Image
									src={OfficePhoto}
									alt="Machado Advogados - Escritório de Advocacia"
									className="mb-6 h-96 w-full rounded-lg object-cover object-center"
								/>

								{/* Office Name and Description */}
								<div className="space-y-2 text-center">
									<h3 className="font-bold text-2xl text-white">
										Machado Advogados
									</h3>
									<p className="font-medium text-amber-400">
										Excelência em Advocacia
									</p>
									<p className="text-slate-300 text-sm">Desde 2015</p>
								</div>

								{/* Office Features */}
								<div className="mt-6 space-y-3">
									<div className="flex items-center gap-2 text-slate-300">
										<Award className="h-4 w-4 text-amber-400" />
										<span className="text-sm">Escritório Especializado</span>
									</div>
									<div className="flex items-center gap-2 text-slate-300">
										<Users className="h-4 w-4 text-amber-400" />
										<span className="text-sm">Equipe Qualificada</span>
									</div>
									<div className="flex items-center gap-2 text-slate-300">
										<Scale className="h-4 w-4 text-amber-400" />
										<span className="text-sm">Atendimento Personalizado</span>
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
								<div className="font-bold text-green-400 text-lg">+500</div>
								<div className="text-slate-300 text-xs">Casos Resolvidos</div>
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
