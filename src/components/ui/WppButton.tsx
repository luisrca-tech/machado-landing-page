import Link from "next/link";
import { cn } from "~/lib/utils";

export function WppButton({
	className,
	text,
}: {
	className?: string;
	text?: string;
}) {
	return (
		<Link
			href="https://wa.me/+556284015585"
			className={cn(
				"flex w-fit transform items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-bold text-white leading-6 transition-transform duration-300 hover:scale-105",
				className,
			)}
			target="_blank"
		>
			<i className="fab fa-whatsapp mr-2 text-xl" />
			<span>{text || "Fale com um advogado trabalhista agora."}</span>
		</Link>
	);
}

export function FloatingWppButton() {
	return (
		<Link
			href="https://wa.me/+556284015585"
			className="fixed right-6 bottom-6 z-50 flex h-14 w-14 transform items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
			target="_blank"
		>
			<i className="fab fa-whatsapp text-2xl" />
		</Link>
	);
}
