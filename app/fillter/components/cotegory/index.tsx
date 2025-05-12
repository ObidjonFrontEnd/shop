import { CotegorTyp } from '@/app/types/cotegoryType'
import axios from 'axios'
import BrendsCotegory from './brendsCotegory'

interface Props {
	brend?: string | string[] | undefined
}

type CategoryNavProps = {
	data: CotegorTyp[]
}

const Cotegory = async ({ brend }: Props) => {
	const respons = await axios.get(
		'https://api.ashyo.fullstackdev.uz/brands/all'
	)
	const apiData: CategoryNavProps[] = await respons.data

	// Преобразуем данные в формат, ожидаемый BrendsCotegory
	const cotegory = apiData.flatMap(item =>
		item.data.map(brand => ({
			id: String(brand.id), // Преобразуем number в string
			name: brand.name,
		}))
	)

	// Преобразуем brend в строку, если это массив
	const brendValue = Array.isArray(brend) ? brend[0] : brend

	return (
		<div className='w-[280px] h-full  p-[19px] min-h-[600px] rounded-[8px] bg-[#EBEFF3]'>
			<BrendsCotegory brend={brendValue} cotegory={cotegory} />
		</div>
	)
}

export default Cotegory