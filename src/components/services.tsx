function ServiceCard({
	service,
	description,
}: {
	service: string
	description: string
}) {
	return (
		<div className="group bg-[url(/images/service-card-bg.webp)] bg-center bg-cover aspect-[1/1.1] rounded-3xl">
			<div className="rounded-[inherit] h-full p-4 grid content-end gap-4 bg-[hsl(0,0%,0%,35%)] group-hover:bg-[hsl(0,0%,0%,55%)] backdrop-blur-[0.5px] group-hover:backdrop-blur transition-[background-color,backdrop-filter] duration-300">
				<h4 className="text-2xl lg:text-4xl font-semibold">
					{service}
				</h4>
				<div className="description | grid grid-rows-[0fr] group-hover:grid-rows-[1fr] [transition:grid-template-rows_500ms]">
					<p className="overflow-hidden text-sm lg:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1000 lg:leading-loose">
						{description}
					</p>
				</div>
			</div>
		</div>
	)
}

export default function Services() {
	const servicesArray = [
		{
			service: "Social Media Marketing",
			description:
				"Harness the power of social media to connect with your audience and build brand loyalty. Our team creates tailored strategies that include engaging content, targeted advertising, and community management, ensuring your brand stands out across platforms like Facebook, Instagram, Twitter, and LinkedIn.",
		},
		{
			service: "Lead Generation",
			description:
				"Drive qualified leads to your business with our effective lead generation strategies. We utilize a combination of inbound and outbound marketing techniques, including landing page optimization, email campaigns, and targeted advertising, to attract and convert potential customers into loyal clients.",
		},
		{
			service: "Search Engine Optimization (SEO)",
			description:
				"Increase your online visibility and organic traffic with our comprehensive SEO services. We conduct in-depth keyword research, optimize your website's structure and content, and implement on-page and off-page strategies to improve your search rankings and drive sustainable growth.",
		},
		{
			service: "Digital PR",
			description:
				"Enhance your brand's reputation and reach with our digital PR services. We craft compelling narratives and engage with influencers, bloggers, and media outlets to secure valuable coverage and backlinks that boost your credibility and visibility in the digital space.",
		},
		{
			service: "Graphic Designing",
			description:
				"Bring your ideas to life with stunning 3D graphics. Our creative team specializes in designing eye-catching visuals for marketing materials, product presentations, and social media campaigns, helping your brand stand out with innovative and engaging imagery.",
		},
		{
			service: "3D Animation",
			description:
				"Captivate your audience with dynamic 3D animations that tell your brand's story. Our skilled animators create visually striking content that enhances your marketing efforts, whether for promotional videos, explainer animations, or product demonstrations. We ensure your message is communicated effectively and creatively.",
		},
		{
			service: "Video Editing",
			description:
				"Transform raw footage into polished videos that engage and inspire. Our video editing services include cutting, color grading, sound design, and special effects, tailored to your vision. We focus on creating compelling narratives that resonate with your audience, whether for social media, advertisements, or corporate videos.",
		},
		{
			service: "Business Photoshoot and Videography",
			description:
				"Showcase your brand with professional photoshoots and videography that highlight your products, services, and corporate culture. Our team captures high-quality images and videos that tell your brand's story, helping you make a lasting impression on your audience.",
		},
	]
	return (
		<div className="bg-[url(/images/noise.webp),linear-gradient(to_bottom,#5D5BBD,#2B2A57_65%)] p-10 lg:py-16 rounded-t-3xl lg:rounded-3xl text-background">
			<h3 className="text-4xl lg:text-7xl font-bold uppercase text-center">
				our services
			</h3>
			<p className="mt-4 lg:text-xl text-center ~max-w-[30ch] lg:leading-normal">
				At OctoReach, we specialize in a diverse range of digital
				marketing services <br className="hidden lg:block" /> designed
				to elevate your brand and achieve your business goals. <br />{" "}
				Explore how we can help you thrive in the digital landscape:
			</p>
			<div className="serviceCardContainer | mt-12 py-4 grid gap-8 justify-center ~min-[900px]:[--repeat:4] grid-cols-[repeat(var(--repeat,auto-fill),minmax(min(400px,100%),1fr))]">
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
