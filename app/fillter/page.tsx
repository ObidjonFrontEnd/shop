import CardsFiler from './components/cards'
import Cotegory from './components/cotegory'
import { PageProps } from './components/serch'

export default async function FillterPage({ searchParams }: PageProps) {
	const params = await searchParams
	const brend = params?.brend

	return (
		<div className='p-4 max-w-[1180px] px-[10px] mx-auto mt-[10px]'>
			<div className='flex gap-[21px] h-full'>
				<div className='hidden md:block h-full'>
					<Cotegory brend={brend} />
				</div>
				<div className='w-full h-full'>
					<CardsFiler brend={brend} />
				</div>
			</div>
		</div>
	)
}