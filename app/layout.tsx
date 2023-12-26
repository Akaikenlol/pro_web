import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Next.js | TypeScript Starter",
	description: "A starter kit for Next.js with TypeScript.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-black-100 min-h-screen">{children}</body>
		</html>
	);
}
