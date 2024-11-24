"use server"

import { Columns, SheetApiResponse, SheetData } from "@/lib/types"

export async function getSheetData() {
	const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID
	const API_KEY = process.env.NEXT_PUBLIC_API_KEY
	try {
		const response = await fetch(
			`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/Sheet1!A1:Z1000?key=${API_KEY}&valueRenderOption=FORMATTED_VALUE`,
			{ next: { revalidate: 0 } }
		)
		const data: SheetApiResponse | undefined = await response.json()
		if (!data?.values || !data?.values.length)
			throw new Error("No data found")
		const columns = data.values[0]
		const rows: SheetData["rows"] = data.values.slice(1).map((row, idx) => {
			return row.reduce(
				(acc, cell, index) => {
					acc[columns[index]] = cell
					return acc
				},
				{
					id: idx.toString(),
				} as Record<Columns[number], string>
			)
		})

		const newSheetData: SheetData = {
			columns,
			rows,
		}
		// console.dir(
		// 	{ newSheetData },
		// 	{
		// 		depth: null,
		// 	}
		// )

		return newSheetData
	} catch (error) {
		console.log({ error })
		return
	}
}
