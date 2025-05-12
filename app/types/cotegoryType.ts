	export type CotegorTyp = {
		id: number
		name: string
		image: string
		icon: string
		parentCategoryId: number | null
		createdAt: string
		updatedAt: string
		subCategories: []
	}