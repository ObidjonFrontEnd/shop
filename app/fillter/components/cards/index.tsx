import axios from 'axios'
import CardFilter from './card'

interface Props {
	brend?: string | string[] | undefined
}

export interface Configuration {
  id: number;
  product_item_id: string;
  variation_option_id: string;
  createdAt: string;
  updatedAt: string;
}


export interface Color {
  id: number;
  name: string;
  color_code: string;
  createdAt: string;
  updatedAt: string;
}


export interface Product {
  id: number;
  name: string;
  is_liked: boolean;
  category_id: string;
  description: string;
  nasiya: string;
  summary: string;
  price: number;
  rating: number;
  is_aksiya: boolean;
  brand_id: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}


export interface ProductItem {
  id: number;
  price: string;
  image: string;
  product_id: string;
  color_id: string;
  createdAt: string;
  updatedAt: string;
  configurations: Configuration[];
  product: Product;
  color: Color;
}

const CardsFiler = async ({ brend }: Props) => {
	const respons = await axios.get('https://api.ashyo.fullstackdev.uz/product-items')
	const data:ProductItem[] = await respons.data
	

	const brendValue = Array.isArray(brend) ? brend[0] : brend

	return(
		<div className='grid grid-cols-2 gap-[18px] md:gap-[30px] md:grid-cols-3'>
			{
				data?.map((obj , index)=>{
					console.log();
					
						return(
							<div className={`${obj?.product?.brand_id == brendValue || !brendValue ? "":"hidden"}`} key={index}>
								<CardFilter product={obj?.product}/>
							</div>
							
						)
				})
			}
				
		</div>
	)
	
}

export default CardsFiler
