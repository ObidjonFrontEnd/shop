import React from 'react';

export default function TopBar() {
  return (
    <div className="w-full bg-gray-100 text-xs flex justify-between px-8 py-1 text-gray-600">
      <div className="flex gap-4">
        <span>Tashkent</span>
        <a href="#" className="hover:underline">About Us</a>
        <a href="#" className="hover:underline">Products</a>
        <a href="#" className="hover:underline">Contacts</a>
      </div>
      <div className="flex gap-4 items-center">
        <span>+998 (71) 123-45-67</span>
        <span>Uz ▼</span>
      </div>
    </div>
  );
}