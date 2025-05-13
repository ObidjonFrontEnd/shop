"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterForm() {
  return (
    <div className="space-y-4">
      <Input placeholder="Введите электронную почту" type="email" />
      <Input placeholder="Придумайте пароль" type="password" />
      <Button className="w-full bg-blue-800 text-white hover:bg-blue-900">
        Зарегистрироваться
      </Button>
    </div>
  );
}
