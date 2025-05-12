import { CotegorTyp } from '@/app/types/cotegoryType'
import BrendsCotegory from './brendsCotegory'
import axios from 'axios'

interface Props {
	brend?: string
}



type CategoryNavProps = {
	data: CotegorTyp[];
};

const Cotegory = async ({ brend }: Props) => {

		const respons = await axios.get('https://api.ashyo.fullstackdev.uz/brands/all')
		const cotegory:CategoryNavProps[] = await respons.data
	

	return (
		<div className='w-[280px] h-full  p-[19px] min-h-[600px] rounded-[8px] bg-[#EBEFF3]'>
			<BrendsCotegory brend={brend} cotegory={cotegory} />
		</div>
	)
}

export default Cotegory
