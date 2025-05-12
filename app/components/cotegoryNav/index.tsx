import Link from 'next/link'

export const CategoryNav = () => {
	const categories = [
		'Aksiyalar',
		'Smartfonlar',
		'Noutbooklar',
		'Kondetsionerlar',
		'Telivizorlar',
		'Muzlatgichlar',
		'Kiryuvish mashinalari',
	]

	return (
		<div className='hidden md:flex gap-6 px-4 py-2 text-sm  max-w-[1180px] mx-auto justify-between overflow-x-auto'>
			{categories.map((cat, i) => (
				<Link key={i} href='/' className='hover:underline'>
					{cat}
				</Link>
			))}
		</div>
	)
}