import Link from 'next/link'

type CategoryNavProps = {
	data: CotegorTyp[]
}

export interface CotegorTyp {
	id: string
	name: string
}
const BrendsCotegory = ({
	brend,
	cotegory,
}: {
	brend?: string
	cotegory: CotegorTyp[] // Изменено с CategoryNavProps[] на CotegorTyp[]
}) => {
	return (
		<div className='w-full'>
			<div className='title mb-[15px] text-[#000000] text-[16px] font-medium leading-[130%]'>
				<h2>Brendi</h2>
			</div>
			<div className='grid grid-cols-3 gap-[4px]'>
				{cotegory?.map(({ name, id }) => {
					return (
						<Link
							href={`/fillter?brend=${id}`}
							key={id}
							className={`${
								String(id) === String(brend)
									? ' bg-[#134E9B] text-white'
									: 'text-[#0A1729] bg-white'
							}  px-[18px]  py-[7px] rounded-[30px] text-center leading-[16px] text-[12px]`}
						>
							{name}
						</Link>
					)
				})}
				<Link
					href={`/fillter?brend=`}
					className={`${
						!brend ? ' bg-[#134E9B] text-white' : 'text-[#0A1729] bg-white'
					}  px-[18px]  py-[7px] rounded-[30px] text-center leading-[16px] text-[12px]`}
				>
					Hammasi
				</Link>
			</div>
		</div>
	)
}

export default BrendsCotegory