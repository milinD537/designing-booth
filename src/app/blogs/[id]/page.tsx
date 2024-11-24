import { getSheetData } from "@/actions/sheet"
import React from "react"

export default async function Page({
	params: { id },
}: {
	params: {
		id: string
	}
}) {
	const data = await getSheetData()
	const rowData = data?.rows.find((item) => item.id === String(id))
	return (
		<section className="blog | space-y-6 max-w-screen-xl mx-auto py-4 px-2">
			<h1 className="text-3xl lg:text-6xl font-bold">{rowData?.title}</h1>
			<img
				src={rowData?.img}
				alt="Blog Image"
				className="aspect-video object-cover object-center rounded-3xl"
			/>
			<p
				dangerouslySetInnerHTML={{
					__html: rowData?.content.replace(/\n/g, "<br/>") || "",
				}}
				className="text-sm lg:text-xl font-medium leading-normal font-mulish"
			></p>
		</section>
	)
}
