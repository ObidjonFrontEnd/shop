'use client'

import { useAuthModal } from '@/app/zustand/Auth'
import { useEmailStore } from '@/app/zustand/reset'
import { useUserStore } from '@/app/zustand/UserData'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function LoginForm() {
	const [password, setPassword] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const { setUserData: userDataSet } = useUserStore()
	const { setIsOpen } = useAuthModal()
	const router = useRouter()
		const emailSet = useEmailStore((state) => state.setEmail)
	
	interface User {
		id: number
		fullname: string
		email: string
		role: string
		is_verified: boolean
	}

	interface AuthResponse {
		accessToken: string
		refreshToken: string
		user: User
		message: string
	}
	const [, setUserData] = useState<AuthResponse | null>(null)

	const resetPassword = async () => {
		const response = await axios.post(
			'https://api.ashyo.fullstackdev.uz/auth/forgot-password',
			{ email }
		)
		if (response.status === 200) {
			router.push('/resetPassword')
			setIsOpen(false)
			emailSet(email)
		}
	}

	const loginFech = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		try {
			const respons = await axios.post(
				'https://api.ashyo.fullstackdev.uz/auth/login',
				{
					email,
					password,
				}
			)
			setUserData(respons.data)
			userDataSet(respons.data)
			if (respons.status === 200) {
				setIsOpen(false)
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<form className='space-y-4' onSubmit={loginFech}>
			<Input
				placeholder='Electron pontangizni kiriting'
				onChange={e => {
					setEmail(e.target.value)
				}}
				type='email'
			/>
			<Input
				placeholder='Parrolingizni kiriting'
				type='password'
				onChange={e => {
					setPassword(e.target.value)
				}}
			/>
			<p
				className='text-end text-[#134E9B] text-[16px] cursor-pointer hover:underline duration-[0.3s]'
				onClick={resetPassword}
			>
				Reset your password
			</p>
			<Button className='w-full bg-[#134E9B] text-white hover:bg-blue-900'>
				Login
			</Button>
		</form>
	)
}
