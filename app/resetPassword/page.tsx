"use client"
import React, { useState } from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { useEmailStore } from '../zustand/reset'
import { EyeClosed, EyeOff } from 'lucide-react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
const ResetPassword = () => {
	const [otp, setOtp] = useState<string>('')
	const email = useEmailStore((state) => state.email)
	const [newPasswor , setPassword] = useState<string>("")
	const [newPasswor1 , setPassword1] = useState<string>("")
	const router = useRouter()
	const [hidden , setHidden] = useState<boolean>(true)
	const [hidden1 , setHidden1] = useState<boolean>(true)

	const onSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
		e.preventDefault()
		if(newPasswor===newPasswor1){
			const response=await axios.post("https://api.ashyo.fullstackdev.uz/auth/reset-password",{
				email , otp , new_password:newPasswor
			})
			if(response.status === 200){
				router.push("/")
			}
		}
	}

	
	return (
		<div className='max-w-[1180px] mx-auto px-[10px] mt-[25px]'>
		

			<form className='max-w-[280px] md:max-w-[380px] rounded-[10px] md:px-[50px] py-[50px] px-[10px] bg-white shadow-lg mx-auto' onSubmit={onSubmit}>

					<h1 className='text-center mb-[20px] text-[20px] font-bold'>Reset Password</h1>
				<label className='mb-[20px] block'>
					<span className='mb-[5px] inline-block'>Tastiqlash kodini kiriting</span>
						<InputOTP maxLength={6} value={otp} onChange={setOtp} >
					<InputOTPGroup>
						<InputOTPSlot index={0}  />
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
			
				</label>

				<label className='mb-[20px] block'>
					<span className='mb-[5px] inline-block'>
						Yangi Password kiriting
					</span>
					<div className="flex justify-between border-gray-400 border-[1px] rounded-[10px] px-[10px] py-[5px]">
						<input type={hidden? "password":"text"} value={newPasswor} onChange={(e)=>{setPassword(e.target.value)}} className='outline-none' />
						<span onClick={()=>{setHidden(!hidden)}}>{
							hidden? <EyeClosed /> : <EyeOff />
						}</span>
					</div>
				</label>

				<label className='mb-[20px] block'>
					<span className='mb-[5px] inline-block'>
						Yangi Password tastiqlash
					</span>
					<div className="flex justify-between border-gray-400 border-[1px] rounded-[10px] px-[10px] py-[5px]">
						<input type={hidden1? "password":"text"} value={newPasswor1} onChange={(e)=>{setPassword1(e.target.value)}} className='outline-none' />
						<span onClick={()=>{setHidden1(!hidden1)}}>{
							hidden1? <EyeClosed /> : <EyeOff />
						}</span>
					</div>
				</label>
				<button className='text-white font-bold bg-[#134E9B] h-[40px] rounded-[6px] w-full mx-auto'>Save</button>
			</form>
		</div>
	)
}

export default ResetPassword
