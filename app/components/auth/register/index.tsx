"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from 'react'

import axios from 'axios'

import { useUserStore } from '@/app/zustand/UserData'
import { useAuthModal } from '@/app/zustand/Auth'


export default function RegisterForm() {
    const [fullname, setFulname] = useState<string>('')
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
    const {  setIsOpen } = useAuthModal()
  
    const registerFech = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      try {
        const respons = await axios.post(
          'https://api.ashyo.fullstackdev.uz/auth/register',
          {
            email,
            password,
            fullname,
          }
        )
        
        if(respons.status === 200){
				setIsOpen(false)
			}
        
        setUserData(respons.data)
        userDataSet(respons.data)
      } catch (error) {
        console.log(error)
      }
    }



  return (
    <form onSubmit={registerFech} className="space-y-4">

      <Input placeholder="Toliq Ism familya kiriting" onChange={(e)=>{setFulname(e.target.value)}} type="text" />
      <Input placeholder="Elektron pochtangizni kiriting" onChange={(e)=>{setEmail(e.target.value)}} type="email" />
      <Input placeholder="Parolingizni kiriting" type="password"  onChange={(e)=>{setPassword(e.target.value)}} />
      <Button className="w-full bg-blue-800 text-white hover:bg-blue-900">
        Register
      </Button>
    </form>
  );
}
