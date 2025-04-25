import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "~/components/ui/Header";

export const metadata: Metadata = {
	title: "Advogados Machado",
	description: "Advogados Machado",
	icons: [{ rel: "icon", url: "/favicon.png" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className={`${geist.variable}`}>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
