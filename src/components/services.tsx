function ServiceCard({
	service,
	description,
}: {
	service: string
	description: string
}) {
	return (
		<div className="group p-4 content-end bg-[url(/images/service-card-bg.webp)] bg-center bg-cover aspect-square rounded-3xl relative isolate z-0 ~overflow-hidden | before:rounded-[inherit] before:absolute before:inset-0 before:-z-10 before:bg-black before:bg-opacity-45 hover:before:bg-opacity-55 before:backdrop-blur-[0.5px] hover:before:backdrop-blur before:transition-[background-color,backdrop-filter] before:duration-300">
			<h4 className="text-2xl lg:text-4xl font-semibold">{service}</h4>
			<div className="description | grid grid-rows-[0fr] group-hover:grid-rows-[1fr] [transition:grid-template-rows_500ms] will-change-[grid-template-columns]">
				<p className="overflow-hidden text-sm lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1000 lg:leading-loose">
					{description}
				</p>
			</div>
		</div>
	)
}

export default function Services() {
	const servicesArray = [
		{
			service: "Social Media Marketing",
			description:
				"Engage your audience and grow brand loyalty through tailored strategies across major social platforms.",
		},
		{
			service: "Lead Generation",
			description:
				"Drive high-quality leads using targeted advertising, optimized landing pages, and effective email campaigns.",
		},
		{
			service: "Search Engine Optimization (SEO)",
			description:
				"Boost online visibility and drive sustainable growth with our comprehensive SEO strategies.",
		},
		{
			service: "Digital PR",
			description:
				"Strengthen brand reputation by securing valuable media coverage and engaging with influencers.",
		},
		{
			service: "Graphic Designing",
			description:
				"Stand out with visually stunning 3D graphics crafted for marketing materials and social media.",
		},
		{
			service: "3D Animation",
			description:
				"Capture attention with dynamic animations that convey your brand's story effectively.",
		},
		{
			service: "Video Editing",
			description:
				"Transform raw footage into impactful videos with professional editing tailored to your brand.",
		},
		{
			service: "Business Photoshoot and Videography",
			description:
				"Showcase your brand with high-quality visuals that make a memorable impact on your audience.",
		},
	]
	return (
		<div className="bg-[linear-gradient(to_bottom,#5D5BBD,#2B2A57_65%)] p-10 lg:py-16 rounded-t-3xl lg:rounded-3xl text-background">
			<h3 className="text-4xl lg:text-7xl font-bold uppercase text-center">
				our services
			</h3>
			<p className="mt-4 lg:text-xl text-center ~max-w-[30ch] lg:leading-normal">
				At OctoReach, we specialize in a diverse range of digital
				marketing services <br className="hidden lg:block" /> designed
				to elevate your brand and achieve your business goals. <br />{" "}
				Explore how we can help you thrive in the digital landscape:
			</p>
			<div className="serviceCardContainer | mt-12 py-4 grid gap-8 justify-center ~min-[900px]:[--repeat:4] grid-cols-[repeat(var(--repeat,auto-fill),minmax(min(384px,100%),1fr))]">
				{servicesArray.map((item, idx) => (
					<ServiceCard
						key={idx}
						service={item.service}
						description={item.description}
					/>
				))}
			</div>
		</div>
	)
}
