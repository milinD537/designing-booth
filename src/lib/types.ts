export type Columns = string[]

export interface SheetData {
	columns: Columns
	rows: Array<Record<Columns[number], string>>
}

export interface SheetApiResponse {
	values: string[][]
}

export interface LeaderboardProps {
	data: SheetData
}
