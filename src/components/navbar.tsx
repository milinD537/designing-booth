import Link from "next/link"
import React from "react"

function NavLink({ name, active }: { name: string; active?: boolean }) {
	return (
		<Link
			href={
				name.toLowerCase() === "blogs"
					? "/blogs"
					: `/#${name.toLowerCase().replace(" ", "")}`
			}
			className="flex items-center gap-1.5"
		>
			{active && (
				<span className="activeCircle | inline-block w-2 h-2 bg-primary rounded-full -translate-y-1/3 blur-[1px]"></span>
			)}
			<span
				className={`text-lg font-semibold hover:bg-primary/50 transition-colors p-2 rounded-lg text-text leading-none ${
					!active && "~text-text/65 ~font-medium"
				}`}
			>
				{name}
			</span>
		</Link>
	)
}

export default function Navbar() {
	return (
		<header className="flex justify-between w-full fixed ~top-4 z-50 ~left-1/2 ~-translate-x-1/2 ~w-max ~mx-auto bg-white px-2 lg:px-9 rounded-b-lg shadow-[0_4px_1.5rem_hsl(0,0%,0%,20%)]">
			<Link href="/" className="logoWrapper | max-w-[70px]">
				<img src="/images/logo.webp" alt="Logo" />
			</Link>
			<nav className="contents">
				<ul className="lg:flex items-center justify-between gap-8~ gap-6">
					<li className="peer lg:hidden h-[70px] grid place-items-center">
						<input
							type="checkbox"
							name="nav"
							id="nav"
							className="hidden"
						/>
						<label
							htmlFor="nav"
							className="grid place-content-center gap-0.5"
						>
							<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
							<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
							<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
						</label>
					</li>
					<div className="lg:contents grid grid-rows-[0fr] peer-has-[#nav:checked]:grid-rows-[1fr] peer-has-[#nav:checked]:py-2 *:overflow-hidden [transition:grid-template-rows_300ms]">
						<div className="lg:contents">
							<li>
								<NavLink name="Home" />
							</li>
							<li>
								<NavLink name="Blogs" />
							</li>
							<li>
								<NavLink name="Services" />
							</li>
							<li>
								<NavLink name="About us" />
							</li>
							<li>
								<NavLink name="Why Us" />
							</li>
							<li>
								<NavLink name="Clients" />
							</li>
							<li>
								<NavLink name="Our Work" />
							</li>
						</div>
					</div>
				</ul>
			</nav>
		</header>
	)
}
