"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuthModal } from '@/app/zustand/Auth'
import LoginForm from './login'
import RegisterForm from './register'


export default function AuthModal() {
  const { isOpen, setIsOpen } = useAuthModal();
  const [tab, setTab] = useState("login");

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md w-full bg-white duration-300">
        <DialogTitle className="text-xl font-semibold">
          {tab === "login" ? "Вход в аккаунт" : "Регистрация"}
        </DialogTitle>
        <Tabs defaultValue="login" value={tab} onValueChange={setTab} className="w-full mt-2 duration-300">
          <TabsList className="grid w-full grid-cols-2 duration-300">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <div className="mt-4 duration-300">
            {tab === "login" ? <LoginForm /> : <RegisterForm />}
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}