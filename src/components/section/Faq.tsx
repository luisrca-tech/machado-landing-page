import { Plus } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { faqItems } from "~/constants/faqItems";
import { WppButton } from "../ui/WppButton";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion";

export function Faq() {
	return (
		<Fade triggerOnce direction="up" cascade damping={0.15}>
			<div className="container mx-auto px-4">
				<h2 className="mb-12 text-center font-bold text-3xl text-black">
					Ficou com alguma dúvida? A gente responde:
				</h2>

				<div className="mx-auto max-w-3xl">
					<Accordion type="single" collapsible>
						{faqItems.map((item) => (
							<AccordionItem
								key={item.question}
								value={`item-${item.question}`}
								className="border-gray-200 border-b pb-4"
							>
								<AccordionTrigger className="font-bold text-black text-lg hover:no-underline">
									<span>{item.question}</span>
									<Plus className="size-5 text-[#c4a35a]" />
								</AccordionTrigger>
								<AccordionContent className="text-gray-700">
									{item.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>

				<div className="mt-12 flex flex-col items-center justify-center">
					<p className="mb-6 text-xl">
						Se ficou ainda alguma dúvida. Fale diretamente com a gente
					</p>
					<WppButton text="Fale conosco agora!" />
				</div>
			</div>
		</Fade>
	);
}
