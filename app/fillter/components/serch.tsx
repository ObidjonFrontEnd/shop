export interface SearchParams {
	brend?: string | string[] | undefined
}

export interface PageProps {
	params: { [key: string]: string | string[] | undefined }
	searchParams: SearchParams
}
