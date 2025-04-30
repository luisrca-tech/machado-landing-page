import { HelpCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WhatsappIcon from "public/icons/wpp.png";
import { Fade } from "react-awesome-reveal";
import { faqItems } from "~/constants/faqItems";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";

export function Faq() {
	return (
		<Fade triggerOnce direction="up" cascade damping={0.15}>
			<div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
				<div className="mb-4 flex flex-col items-center gap-2">
					<HelpCircle className="h-12 w-12 text-blue-600" />
					<h2 className="text-center font-bold text-3xl">
						Ficou com alguma dúvida? A gente responde:
					</h2>
				</div>
				<Accordion type="single" collapsible className="w-full">
					{faqItems.map((item, i) => (
						<AccordionItem value={`item-${i + 1}`} key={item.question}>
							<AccordionTrigger className="flex gap-2 font-semibold text-lg">
								<span>{item.question}</span>
							</AccordionTrigger>
							<AccordionContent>{item.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
				<Link
					href="https://wa.me/+556284015585"
					className="inline-flex items-center gap-2 rounded-md bg-green-500 px-6 py-3 text-white transition-all duration-300 hover:bg-green-600"
					target="_blank"
				>
					<Image src={WhatsappIcon} alt="Whatsapp" width={24} height={24} />
					<span>Fale conosco agora</span>
				</Link>
			</div>
		</Fade>
	);
}
