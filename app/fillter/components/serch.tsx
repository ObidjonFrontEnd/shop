export interface SearchParams {
	brend?: string | string[] | undefined
}

export interface PageProps {
	params: Promise<{ [key: string]: string | string[] | undefined }>
	searchParams: Promise<SearchParams>
}