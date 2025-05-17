import { Bookmark, MapPin, ShoppingBag, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavProfile = () => {
	return (
		<div className='w-full mt-[25px]'>
			<div className='grid grid-cols-2 sm:grid-cols-4 w-full gap-[10px]'>
				<Link href={'/'} className=' h-[75px] bg-[#EBEFF3] rounded-[6px] flex justify-center items-center duration-[0.3s] hover:bg-[#134E9B] group'>
					<User className='text-[#134E9B] group-hover:text-white duration-300'/>
				</Link>

				<Link href={'/'} className=' h-[75px] bg-[#EBEFF3] rounded-[6px] flex justify-center items-center duration-[0.3s] hover:bg-[#134E9B] group'>
					<Bookmark className='text-[#134E9B] group-hover:text-white duration-300' />
				</Link>

				<Link href={'/'} className=' h-[75px] bg-[#EBEFF3] rounded-[6px] flex justify-center items-center duration-[0.3s] hover:bg-[#134E9B] group'>
					<ShoppingBag className='text-[#134E9B] group-hover:text-white duration-300' />
				</Link>

				<Link href={'/'} className=' h-[75px] bg-[#EBEFF3] rounded-[6px] flex justify-center items-center duration-[0.3s] hover:bg-[#134E9B] group'>
					<MapPin className='text-[#134E9B] group-hover:text-white duration-300' />
				</Link>
			</div>
		</div>
	)
}

export default NavProfile
