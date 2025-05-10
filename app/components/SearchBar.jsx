import { Input } from '@/components/ui/input'
import React from 'react';


export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 w-full max-w-lg">
      <select className="border rounded px-2 py-1 text-sm bg-white">
        <option>Kategoriya</option>
      </select>
      <Input placeholder="What are you looking for?" className="flex-1" />
      <button className="bg-blue-700 text-white px-4 py-2 rounded">🔍</button>
    </div>
  );
}