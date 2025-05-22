'use client'

import { create } from 'zustand'

interface EmailState {
  email: string | null
  setEmail: (email: string) => void
  clearEmail: () => void
}

export const useEmailStore = create<EmailState>((set) => ({
  email: null,
  setEmail: (email) => set({ email }),
  clearEmail: () => set({ email: null }),
}))
