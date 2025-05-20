"use client"
import { useUserStore } from '@/app/zustand/UserData'
import axios from 'axios'

import React, { useState } from 'react'
import TastiqlashModal from './tastiqlashModal'

const Tastiqlash = () => {
	const user = useUserStore((state) => state.userData?.user)
	const [isModal , setModal] = useState<boolean>(false)
	
	const tastiqlashFetch = async()=>{
		const respons = await axios.post("https://api.ashyo.fullstackdev.uz/auth/send-otp",{email:user?.email})
		if(respons.status === 200){
			setModal(true)
		}
	}
	
	return (
		<div>
				<div className="">
					<label className='flex items-center mt-[10px] w-full h-[20px] gap-[10px]'>
						<span>Emailni Tastiqlash</span>
						{user?.is_verified ? <input type="checkbox" className='w-[15px] h-[15px]' defaultChecked disabled /> : <input type="checkbox" onClick={tastiqlashFetch} className='w-[15px] h-[15px]'  /> }	
					</label>
				</div>

			<TastiqlashModal setModal={setModal} isModal={isModal} />
			
		</div>
	)
}

export default Tastiqlash
