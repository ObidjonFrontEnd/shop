import React from 'react'
import Cards from './cards'
import axios from 'axios'

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


const Products = async () => {

		const respons = await axios.get('https://api.ashyo.fullstackdev.uz/product-items')
		const data:ProductItem[] = await respons.data
	return (
		<div className=''>
			<div className="max-w-[1180px] mx-auto px-[10px] mb-[20px]">
				<h2 className='text-[#000000] font-bold text-[16px] md:text-[32px] leading-[130%]'>Most popular product</h2>
			</div>
			<Cards products ={data}/>

      <div className="max-w-[1180px] mx-auto px-[10px] mb-[20px]">
				<h2 className='text-[#000000] font-bold text-[16px] md:text-[32px] leading-[130%]'>Most popular product</h2>
			</div>
			<Cards products ={data}/>
		</div>
	)
}

export default Products
