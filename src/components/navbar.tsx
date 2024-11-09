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
					!active && "text-text/65 font-medium"
				}`}
			>
				{name}
			</span>
		</Link>
	)
}

export default function Navbar() {
	return (
		<nav className="flex justify-between w-full fixed ~top-4 z-50 ~left-1/2 ~-translate-x-1/2 ~w-max ~mx-auto bg-white px-2 lg:px-9 rounded-b-lg shadow-[0_4px_1.5rem_hsl(0,0%,0%,20%)]">
			<div className="logoWrapper | max-w-[70px]">
				<img src="/images/logo.png" alt="" />
			</div>
			<ul className="hidden lg:flex items-center justify-between gap-8">
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
