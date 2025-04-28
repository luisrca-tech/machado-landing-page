import { faqItems } from "~/constants/faqItems";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { HelpCircle } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";
import WhatsappIcon from "public/icons/wpp.png";

export function Faq() {
  return (
    <Fade
      triggerOnce
      direction="up"
      cascade
      damping={0.15}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2 mb-4">
          <HelpCircle className="w-12 h-12 text-blue-600" />
          <h2 className="text-3xl font-bold text-center">
            Ficou com alguma dúvida? A gente responde:
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full"
        >
          {faqItems.map((item, i) => (
            <AccordionItem
              value={`item-${i + 1}`}
              key={item.question}
            >
              <AccordionTrigger className="text-lg font-semibold flex gap-2">
                <span>{item.question}</span>
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Link
          href="https://wa.me/+556284015585"
          className="bg-green-500 text-white px-6 py-3 rounded-md inline-flex items-center gap-2 hover:bg-green-600 transition-all duration-300"
          target="_blank"
        >
          <Image
            src={WhatsappIcon}
            alt="Whatsapp"
            width={24}
            height={24}
          />
          <span>Fale conosco agora</span>
        </Link>
      </div>
    </Fade>
  );
}
