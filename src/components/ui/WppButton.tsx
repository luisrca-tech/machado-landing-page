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
				"flex min-h-[3.75rem] w-fit transform items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-bold text-white leading-1.5 transition-transform duration-300 hover:scale-105",
				className,
			)}
			target="_blank"
		>
			<i className="fab fa-whatsapp mr-2 text-xl" />
			<span>{text || "Fale com um advogado trabalhista agora."}</span>
		</Link>
	);
}
