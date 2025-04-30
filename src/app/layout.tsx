import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { montserrat } from "~/assets/fonts/montserrat";
import { Footer } from "~/components/ui/Footer";

export const metadata: Metadata = {
	title: "Machado Advogados",
	description: "Advogados Machado",
	icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${montserrat.className}`}>
			<head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
				/>
			</head>
			<body className="bg-[#f9f9f9]">
				{/* <Header /> */}
				{children}
				<div className="bg-[#0f1b2b]">
					<Footer />
				</div>
			</body>
		</html>
	);
}
