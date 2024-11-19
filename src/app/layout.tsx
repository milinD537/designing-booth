import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import Navbar from "@/components/navbar"

const trap = localFont({
	src: [
		{
			path: "./fonts/trap/Trap-Black.otf",
			weight: "900",
		},
		{
			path: "./fonts/trap/Trap-ExtraBold.otf",
			weight: "800",
		},
		{
			path: "./fonts/trap/Trap-Bold.otf",
			weight: "700",
		},
		{
			path: "./fonts/trap/Trap-SemiBold.otf",
			weight: "600",
		},
		{
			path: "./fonts/trap/Trap-Medium.otf",
			weight: "500",
		},
		{
			path: "./fonts/trap/Trap-Regular.otf",
			weight: "400",
		},
		{
			path: "./fonts/trap/Trap-Light.otf",
			weight: "300",
		},
	],
	variable: "--font-trap",
})

export const metadata: Metadata = {
	title: "Octoreach Digital",
	description: "Designing your digital dreams to reality",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${trap.className} antialiased bg-background text-text`}
			>
				<Navbar />
				{/* <div className="relative overflow-x-clip">
					<div className="ray | absolute ~z-10 bg-secondary/40 w-full lg:w-3/4 aspect-[12.4] rounded-[100%] blur-[clamp(12px,2.2vw,40px)] right-0 top-0 translate-x-1/2 -translate-y-1/2 -rotate-[15deg]"></div>
					<div className="ray | absolute ~z-10 bg-secondary/40 w-full lg:w-3/4 aspect-[12.4] rounded-[100%] blur-[clamp(12px,2.2vw,40px)] right-0 top-0 translate-x-1/2 -translate-y-1/2 -rotate-[45deg]"></div>
					<div className="ray | absolute ~z-10 bg-secondary/40 w-full lg:w-3/4 aspect-[12.4] rounded-[100%] blur-[clamp(12px,2.2vw,40px)] right-0 top-0 translate-x-1/2 -translate-y-1/2 -rotate-[70deg]"></div>
				</div> */}
				{children}
			</body>
		</html>
	)
}
