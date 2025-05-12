'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useEffect } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type Product = {
	title: string
	body: string
	img: string
}
const heroSliderDat: Product[] = [
	{
		title: 'Siz kutgan Xiaomi 12 Mi Laite',
		body: "Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Laite siz uchun eng yaxshi arziydigan takliflarimizdan biridir!",
		img: 'xiomi12lite.png',
	},
	{
		title: 'Sifatli Samsung Galaxy A52',
		body: 'Ishonchli kamera va kuchli batareya bilan jihozlangan Galaxy A52 sizni hayratda qoldiradi!',
		img: 'SamsungA52.png',
	},
	{
		title: 'Apple iPhone 13 - Eng sara tanlov',
		body: 'Yangi avlod chipi bilan iPhone 13 yuqori unumdorlik va mukammal dizaynni taklif etadi.',
		img: 'iphone-Photoroom.png',
	},
	{
		title: 'Redmi Note 12 Pro Max',
		body: 'Keng ekran, yuqori sifatli kamera va qulay interfeysga ega zamonaviy telefon!',
		img: 'xiaomi-redmi-note-12-pro-3-Photoroom.png',
	},
	{
		title: 'Tecno Camon 20 Premier',
		body: 'Hamyonbop narxda kuchli xususiyatlar: Tecno Camon 20 Premier bilan yangicha tajriba!',
		img: 'tecno-camon20-premier-5g-3-Photoroom.png',
	},
]

export default function Hero() {
	useEffect(() => {
		const bullets = document.querySelectorAll('.custom-bullet')
		bullets.forEach(bullet => {
			bullet.addEventListener('click', () => {
				bullets.forEach(b => b.classList.remove('active'))
				bullet.classList.add('active')
			})
		})
	}, [])

	return (
		<div className='w-full relative mx-auto bg-[#F3F0F0] '>
			<Swiper
				className='transition-all relative w-full  duration-500 px-[10px]'
				modules={[Pagination, Autoplay]}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					el: '.custom-pagination',
					clickable: true,
					renderBullet: (index, className) =>
						`<span class="${className} custom-bullet relative w-2.5 h-2.5 rounded-full bg-white/50 mx-1 block"></span>`,
				}}
				spaceBetween={20}
				slidesPerView={1}
				autoHeight={true}
				onSlideChange={swiper => {
					document
						.querySelectorAll('.custom-bullet')
						.forEach((el, i) =>
							el.classList.toggle('active', i === swiper.activeIndex)
						)
				}}
				onSwiper={swiper => {
					setTimeout(() => {
						document
							.querySelectorAll('.custom-bullet')
							.forEach((el, i) =>
								el.classList.toggle('active', i === swiper.activeIndex)
							)
					}, 0)
				}}
			>
				{heroSliderDat?.map(({ title, body, img }, index) => {
					return (
						<SwiperSlide key={index}>
							<div className='w-full  max-w-[1180px] mx-auto h-[210px] md:h-[450px] md:gap-[50px] flex items-center justify-center px-4 relative '>
								<div className='w-[70%] md:full'>
									<h2 className='text-[22px] text-[#203F68] md:text-[#0A1729] md:text-[44px] leading-[120%] font-black mb-2 '>
										{title}
									</h2>
									<p className='text-[11px] text-[#203F6899] md:text-[16px] md:text-[#203F6899] '>
										{body}
									</p>
									<Button className='bg-[#0F4A97] h-[36px] w-[111px] md:h-[54px] md:w-[130px] mt-[22px] text-white font-bold text-[16px]'>
										Batafsil
									</Button>
								</div>
								<div className='w-[30%] h-full md:w-[300px] md:h-[300px] relative'>
									<Image
										src={img}
										alt={title}
										fill	
										unoptimized
										className="object-contain z-0 "
									/>
								</div>
							</div>
						</SwiperSlide>
					)
				})}
				<div className="max-w-[1180px] hidden md:flex relative mx-auto  items-center">
						<div className='custom-pagination mt-[10px] flex items-center justify-center  absolute bottom-4 left-[10px] z-10'></div>
				</div>
			</Swiper>
		</div>
	)
}
