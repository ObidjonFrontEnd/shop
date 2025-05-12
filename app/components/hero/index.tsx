'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { useEffect } from 'react'
import Image from 'next/image'

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
				className='transition-all relative max-w-[1180px] duration-500 px-[10px]'
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
							<div className='w-full h-[450px] gap-[50px] flex items-center justify-center px-4'>
								<div className=''>
									<h2 className='text-xl md:text-2xl font-semibold mb-2'>
										{title}
									</h2>
									<p className='text-sm md:text-base text-gray-700'>{body}</p>
								</div>
								<div className=''>
									<Image
										src={img}
										alt='iPhone 13'
										width={400}
										height={300}
										unoptimized 
									/>
								</div>
							</div>
						</SwiperSlide>
					)
				})}

				<div className='custom-pagination flex items-center justify-center mt-4 absolute bottom-4 left-[10px] z-10'></div>
			</Swiper>
		</div>
	)
}
