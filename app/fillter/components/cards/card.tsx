import { Heart, Scale, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Product } from '.'

const CardFilter = ({ product }: { product: Product }) => {
	return (
		<div className=' min-h-[450px] mx-auto'>
			<div className='img w-full rounded-[8px] group flex relative items-center justify-center py-[43px] px-[35px] bg-[#EBEFF3]'>
				<Image src={'/product.png'} className='group-hover:scale-130 duration-[0.5s]' width={202} height={202} alt='name' />

				{product?.is_liked ? (
					<Heart
						className={`$ absolute top-[10px] right-[10px] md:top-[20px] fill-[#E81504]    md:right-[24px] overflow-hidden`}
						color='#E81504'
					/>
				) : (
					<Heart
						className={`$ absolute top-[10px] right-[10px] md:top-[20px] md:right-[24px] overflow-hidden`}
						color='#545D6A'
					/>
				)}

				<div
					className={`${
						product?.is_aksiya ? '' : 'hidden'
					} absolute top-[10px] left-[10px] md:top-[20px] md:left-[24px]`}
				>
					<p className='text-green-400 font-bold bg-white py-[7px] text-[10px] md:text-[16px] shadow-lg px-[5px] md:px-[15px] rounded-[8px]'>
						Скидки
					</p>
				</div>
			</div>

			<div className='mt-[16px]'>
				<Link
					href={'/'}
					className='text-[#545D6A] text-[14px] leading-[19px] mb-[28px]'
				>
					{product?.description}
				</Link>

				<div className='flex w-full flex-col md:gap-[10px] md:flex-row'>
					<div className='flex md:flex-col w-full justify-between  mb-[14px] md:mb-0 mt-[28px]'>
						<p className='font-bold text-[#0A1729] text-[15px]  md:text-[20px] leading-[26px]'>
							{product?.price} usz
						</p>

						<p className='bg-[#F02C961A] px-[5px] md:text-[14px] text-[10px] items-center flex h-[27px]  text-[#F02C96] rounded-[3px]'>
							6 oy/1 200000
						</p>
					</div>

					<div className='flex justify-between gap-[5px]  items-end'>
						<Link
							href={'/'}
							className=' border-[#EBEFF3] border-[1px] flex items-center justify-center rounded-[6px] w-[52px] h-[52px]'
						>
							<Scale color='#545D6A' />
						</Link>

						<Link
							href={'/'}
							className='bg-[#134E9B] flex items-center justify-center rounded-[6px] w-[52px] h-[52px]'
						>
							<ShoppingBag color='#ffffff' />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CardFilter
