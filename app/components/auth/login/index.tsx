'use client'

import { useUserStore } from '@/app/zustand/UserData'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import axios from 'axios'
import { FormEvent, useState } from 'react'

export default function LoginForm() {
	const [password, setPassword] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const { setUserData: userDataSet } = useUserStore()
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
	const [userData, setUserData] = useState<AuthResponse | null>(null)

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
			<Button className='w-full bg-blue-800 text-white hover:bg-blue-900'>
				Login
			</Button>
		</form>
	)
}
