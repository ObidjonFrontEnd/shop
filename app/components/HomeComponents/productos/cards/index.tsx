'use client'

import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { ProductItem } from '..'
import CardFilter from '@/app/fillter/components/cards/card'

interface CardsProps {
	products: ProductItem[]
}

const Cards = ({ products }: CardsProps) => {
	return (
		<div className=''>
			<div className='w-full px-4 py-8 md:block hidden'>
				<Swiper
					slidesPerView={4}
					spaceBetween={20}
					navigation
					loop={true}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					modules={[Navigation, Autoplay]}
					className='mySwiper'
				>
					{products.map(product => (
						<SwiperSlide key={product.id}>
							<CardFilter product={product.product} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			<div className="md:hidden mb-[48px]">
				<div className="grid grid-cols-2  gap-[15px] px-[10px]">
						{products.map(product => (
						<SwiperSlide key={product.id}>
							<CardFilter product={product.product} />
						</SwiperSlide>
					))}
				
			</div>
				<div className="text-center">
						<button className='bg-[#EBEFF3] h-[40px] w-[198px] mx-auto rounded-[6px] text-[#134E9B] text-[14px]'>Ko’proq</button>
					</div>
			</div>
		</div>
	)
}

export default Cards
