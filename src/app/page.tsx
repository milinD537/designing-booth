import Services from "@/components/services"
import React from "react"

function ClientImg({ src }: { src: string }) {
	return (
		<img
			src={src}
			alt="client logo"
			className="[object-fit:125%] object-center w-full h-full"
		/>
	)
}

export default function Home() {
	const clientImages = [
		"/images/c1.webp",
		"/images/c2.webp",
		"/images/c3.webp",
		"/images/c4.webp",
		"/images/c5.webp",
		"/images/c6.webp",
		"/images/c7.webp",
		"/images/c8.webp",
		"/images/c9.webp",
		"/images/c10.webp",
	]

	return (
		<div className="landingWrapper">
			<section className="heroWrapper | relative isolate overflow-hidden min-h-screen grid ~gap-8 lg:grid-rows-[1fr_1fr] place-items-center bg-gradient-to-b from-[#FFF091] to-[#FFFFB700]">
				<div className="ray | absolute -z-10 bg-gradient-to-l from-[#FF7A00] to-[#FF881B44] w-full lg:w-3/4 aspect-[12.4] rounded-[100%] blur-[clamp(12px,2.2vw,50px)] right-0 top-0 translate-x-1/2 -translate-y-1/2 -rotate-[15deg]"></div>
				<div className="ray | absolute -z-10 bg-gradient-to-l from-[#FF7A00] to-[#FF881B44] w-full lg:w-3/4 aspect-[12.4] rounded-[100%] blur-[clamp(12px,2.2vw,50px)] right-0 top-0 translate-x-1/2 -translate-y-1/2 -rotate-[45deg]"></div>
				<div className="ray | absolute -z-10 bg-gradient-to-l from-[#FF7A00] to-[#FF881B44] w-full lg:w-3/4 aspect-[12.4] rounded-[100%] blur-[clamp(12px,2.2vw,50px)] right-0 top-0 translate-x-1/2 -translate-y-1/2 -rotate-[70deg]"></div>
				<div className="lg:contents pt-6">
					<div className="self-end">
						<h1 className="overflow-hidden pt-5 text-[clamp(2.75rem,7vw_+_1px,6rem)] font-extrabold text-center leading-tight">
							<span className="inline-block -translate-y-[calc(100%_+_1.25rem)] animate-[slideIn_750ms_forwards]">
								<span className="relative | after:hidden after:content-['*'] after:absolute after:text-primary after:text-[clamp(4rem,7vw+1px,7rem)] after:font-black after:right-0 after:-translate-y-7 after:translate-x-1/2">
									OctoReach
								</span>{" "}
								{/* Booth */}
							</span>
						</h1>
						<h2 className="overflow-hidden text-lg font-medium text-center">
							<span className="inline-block -translate-y-full animate-[slideIn_750ms_forwards]">
								{/* Designing your digital dreams to reality */}
								Crafting Stories, Driving Results.
							</span>
						</h2>
						<div className="mt-3 px-[1px] overflow-hidden w-fit mx-auto hover:-translate-y-1 active:translate-y-0 transition-transform">
							<button className="lg:text-lg font-bold block mx-auto py-2 px-6 rounded-full border-2 border-transparent bg-origin-border bg-[linear-gradient(hsl(var(--primary)),hsl(var(--primary))),linear-gradient(black,hsl(var(--primary)))] [background-clip:padding-box,border-box] -translate-y-full animate-[slideIn_750ms_forwards]">
								Work with us
							</button>
						</div>
					</div>
					<div className="w-[min(1680px,100%)] mt-8 lg:mt-0 grid [grid-template-areas:'character_character'_'one_two'] lg:[grid-template-areas:'one_character_two'] lg:gap-8 auto-cols-fr justify-items-center">
						<img
							src="/images/hero-stat-1.png"
							alt=""
							className="lg:-translate-y-10 lg:[--y:-2.5rem] [grid-area:one] -translate-x-1/2 opacity-0 animate-[slideIn_750ms_forwards]"
						/>
						<img
							src="/images/hero-character.png"
							alt=""
							className="self-end [rotate:-12deg] [grid-area:character] max-w-32 lg:max-w-full translate-y-1/2 opacity-0 animate-[slideIn_750ms_forwards]"
						/>
						<img
							src="/images/hero-stat-2.png"
							alt=""
							className="lg:-translate-y-10 lg:[--y:-2.5rem] [grid-area:two] translate-x-1/2 opacity-0 animate-[slideIn_750ms_forwards]"
						/>
					</div>
				</div>
			</section>
			<section className="servicesWrapper | mt-28 lg:px-12">
				<Services />
			</section>
			<section className="aboutWrapper | mt-28 px-6 py-12 lg:py-24 bg-gradient-to-b from-[#5B5B5B] to-[#353535]">
				<div className="about-us | max-w-screen-2xl mx-auto grid gap-6 lg:grid-cols-2 lg:grid-flow-col-dense">
					<div className="aspect-video self-center">
						<div className="h-full border-[12px] border-primary rounded-[1.375rem] bg-background shadow-inner"></div>
					</div>
					<div className="col-start-1">
						<h3 className="text-4xl lg:text-5xl font-black text-white">
							About us
						</h3>
						<p className="text-[hsl(0,0%,66%)] lg:text-xl leading-snug mt-5">
							At Designing Booth, we&apos;re your dedicated
							partner in the digital world. Our team of experts
							specializes in digital marketing, social media
							management, videography, photography, video editing,
							and graphic design. We offer top-notch services
							tailored to your brand&apos; s needs at competitive
							prices, ensuring quality without breaking the bank.
						</p>
						<p className="text-[hsl(0,0%,66%)] lg:text-xl leading-snug mt-2.5">
							From strategy to implementation, we support your
							brand&apos; s digital journey every step of the way.
							Partner with us to elevate your digital presence and
							achieve your goals. Let&apos; s navigate the digital
							landscape together and propel your brand to new
							heights.
						</p>
						<button className="mt-5 text-xl font-semibold py-2 px-6 rounded-full bg-primary hover:-translate-y-1 active:translate-y-0 transition-transform">
							KNOW MORE
						</button>
					</div>
				</div>
			</section>
			<section className="clientsWrapper | mt-28 px-3 lg:px-6 py-24">
				<h3 className="text-4xl lg:text-5xl font-black text-text text-center">
					Meet our Clients
				</h3>
				<div className="client-images | group mt-5 max-w-screen-2xl mx-auto grid gap-4 justify-center grid-cols-[repeat(auto-fit,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fit,calc(20%_-_1rem))]">
					{clientImages.map((item, idx) => (
						<div
							key={idx}
							className="group-has-[:hover]:[&:not(:hover)]:scale-90 group-has-[:hover]:[&:not(:hover)]:grayscale transition-[transform,filter] duration-500"
						>
							<ClientImg src={item} />
						</div>
					))}
				</div>
			</section>
		</div>
	)
}
