import { Instagram, Whatsapp, Youtube } from "@/assets/svgs"
import Link from "next/link"

export default function Footer() {
	return (
		<footer className="font-mulish | ~mt-20 bg-text text-background min-h-[30vh] grid pt-8 pb-16 ~border-t-2 ~border-text/20">
			<div className="w-[min(1440px,100%_-_1rem)] mx-auto flex gap-8 flex-wrap justify-center sm:justify-between items-start">
				<picture className="bg-white rounded-2xl">
					<img
						src="/images/logo.webp"
						alt="Logo"
						className="max-w-36"
					/>
				</picture>
				<div>
					<h3 className="text-lg font-bold">Company Information</h3>
					<Link
						href="/#aboutus"
						className="text-background/65 hover:text-background/80 text-lg block mt-2"
					>
						About us
					</Link>
					<Link
						href="/blogs"
						className="text-background/65 hover:text-background/80 text-lg block mt-2"
					>
						Blogs
					</Link>
					<Link
						href="/values"
						className="text-background/65 hover:text-background/80 text-lg block mt-2"
					>
						Vision
					</Link>
				</div>
				<div className="">
					<h3 className="text-lg font-bold text-center">
						Contact Us
					</h3>
					<Link
						href="https://www.instagram.com/octoreachdigital/"
						className="inline-flex items-center m-4"
					>
						<Instagram className="*:fill-background" />
					</Link>
					<Link
						href="https://www.youtube.com/@OCTOREACHDIGITAL"
						className="inline-flex items-center m-4"
					>
						<Youtube className="*:fill-background" />
					</Link>
					<Link
						href="https://wa.me/+919321397805?text=Hello,%20I'm%20interested%20in%20learning%20more%20about%20your%20digital%20marketing%20services.%20Can%20you%20please%20provide%20me%20with%20more%C2%A0information?"
						className="inline-flex items-center m-4"
					>
						<Whatsapp className="*:fill-background" />
					</Link>
				</div>
			</div>
		</footer>
	)
}
