import React from 'react';

export default function Logo() {
  return (
    <div className="text-2xl font-bold text-blue-700 flex items-center gap-2">
      <img src="/file.svg" alt="Ashyo Logo" className="w-8 h-8" />
      Ashyo
    </div>
  );
}