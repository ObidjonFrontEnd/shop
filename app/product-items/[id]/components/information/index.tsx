
import Cards from '@/app/components/HomeComponents/productos/cards'
import ProductImages from './images'
import ProductShopInfo from './productshop'
import TabInfo from './tab'
import { ProductItem } from '@/app/fillter/components/cards'
import axios from 'axios'


interface Props {
	productData: ProductItem
}

const InformationBody = async ({ productData }: Props) => {
		const respons = await axios.get('https://api.ashyo.fullstackdev.uz/product-items')
		const data:ProductItem[] = await respons.data
	return (
		<div>
			<div className="flex gap-[32px] max-w-[1180px] mx-auto px-[10px] md:flex-row flex-col">
				<ProductImages productData={productData} />
				<ProductShopInfo productData={productData} />
			</div>
			<div className="md:mt-[80px] w-full mb-[100px] max-w-[1180px] mx-auto px-[10px]">
				<TabInfo productData={productData}/>
			</div>

			<div className="">
				<h2 className='text-[16px] max-w-[1180px] mx-auto px-[10px] mb-[28px] md:text-[32px] font-bold text-[#000000] leading-[130%]'>Oxirgi ko’rgan mahsulotlar</h2>
				<Cards products ={data}/>
			</div>
		</div>
	)
}

export default InformationBody
