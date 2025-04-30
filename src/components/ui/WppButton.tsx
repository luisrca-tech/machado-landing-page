import Image from "next/image";
import Link from "next/link";
import { cn } from "~/lib/utils";

export function WppButton({ className }: { className?: string }) {
	return (
		<Link
			href="https://wa.me/+556284015585"
			className={cn(
				"flex min-h-[3.75rem] w-fit transform items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-2 font-bold text-white transition-transform duration-300 hover:scale-105",
				className,
			)}
			target="_blank"
		>
			<i className="fab fa-whatsapp mr-2 text-xl" />
			<span>Fale com um advogado trabalhista agora.</span>
		</Link>
	);
}
