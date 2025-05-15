import { ProductItem } from '@/app/fillter/components/cards'
import axios from 'axios'
import Link from 'next/link'
import InformationBody from './components/information'

interface PageProps {
	params: {
		id: string
	}
}

const ProductItems = async ({ params }: PageProps) => {
	const id = params.id
	const respons = await axios.get(
		`https://api.ashyo.fullstackdev.uz/product-items/${id}`
	)
	const data: ProductItem = await respons.data

	return (
		<div className=' mt-[24px]'>
			<p className='text-[12px] max-w-[1180px] mx-auto px-[10px] md:text-[16px] mb-[16px] text-[#0000004D] leading-[130%]'>
				<Link href={'/'}> Bosh sahifa / </Link>
				<span className='text-[#134E9B] font-semibold'>
					{' '}
					{data?.product?.name}/
				</span>
			</p>
			<h1 className='text-[#06172D] max-w-[1180px] mx-auto px-[10px] text-[16px] mb-[16px] md:text-[32px] leading-[130%] font-bold'>
				{data?.product?.name}
			</h1>
			<InformationBody productData={data} />
		</div>
	)
}

export default ProductItems
