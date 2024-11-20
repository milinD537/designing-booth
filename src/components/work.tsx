import dynamic from "next/dynamic"

const Reel = dynamic(() => import("@/components/reel"), {
	ssr: false,
})

export default function Work() {
	const reels = [
		"DBi4uoYtVBB",
		"DBEDOHhtNiS",
		"C87GJQwokhn",
		"C9ZzwyYI3T_",
		"CxplsZJI6Zz",
		"Cx4ymZ3ID5O",
		"C0mg5pPtC8U",
		"C1XF_qrSJcs",
	]

	return (
		<div>
			<h3 className="text-center text-4xl lg:text-5xl font-black text-text">
				Our Work
			</h3>
			<div className="tabs | max-w-screen-2xl mx-auto mt-6 ~flex gap-3 lg:gap-8 justify-center">
				<h4 className="text-2xl font-semibold px-2 border-l-4 border-primary">
					Video Editing
				</h4>
				<div className="mt-2 overflow-x-auto lg:overflow-visible flex lg:grid gap-4 lg:grid-cols-4 *:!rounded-md *:!shadow-md lg:*:!shadow-lg">
					{reels.map((item) => (
						<Reel key={item} id={item} />
					))}
				</div>
				<h4 className="mt-6 text-3xl font-semibold px-2 border-l-4 border-primary">
					Graphic designing
				</h4>
				<div className="mt-2 grid grid-cols-2 lg:grid-cols-3 gap-4 *:rounded-md *:shadow-lg">
					<img
						src="/images/graphic/8.webp"
						alt="Graphic Design Work"
					/>
					<img
						src="/images/graphic/9.webp"
						alt="Graphic Design Work"
					/>
					<img
						src="/images/graphic/10.webp"
						alt="Graphic Design Work"
					/>
					<img
						src="/images/graphic/11.webp"
						alt="Graphic Design Work"
					/>
					<img
						src="/images/graphic/12.webp"
						alt="Graphic Design Work"
					/>
					<img
						src="/images/graphic/13.webp"
						alt="Graphic Design Work"
					/>
					<img
						src="/images/graphic/14.webp"
						alt="Graphic Design Work"
					/>
					<img
						src="/images/graphic/15.webp"
						alt="Graphic Design Work"
					/>
					<img
						src="/images/graphic/16.webp"
						alt="Graphic Design Work"
					/>
				</div>

				<h4 className="mt-6 text-3xl font-semibold px-2 border-l-4 border-primary">
					Photoshoots
				</h4>
				<div className="mt-2 grid grid-cols-2 lg:grid-cols-3 gap-4 *:rounded-md *:shadow-lg *:aspect-square *:object-cover">
					<img
						src="/images/photoshoots/1.webp"
						alt="Photoshoot Work"
					/>
					<img
						src="/images/photoshoots/2.webp"
						alt="Photoshoot Work"
					/>
					<img
						src="/images/photoshoots/3.webp"
						alt="Photoshoot Work"
					/>
					<img
						src="/images/photoshoots/4.webp"
						alt="Photoshoot Work"
					/>
					<img
						src="/images/photoshoots/5.webp"
						alt="Photoshoot Work"
						className="lg:hidden"
					/>
					<img
						src="/images/photoshoots/6.webp"
						alt="Photoshoot Work"
					/>
					<img
						src="/images/photoshoots/7.webp"
						alt="Photoshoot Work"
					/>
					<img
						src="/images/photoshoots/8.webp"
						alt="Photoshoot Work"
					/>
					<img
						src="/images/photoshoots/9.webp"
						alt="Photoshoot Work"
					/>
					<img
						src="/images/photoshoots/10.webp"
						alt="Photoshoot Work"
					/>
				</div>
				<h4 className="mt-6 text-3xl font-semibold px-2 border-l-4 border-primary">
					3D Works
				</h4>
				<div className="mt-2 grid lg:grid-cols-4 gap-4 *:rounded-md *:shadow-lg">
					<iframe
						src="https://www.youtube.com/embed/6iYxgO2-RzY"
						title="3D Headphones Showcase/ Product modelling/ Sasi artworks"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						className="col-span-2 w-full aspect-video ~rounded-md"
					></iframe>
					<iframe
						src="https://www.youtube.com/embed/yrLAAWxnExE"
						title="Introducing Designing Booth logo | Digital Marketing Agency |"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						allowFullScreen
						className="col-span-2 w-full aspect-video ~rounded-md"
					></iframe>
					<img src="/images/3d/1.jfif" alt="3D Work" />
					<img src="/images/3d/2.jfif" alt="3D Work" />
					<img src="/images/3d/3.jfif" alt="3D Work" />
					<img src="/images/3d/4.jfif" alt="3D Work" />
				</div>
			</div>
		</div>
	)
}
