import React from 'react';

export default function HeaderIcons() {
  return (
    <div className="flex gap-4 items-center">
      <span>🌐</span>
      <span className="relative">❤️<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">2</span></span>
      <span className="relative">🛒<span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-1">11</span></span>
      <span className="relative">📩<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">7</span></span>
      <span>👤</span>
    </div>
  );
}