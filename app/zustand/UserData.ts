'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

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

interface UserState {
  userData: AuthResponse | null
  setUserData: (data: AuthResponse) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      userData: null,
      setUserData: (data) => set({ userData: data }),
    }),
    {
      name: 'user-data', 
      storage: typeof window !== 'undefined'
        ? createJSONStorage(() => localStorage)
        : undefined, 
    }
  )
)
