import { ProductItem } from '@/app/fillter/components/cards'
import { Store, Timer, Truck } from 'lucide-react'
interface Props {
	productData: ProductItem
}
const ProductShopInfo = ({ productData }: Props) => {
	return (
		<div>
			<h2 className='text-[#515D6C] text-[16px] leading-[130%]'>
				Narxi:{' '}
				<span className='text-[#06172D] text-[32px] leading-[120%] font-bold'>
					{productData?.product?.price} <span className='text-[24px]'>UZS</span>
				</span>
			</h2>


			<div className=' bg-[#EBEFF3] mxa-w-[474px] px-[10px] mt-[36px] mb-[10px] md:min-w-[474px] mx-auto h-[56px] flex items-center justify-center rounded-[6px] text-[#545D6A] text-[16px] leading-[130%]'>
				<p>Oyiga 456 999 uszdan muddatli to’lov</p>
			</div>
			<div className="flex gap-[14px]">
				<button className='text-[16px] border-[#134E9B] border-[1px] rounded-[6px] text-[#134E9B] bg-[] hover:bg-[#134E9B] hover:text-white leading-[130%] duration-[0.5s] w-[230px] h-[56px]'>Savatga qo‘shish</button>

				<button className='text-[16px] border-[#134E9B] border-[1px] rounded-[6px] text-white bg-[#134E9B] hover:bg-white hover:text-[#134E9B] leading-[130%] duration-[0.5s] w-[230px] h-[56px]'>Savatga qo‘shish</button>
			</div>

			<div className='mt-[46px] grid gap-[20px] mb-[30px] md:mb-0'>
				<p className='flex items-center gap-[16px] text-[#06172DB2] text-[16px] leading-[130%]'><Truck color='#06172DB2' /> Yetkazib berish O’zbekiston bo’ylab</p>
				<p className='flex items-center gap-[16px] text-[#06172DB2] text-[16px] leading-[130%]'><Store color='#06172DB2' /> Yetkazib berish O’zbekiston bo’ylab</p>
				<p className='flex items-center gap-[16px] text-[#06172DB2] text-[16px] leading-[130%]'><Timer color='#06172DB2' /> Yetkazib berish O’zbekiston bo’ylab</p>

			</div>
		</div>
	)
}

export default ProductShopInfo
