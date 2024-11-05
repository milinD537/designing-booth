import Link from "next/link"
import React from "react"

function NavLink({ name, active }: { name: string; active?: boolean }) {
	return (
		<Link href="#" className="flex items-center gap-1.5">
			{active && (
				<span className="activeCircle | inline-block w-2 h-2 bg-primary rounded-full -translate-y-1/3 blur-[1px]"></span>
			)}
			<span
				className={`text-lg font-bold text-text ${
					!active && "text-opacity-65"
				}`}
			>
				{name}
			</span>
		</Link>
	)
}

export default function Navbar() {
	return (
		<nav className="hidden lg:block fixed top-4 z-50 left-1/2 -translate-x-1/2 w-max mx-auto ~my-8 bg-white px-9 py-4 rounded-full shadow-[0_4px_1.5rem_hsl(0,0%,0%,10%)]">
			<ul className="flex items-center justify-between gap-8">
				<li>
					<NavLink name="Home" active />
				</li>
				<li>
					<NavLink name="About us" />
				</li>
				<li>
					<NavLink name="Services" />
				</li>
				<li>
					<NavLink name="Clients" />
				</li>
				<li>
					<NavLink name="Portfolio" />
				</li>
				<li>
					<NavLink name="Testimonials" />
				</li>
			</ul>
		</nav>
	)
}
