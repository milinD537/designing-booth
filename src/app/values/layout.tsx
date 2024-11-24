export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className="valuesWrapper | pt-[calc(70px_+_3.5rem)] px-2 pb-24 bg-primary">
			{children}
		</main>
	)
}