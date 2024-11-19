import { RightArrow, RightArrowMinimal } from "@/assets/svgs"

function BlogCard({ title }: { title: string | undefined }) {
	return (
		<div className="blogCard | bg-white rounded-xl overflow-clip aspect-square grid content-between shadow-[0_4px_20px_hsl(0,0%,0%,10%)]">
			<div className="blogImage | relative | after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:from-50% after:to-white">
				<img src="/images/service-card-bg.webp" alt="blog image" />
			</div>
			<div className="blog | p-4">
				<h3 className="text-xl font-medium">{title}</h3>
				<button className="group | mt-4 px-2 py-1 flex items-center gap-2 rounded-md border-2 border-text hover:bg-text hover:text-background transition-colors">
					Read More{" "}
					<RightArrow className="*:fill-text group-hover:*:fill-background *:transition-colors" />
				</button>
			</div>
		</div>
	)
}

export default function Page() {
	const sampleBlog = [
		{
			title: "Why Every Business Needs a Strong Online Presence",
			content: `In today's fast-paced digital world, having a strong online presence isn't just a nice-to-have—it's a must. At OctoReach Digital, we believe that every business, whether a local shop or a global brand, can benefit immensely from being visible and engaging online. Here's why you should prioritize your digital footprint.`,
		},
		{
			title: "Why Every Business Needs a Strong Online Presence",
			content: `In today's fast-paced digital world, having a strong online presence isn't just a nice-to-have—it's a must. At OctoReach Digital, we believe that every business, whether a local shop or a global brand, can benefit immensely from being visible and engaging online. Here's why you should prioritize your digital footprint.`,
		},
		,
		{
			title: "Why Every Business Needs a Strong Online Presence",
			content: `In today's fast-paced digital world, having a strong online presence isn't just a nice-to-have—it's a must. At OctoReach Digital, we believe that every business, whether a local shop or a global brand, can benefit immensely from being visible and engaging online. Here's why you should prioritize your digital footprint.`,
		},
		,
		{
			title: "Why Every Business Needs a Strong Online Presence",
			content: `In today's fast-paced digital world, having a strong online presence isn't just a nice-to-have—it's a must. At OctoReach Digital, we believe that every business, whether a local shop or a global brand, can benefit immensely from being visible and engaging online. Here's why you should prioritize your digital footprint.`,
		},
		,
		{
			title: "Why Every Business Needs a Strong Online Presence",
			content: `In today's fast-paced digital world, having a strong online presence isn't just a nice-to-have—it's a must. At OctoReach Digital, we believe that every business, whether a local shop or a global brand, can benefit immensely from being visible and engaging online. Here's why you should prioritize your digital footprint.`,
		},
		,
		{
			title: "Why Every Business Needs a Strong Online Presence",
			content: `In today's fast-paced digital world, having a strong online presence isn't just a nice-to-have—it's a must. At OctoReach Digital, we believe that every business, whether a local shop or a global brand, can benefit immensely from being visible and engaging online. Here's why you should prioritize your digital footprint.`,
		},
	]

	return (
		<>
			<section className="max-w-[1680px] mx-auto">
				<h1 className="text-4xl lg:text-6xl font-bold relative | ~before:content-['*'] before:absolute before:-translate-x-full before:text-8xl before:font-black before:leading-none before:text-primary">
					Blogs
				</h1>
				<h2 className="mt-8 text-2xl font-semibold px-2 border-l-4 border-primary leading-none">
					Recently added
				</h2>
				<div className="featuredBlogWrapper | overflow-x-clip mt-4 grid gap-4 lg:grid-cols-2">
					<div className="blogImage | overflow-clip border-4 lg:border-8 border-white bg-primary/75 rounded-[1.375rem] aspect-[2] shadow-xl lg:-translate-x-1/2 opacity-0 animate-[slideIn_750ms_forwards]">
						<img
							src="/images/service-card-bg.webp"
							alt="blog image"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="featuredBlog | py-2 grid gap-4 content-between justify-items-start lg:translate-x-1/2 opacity-0 animate-[slideIn_750ms_forwards]">
						<div>
							<h3 className="text-4xl lg:text-4xl font-bold">
								{sampleBlog[0]?.title}
							</h3>
							<p className="font-mulish | mt-2 text-lg font-medium">
								{sampleBlog[0]?.content}
							</p>
						</div>
						<button className="bg-text text-background text-xl font-medium px-6 py-3 rounded-full inline-flex gap-3 items-center hover:-translate-y-1 active:translate-y-0 transition-transform">
							Read More
							<RightArrowMinimal />
						</button>
					</div>
				</div>
			</section>
			<section className="blogCardWrapper | max-w-[1680px] mx-auto mt-24 grid place-content-center gap-12 grid-cols-[repeat(auto-fill,min(100%,380px))]">
				{sampleBlog.map((item, idx) => (
					<BlogCard key={idx} title={item?.title} />
				))}
			</section>
		</>
	)
}
