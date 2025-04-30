import type { StaticImageData } from "next/image";

export type Testimonial = {
	id: string;
	author: string;
	rating: number;
	text: string;
	date: string;
	profileImage: StaticImageData;
};
