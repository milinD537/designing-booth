import { getSheetData } from "@/actions/sheet"
import { RightArrow, RightArrowMinimal } from "@/assets/svgs"
import { SheetData } from "@/lib/types"
import Link from "next/link"

function BlogCard({ item }: { item: SheetData["rows"][number] }) {
	return (
		<div className="blogCard | bg-white rounded-xl overflow-clip aspect-square grid content-between shadow-[0_4px_20px_hsl(0,0%,0%,10%)]">
			<div className="blogImage | relative | after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:from-50% after:to-white">
				<img src={item.img} alt="Blog image" />
			</div>
			<div className="blog | p-4">
				<h3 className="text-xl font-medium">{item.title}</h3>
				<Link href={`/blogs/${item.id}`}>
					<button className="group | mt-4 px-2 py-1 flex items-center gap-2 rounded-md border-2 border-text hover:bg-text hover:text-background transition-colors">
						Read More{" "}
						<RightArrow className="*:fill-text group-hover:*:fill-background *:transition-colors" />
					</button>
				</Link>
			</div>
		</div>
	)
}

export default async function Page() {
	const data = await getSheetData()

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
							src={data?.rows[data.rows.length - 1]?.img}
							alt="Blog image"
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="featuredBlog | py-2 grid gap-4 content-between justify-items-start lg:translate-x-1/2 opacity-0 animate-[slideIn_750ms_forwards]">
						<div>
							<h3 className="text-4xl lg:text-4xl font-bold">
								{data?.rows[data.rows.length - 1]?.title}
							</h3>
							<p className="font-mulish | mt-2 text-lg font-medium">
								{data?.rows[
									data.rows.length - 1
								]?.content.slice(
									0,
									data?.rows[
										data.rows.length - 1
									]?.content.indexOf("\n")
								)}
							</p>
						</div>
						<Link
							href={`/blogs/${
								data?.rows[data.rows.length - 1].id
							}`}
						>
							<button className="bg-text text-background text-xl font-medium px-6 py-3 rounded-full inline-flex gap-3 items-center hover:-translate-y-1 active:translate-y-0 transition-transform">
								Read More
								<RightArrowMinimal />
							</button>
						</Link>
					</div>
				</div>
			</section>
			<section className="blogCardWrapper | max-w-[1680px] mx-auto mt-24 grid place-content-center gap-12 grid-cols-[repeat(auto-fill,min(100%,380px))]">
				{data?.rows.slice(0, data.rows.length - 1).map((item, idx) => (
					<BlogCard key={idx} item={item} />
				))}
			</section>
		</>
	)
}
