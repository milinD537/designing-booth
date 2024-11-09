import { Check, WorldMap } from "@/assets/svgs"
import Services from "@/components/services"
import Work from "@/components/work"
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
function Stat({ numbers, title }: { numbers: string; title: string }) {
	return (
		<div className="text-primary text-center p-8 bg-secondary/85 rounded-xl">
			<p className="text-2xl lg:text-6xl font-bold">{numbers}</p>
			<p className="text-lg lg:text-4xl text-background">{title}</p>
		</div>
	)
}
function WhyUsBullet({ point }: { point: string }) {
	return (
		<li className="flex gap-2">
			<Check className="w-full max-w-6 lg:max-w-8 shrink-0" />
			<p className="text-lg lg:text-4xl font-bold text-primary">
				{point}
			</p>
		</li>
	)
}

export default function Home() {
	const clientImages = [
		"/images/clients/7.webp",
		"/images/clients/8.webp",
		"/images/clients/9.webp",
		"/images/clients/10.webp",
		"/images/clients/11.webp",
		"/images/clients/12.webp",
		"/images/clients/13.webp",
		"/images/clients/14.webp",
		"/images/clients/15.webp",
		"/images/clients/16.webp",
		"/images/clients/17.webp",
	]

	return (
		<div className="landingWrapper">
			<div className="pb-20 bg-gradient-to-b from-background to-[#909099]">
				<section className="heroWrapper | py-20 relative isolate overflow-hidden min-h-screen grid gap-12 lg:content-end ~bg-gradient-to-b from-background to-background/0">
					<div className="ray | absolute -z-10 bg-secondary/40 w-full lg:w-3/4 aspect-[12.4] rounded-[100%] blur-[clamp(12px,2.2vw,40px)] right-0 top-0 translate-x-1/2 -translate-y-1/2 -rotate-[15deg]"></div>
					<div className="ray | absolute -z-10 bg-secondary/40 w-full lg:w-3/4 aspect-[12.4] rounded-[100%] blur-[clamp(12px,2.2vw,40px)] right-0 top-0 translate-x-1/2 -translate-y-1/2 -rotate-[45deg]"></div>
					<div className="ray | absolute -z-10 bg-secondary/40 w-full lg:w-3/4 aspect-[12.4] rounded-[100%] blur-[clamp(12px,2.2vw,40px)] right-0 top-0 translate-x-1/2 -translate-y-1/2 -rotate-[70deg]"></div>
					<div className="self-end">
						<h1 className="overflow-hidden pt-5 text-[clamp(3rem,7vw_+_1px,6rem)] font-extrabold text-center leading-tight">
							<span className="inline-block -translate-y-[calc(100%_+_1.25rem)] animate-[slideIn_750ms_forwards]">
								<span className="relative | after:hidden after:content-['*'] after:absolute after:text-primary after:text-[clamp(4rem,7vw+1px,7rem)] after:font-black after:right-0 after:-translate-y-7 after:translate-x-1/2">
									OctoReach
								</span>{" "}
							</span>
						</h1>
						<h2 className="overflow-hidden text-lg font-medium text-center">
							<span className="inline-block -translate-y-full animate-[slideIn_750ms_forwards]">
								Crafting Stories, Driving Results.
							</span>
						</h2>
						<div className="mt-3 px-[1px] overflow-hidden w-fit mx-auto hover:-translate-y-1 active:translate-y-0 transition-transform">
							<button className="lg:text-lg font-bold block mx-auto py-1.5 px-6 rounded-full border-2 border-transparent bg-origin-border bg-[linear-gradient(hsl(var(--primary)),hsl(var(--primary))),linear-gradient(black,hsl(var(--primary)))] [background-clip:padding-box,border-box] -translate-y-full animate-[slideIn_750ms_forwards]">
								Work with us
							</button>
						</div>
					</div>
					<div className="grid grid-cols-2 lg:grid-cols-[auto_minmax(350px,768px)_auto] ~gap-2 ~lg:gap-8 justify-items-center px-2">
						<img
							src="/images/hero-stat-1.png"
							alt=""
							className="self-end -translate-x-1/2 lg:[--x:25%] z-10 opacity-0 animate-[slideIn_750ms_forwards] row-start-2 lg:row-start-1"
						/>
						{/* <iframe
							src="https://www.youtube.com/embed/79-eKiehLIw"
							title="J. Cole - p u n c h i n &#39; . t h e . c l o c k (Official Music Video)"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
							className="hover:z-20 w-full aspect-video place-self-center col-span-2 lg:col-span-1 opacity-0 animate-[slideIn_750ms_250ms_forwards] border-8 border-primary rounded-[1.375rem]"
						></iframe> */}
						<iframe
							src="https://www.youtube.com/embed/yrLAAWxnExE"
							title="Introducing Designing Booth logo | Digital Marketing Agency |"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
							className="hover:z-20 w-full aspect-video place-self-center col-span-2 lg:col-span-1 opacity-0 animate-[slideIn_750ms_250ms_forwards] border-8 border-primary rounded-[1.375rem]"
						></iframe>
						<img
							src="/images/hero-stat-2.png"
							alt=""
							className="self-end translate-x-1/2 lg:[--x:-25%] z-10 opacity-0 animate-[slideIn_750ms_forwards]"
						/>
					</div>
				</section>
				<section className="servicesWrapper | mt-28 lg:px-12">
					<Services />
				</section>
			</div>
			<section className="aboutWrapper | ~mt-28 px-6 py-24 lg:py-40 bg-gradient-to-b from-secondary to-text">
				<div className="about-us | max-w-screen-2xl mx-auto grid gap-12 lg:grid-cols-2 lg:grid-flow-col-dense">
					<div className="aspect-video self-center">
						{/* <div className="h-full border-4 lg:border-[12px] border-primary rounded-[1.375rem] bg-background shadow-inner"> */}
						<iframe
							src="https://www.youtube.com/embed/yrLAAWxnExE"
							title="Introducing Designing Booth logo | Digital Marketing Agency |"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerPolicy="strict-origin-when-cross-origin"
							allowFullScreen
							className="hover:z-20 w-full aspect-video place-self-center col-span-2 lg:col-span-1 opacity-0 animate-[slideIn_750ms_250ms_forwards] border-8 border-primary rounded-[1.375rem]"
						></iframe>
						{/* </div> */}
					</div>
					<div className="col-start-1">
						<h3 className="text-4xl lg:text-5xl font-black text-primary">
							About us
						</h3>
						<p className="font-mulish | font-medium ~lg:font-semibold text-background text-sm lg:text-xl mt-5">
							Welcome to OctoReach Digital, where creativity meets
							strategy. We are a dynamic digital marketing agency
							dedicated to helping brands thrive in the
							ever-evolving online landscape. With a passion for
							innovation and a commitment to excellence, our team
							of experts combines cutting-edge technology with
							data-driven insights to deliver customized marketing
							solutions tailored to your unique needs.
						</p>
						<p className="font-mulish | font-medium ~lg:font-semibold text-background text-sm lg:text-xl mt-2.5">
							At OctoReach Digital, we understand that every brand
							has a story to tell. Our mission is to connect you
							with your audience through compelling narratives and
							impactful campaigns that resonate. Whether
							you&apos;re a startup looking to establish your
							presence or an established brand seeking to
							revitalize your strategy, we are here to guide you
							every step of the way.
						</p>
						<button className="mt-5 text-xl font-semibold py-2 px-6 rounded-full bg-primary hover:-translate-y-1 active:translate-y-0 transition-transform">
							KNOW MORE
						</button>
					</div>
				</div>
			</section>
			<section className="whyUsWrapper | grid *:[grid-area:1/-1] place-items-center py-24 lg:py-40 bg-gradient-to-b from-secondary to-[#808080] to-[150%]">
				<WorldMap className="w-full ~mx-auto" />
				<div className="max-w-screen-xl ~bg-white p-6">
					<h3 className="text-center text-4xl lg:text-5xl font-black text-primary">
						Why choose us ?
					</h3>
					<div className="mt-28 flex flex-wrap ~*:basis-[calc(50%_-_3rem)] gap-12 justify-center items-center">
						<Stat numbers="25 +" title="Clients" />
						<Stat numbers="10L +" title="Revenue Generated" />
						<Stat numbers="2 +" title="Awards Received" />
						<Stat numbers="1L +" title="Organic Revenue" />
						<Stat numbers="100 +" title="Videos Delivered" />
					</div>
					<ul className="mt-28 grid grid-cols-[repeat(2,auto)] gap-16 justify-center">
						<WhyUsBullet point="Expert Team" />
						<WhyUsBullet point="Innovative Strategy" />
						<WhyUsBullet point="Result Driven" />
						<WhyUsBullet point="Global Reach" />
						<WhyUsBullet point="Client Focus" />
						<WhyUsBullet point="24x7 Support" />
					</ul>
				</div>
			</section>
			<section className="clientsWrapper | mt-16 px-3 lg:px-6 py-24">
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
			<section className="worksSection | mt-28 p-2">
				<Work />
			</section>
		</div>
	)
}
