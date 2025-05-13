export function Footer() {
	return (
		<footer className="mx-auto w-full max-w-[120rem] bg-[#0f1b2b] 3xl:px-40 px-4 py-10 text-sm text-white lg:px-20 lg:py-20">
			<div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">
				{/* Legal */}
				<div className="mb-6 md:mb-0 lg:col-span-2">
					<h3 className="mb-2 font-bold text-base">Aviso Legal</h3>
					<p className="mb-2 opacity-80">
						Este site não faz parte do Google, Facebook ou da Meta Platforms,
						Inc. Não oferecemos serviços oficiais do governo, não praticamos
						fraude, e não atuamos no mercado de criptoativos ou outros serviços
						não jurídicos.
					</p>
					<p className="opacity-80">
						Este é um canal exclusivo do escritório Machado Advogados, CNPJ n.
						35.836.306/0001-67, e do advogado Rafael Machado Nascimento, OAB/GO
						67.989.
					</p>
				</div>
				{/* Institucional */}
				<div className="mb-6 md:mb-0">
					<h3 className="mb-2 font-bold text-base">Institucional</h3>
					<a
						href="http://machadoadvogado.com/r"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[#c4a35a] underline underline-offset-4 transition hover:text-white"
					>
						🌐 Acesse o site institucional: www.seuescritorio.com.br
					</a>
				</div>
				{/* Serviços */}
				{/* <div>
					<h3 className="mb-2 font-bold text-base">
						Outros serviços jurídicos
					</h3>
					<ul className="space-y-2">
						<li>
							<a
								href="#"
								className="text-[#c4a35a] underline underline-offset-4 transition hover:text-white"
							>
								🔗 Saiba mais sobre Rescisão Indireta
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-[#c4a35a] underline underline-offset-4 transition hover:text-white"
							>
								🔗 Saiba mais sobre Recusa de Atendimento por Plano de Saúde
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-[#c4a35a] underline underline-offset-4 transition hover:text-white"
							>
								🔗 Outros temas jurídicos disponíveis aqui
							</a>
						</li>
					</ul>
				</div> */}
			</div>
			<div className="mt-8 text-center text-xs opacity-60">
				&copy; {new Date().getFullYear()} Machado Advogados. Todos os direitos
				reservados.
			</div>
		</footer>
	);
}
