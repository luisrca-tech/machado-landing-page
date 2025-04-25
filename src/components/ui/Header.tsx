import Image from "next/image";
import Link from "next/link";
import Logo from "public/favicon.png";

import { scrollHeaderItems } from "~/constants/scrollHeaderItems";

export function Header() {
	return (
		<header className="fixed top-0 right-0 left-0 z-50 mx-auto w-full max-w-[120rem] bg-cyan-500 3xl:px-40 px-5 py-2 transition-colors duration-200 lg:px-20">
			<div className="hidden items-center justify-between lg:flex">
				<Link href="#hero" className="h-20 w-40">
					<Image
						src={Logo}
						alt="Logo"
						className="h-full w-full object-center invert"
					/>
				</Link>
				<nav>
					<ul className="flex items-center gap-20">
						{scrollHeaderItems.map((item) => (
							<li key={item.id}>
								<Link
									className="font-medium text-base text-white/90 hover:text-gray-900"
									href={`#${item.id}`}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
