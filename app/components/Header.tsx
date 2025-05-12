
import React from 'react'

import { LogoSearch } from './logoSearch'
import { TopBar } from './topBar'
import { CategoryNav } from './cotegoryNav'



const AshyoHeader = () => (
	<header className='w-full shadow-sm  pb-[20px]'>
		<TopBar />
		<LogoSearch />
		<CategoryNav />
	</header>
)

export default AshyoHeader
