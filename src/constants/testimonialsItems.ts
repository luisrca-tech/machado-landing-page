import Avatar1 from "public/images/testimonials/avatar/avatar1.png";
import Avatar2 from "public/images/testimonials/avatar/avatar2.png";
import Avatar3 from "public/images/testimonials/avatar/avatar3.png";
import type { Testimonial } from "~/types/testimonial.type";

export const testimonialsItems: Testimonial[] = [
	{
		id: "1",
		author: "Amanda Natália",
		rating: 5,
		text: "Equipe foi atenciosa desde o início, sempre dava retorno imediato e tiravam as dúvidas que iam surgindo. Parabéns! Super recomendo.",
		date: "2 anos atrás",
		profileImage: Avatar1,
	},
	{
		id: "2",
		author: "Jesuita Pontes Chaves",
		rating: 5,
		text: "Muito boa, Atendimento excelente! Gostei muito! Super educados, atenciosos, super profissional... Super indico.",
		date: "1 ano atrás",
		profileImage: Avatar2,
	},
	{
		id: "3",
		author: "Rafael borcem",
		rating: 5,
		text: "Super indico ,são super atenciosos, educados...um dos melhores escritórios de advocacia de Goiás. Deus abençoe vcs.",
		date: "1 ano atrás",
		profileImage: Avatar3,
	},
];
