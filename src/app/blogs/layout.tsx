export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className="blogsWrapper | pt-[calc(70px_+_3.5rem)] px-2 pb-4">
			{children}
		</div>
	)
}
