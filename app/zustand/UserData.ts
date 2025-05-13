// store/userStore.ts
import { create } from 'zustand';

interface User {
  id: number;
  fullname: string;
  email: string;
  role: string;
  is_verified: boolean;
}

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
  message: string;
}

interface UserStore {
  userData: AuthResponse | null;
  setUserData: (data: AuthResponse) => void;
  clearUserData: () => void;
}

// Загружаем данные из localStorage (если есть)
const storedUser = localStorage.getItem('userData');
const initialUserData: AuthResponse | null = storedUser ? JSON.parse(storedUser) : null;

export const useUserStore = create<UserStore>((set) => ({
  userData: initialUserData,
  setUserData: (data: AuthResponse) => {
    localStorage.setItem('userData', JSON.stringify(data));
    set({ userData: data });
  },
  clearUserData: () => {
    localStorage.removeItem('userData');
    set({ userData: null });
  },
}));
