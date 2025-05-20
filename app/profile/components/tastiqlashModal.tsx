'use client'
import React, { useState } from 'react'
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from '@/components/ui/input-otp'
import { X } from 'lucide-react'
import axios from 'axios'
import { useUserStore } from '@/app/zustand/UserData'


interface TastiqlashModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  isModal: boolean
}

interface User {
  id: number
  fullname: string
  email: string
  role: 'USER' | 'ADMIN' 
  is_verified: boolean
}

interface AuthResponse {
  accessToken: string 
  refreshToken: string 
  user: User
  message: string
}

const TastiqlashModal = ({setModal , isModal}:TastiqlashModalProps) => {
	const [otp, setOtp] = useState<string>('')
	const user = useUserStore((state) => state.userData?.user)

	

	const tastiqlash = async()=>{
		const response = await axios.post("https://api.ashyo.fullstackdev.uz/auth/verify-otp" , {
			email:user?.email,
			otp
		})
	
		if(response.status ===200){
			useUserStore.getState().setUserData(response.data)
			setModal(false)
		}	
	}

	return (
		<div className={`${isModal ? "" : "scale-0" } duration-[0.3s] w-full h-[100vh] flex justify-center items-center bg-white/50 px-[10px] absolute top-0 left-0`}>
			<div className='bg-white mx-auto shadow-lg rounded-[10px] md:min-w-[400px] max-w-[400px] min-h-[300px] flex justify-center items-center px-[10px] relative'>
				<div className=''>
					<h2 className='mb-[20px] text-[#0A1729] text-center font-bold text-[16px] '>Emailnizga yuborilgan tastiqlash kodini kiriting</h2>
					<div className="w-full flex items-center justify-center">
						<InputOTP maxLength={6} value={otp} onChange={setOtp}>
						<InputOTPGroup>
							<InputOTPSlot index={0} />
							<InputOTPSlot index={1} />
							<InputOTPSlot index={2} />
						</InputOTPGroup>
						<InputOTPSeparator />
						<InputOTPGroup>
							<InputOTPSlot index={3} />
							<InputOTPSlot index={4} />
							<InputOTPSlot index={5} />
						</InputOTPGroup>
					</InputOTP>
					</div>
					<div className='text-center'>
						<button className='w-[80%] rounded-[8px] mt-[30px] mx-auto h-[50px] bg-[#134E9B] text-white font-bold' onClick={tastiqlash}>
							Tastiqlash
						</button>
					</div>
				
				</div>
				<div className=" absolute top-[10px] right-[10px] " onClick={() => setModal(false)}>
					<X />
				</div>
				
			</div>
		</div>
	)
}

export default TastiqlashModal
