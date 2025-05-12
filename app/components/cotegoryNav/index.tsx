import { CotegorTyp } from '@/app/types/cotegoryType'
import Link from 'next/link'

type CategoryNavProps = {
	data: CotegorTyp[];
};
export const CategoryNav = async ({data}:CategoryNavProps) => {


	return (
		<div className='hidden md:flex gap-6 px-4 py-2 text-sm  max-w-[1180px] mx-auto justify-between overflow-x-auto'>
			{data.map((cat, i) => (
				<Link key={i} href='/' className='hover:underline'>
					{cat.name}
				</Link>
			))}
		</div>
	)
}