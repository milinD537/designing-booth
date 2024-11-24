import { Collab, Innovation, Integrity } from "@/assets/svgs"

type Mission = {
	title: string
	desc: string
}
type Vision = Mission

type Value = Mission & {
	Icon: React.ReactNode
}

function Card({ item }: { item: Value | Mission | Vision }) {
	const isValue = "Icon" in item
	const Icon = () => (isValue ? item.Icon : <></>)
	return (
		<div
			className={`card | group rounded-2xl py-10 px-4 border-2 relative | before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-1/3 before:h-2.5 before:rounded-b-full ${
				isValue
					? "hover:bg-text transition-colors border-transparent hover:border-black before:bg-transparent hover:before:bg-background before:transition-colors"
					: "bg-text border-black before:bg-background"
			}`}
		>
			<span className="*:*:fill-text group-hover:*:*:fill-background *:*:transition-colors">
				<Icon />
			</span>
			<h3
				className={`text-3xl font-semibold ${
					isValue
						? "mt-8 group-hover:text-background transition-colors"
						: "bg-background w-fit mx-auto px-6 py-3 rounded-xl leading-none"
				}`}
			>
				{item.title}
			</h3>
			<p
				className={`text-xl font-medium leading-normal ${
					isValue
						? "mt-4 group-hover:text-background transition-colors "
						: "text-background text-center mt-8"
				}`}
			>
				{item.desc}
			</p>
		</div>
	)
}

export default function Page() {
	const values: Value[] = [
		{
			title: "Collaboration",
			desc: "We believe in the power of teamwork. By working closely with our clients, we ensure that your vision and goals are at the forefront of everything we do.",
			Icon: <Collab />,
		},
		{
			title: "Integrity",
			desc: "Transparency and honesty are at the core of our relationships. We provide clear communication and realistic expectations to build trust with our clients.",
			Icon: <Integrity />,
		},
		{
			title: "Innovation",
			desc: "In the fast-paced digital world, staying ahead means embracing change. We continually explore new tools, trends, and strategies to keep your brand at the forefront.",
			Icon: <Innovation />,
		},
	]
	const mission: Mission = {
		title: "Mission",
		desc: "We create tailored digital marketing solutions that drive results and foster lasting client relationships.",
	}
	const vision: Vision = {
		title: "Vision",
		desc: "To be a leading digital marketing agency that transforms brands through innovation and connection.",
	}

	return (
		<>
			<section className="values | max-w-[1440px] mx-auto">
				<h2 className="text-4xl lg:text-5xl font-black text-center">
					Our Values
				</h2>
				<div className="valueCards | mt-6 grid lg:grid-cols-3 gap-6 lg:gap-12">
					{values.map((item, idx) => (
						<Card key={idx} item={item} />
					))}
				</div>
			</section>
			<section className="vision-mission | mt-20 max-w-screen-2xl mx-auto">
				<h2 className="text-4xl lg:text-5xl font-black text-center">
					Vision & Mission
				</h2>
				<p className="mt-4 lg:text-2xl text-center font-medium">
					We are determined to continue pushing boundaries and making
					an impact in our community. Let&apos;s talk and take a look
					at what we have been working on and what our future plans.
				</p>
				<div className="valueCards | mt-6 grid gap-6 justify-center lg:gap-12 lg:grid-cols-[repeat(2,400px)]">
					<Card item={mission} />
					<Card item={vision} />
				</div>
			</section>
		</>
	)
}
