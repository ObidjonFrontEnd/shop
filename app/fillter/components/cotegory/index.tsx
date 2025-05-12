
import axios from 'axios'
import BrendsCotegory from './brendsCotegory'

interface Props {
	brend?: string | string[] | undefined
}

// Определяем интерфейс для объекта brand
interface Brand {
	id: number | string
	name: string
	[key: string]: any // Для других возможных свойств
}

const Cotegory = async ({ brend }: Props) => {
	const respons = await axios.get(
		'https://api.ashyo.fullstackdev.uz/brands/all'
	)
	const apiData = await respons.data

	let cotegory = []
	if (Array.isArray(apiData)) {
		cotegory = apiData.map((brand: Brand) => ({
			id: String(brand.id),
			name: brand.name,
		}))
	} else if (apiData && typeof apiData === 'object' && apiData.data && Array.isArray(apiData.data)) {
		cotegory = apiData.data.map((brand: Brand) => ({
			id: String(brand.id),
			name: brand.name,
		}))
	}

	const brendValue = Array.isArray(brend) ? brend[0] : brend

	return (
		<div className='w-[280px] h-full  p-[19px] min-h-[600px] rounded-[8px] bg-[#EBEFF3]'>
			<BrendsCotegory brend={brendValue} cotegory={cotegory} />
		</div>
	)
}

export default Cotegory