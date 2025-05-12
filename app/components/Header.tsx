import axios from 'axios'
import { CategoryNav } from './cotegoryNav'
import { LogoSearch } from './logoSearch'
import { TopBar } from './topBar'
import { CotegorTyp } from '../types/cotegoryType'

const Header = async () => {

	const respons = await axios.get(
		'https://api.ashyo.fullstackdev.uz/categories/all?limit=0'
	)
	const data: CotegorTyp[] = await respons.data

	return (
		<header className='w-full pt-[54px] md:pt-0 shadow-sm  pb-[20px]'>
			<TopBar />
			<LogoSearch data={data} />
			<CategoryNav data={data} />
		</header>
	)
}

export default Header
