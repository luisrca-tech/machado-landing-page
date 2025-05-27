"use client";

import { Briefcase, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "public/favicon.png";
import { useEffect, useState } from "react";

import { scrollHeaderItems } from "~/constants/scrollHeaderItems";
import { cn } from "~/lib/utils";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "./sheet";

export function Header() {
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();
	const isHome = pathname === "/";

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 50;
			if (isScrolled !== scrolled) {
				setScrolled(isScrolled);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [scrolled]);

	return (
		<div
			className={cn(
				"fixed top-0 right-0 left-0 z-50 w-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 backdrop-blur-sm transition-colors duration-300",
				scrolled ? "bg-white/70 shadow-md" : "bg-transparent",
			)}
		>
			<header className="mx-auto w-full max-w-[120rem]">
				<div className="flex items-center justify-between 3xl:px-40 px-4 py-2 lg:px-20">
					<Link href="/" className="h-10 w-20 lg:h-20 lg:w-20">
						<Image
							src={Logo}
							alt="Logo"
							className={`h-full w-full object-cover ${
								scrolled ? "" : "invert"
							}`}
						/>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden lg:flex">
						<ul className="flex items-center gap-20">
							<li>
								<Link
									className={`font-medium text-base ${
										scrolled
											? "text-gray-800 hover:text-amber-600"
											: "text-white/90 hover:text-gray-900"
									} flex items-center gap-2`}
									href="/advogado-trabalhista"
								>
									<Briefcase className="h-5 w-5" />
									Advogado Trabalhista
								</Link>
							</li>
						</ul>
					</nav>

					{/* Mobile Navigation */}
					<Sheet>
						<SheetTrigger className="pr-5 lg:hidden">
							<MenuIcon
								className={scrolled ? "text-gray-800" : "text-amber-100"}
							/>
						</SheetTrigger>
						<SheetContent className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 backdrop-blur-sm transition-colors duration-300">
							<SheetHeader>
								<SheetTitle className="text-white">
									Menu de navegação
								</SheetTitle>
							</SheetHeader>
							<nav className="flex w-full flex-col items-center justify-center">
								<ul className="flex w-full flex-col items-center justify-center">
									<li className="w-full border-white/50 border-b py-3 last:border-b-0">
										<SheetClose
											className="flex items-center justify-center text-white"
											asChild
										>
											<Link
												href="/advogado-trabalhista"
												className="flex items-center gap-2"
											>
												<Briefcase className="h-5 w-5" />
												Advogado Trabalhista
											</Link>
										</SheetClose>
									</li>
								</ul>
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</header>
		</div>
	);
}
