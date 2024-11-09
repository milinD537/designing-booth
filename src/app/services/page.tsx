import Services from "@/components/services"

export default function services() {
	return (
		<div>
			<section className="servicesWrapper | ~mt-28p pt-28 lg:px-12">
				<Services />
				<iframe
					width="100%"
                    scrolling="no"
					// style={{ backgroundColor: "#5D5BB9]" }}
					className="h-[940px] lg:rounded-3xl md:mt-10  md:h-[700px] bg-[url(/images/noise.webp),linear-gradient(to_bottom,#2B2A57,#2B2A57_65%)]"
					src="https://bento.me/octoreach"
					title="description"
				/>
			</section>
		</div>
	)
}
