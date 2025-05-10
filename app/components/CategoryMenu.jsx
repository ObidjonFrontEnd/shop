'use client'
import React, { useEffect, useState } from 'react';

export default function CategoryMenu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://api.ashyo.fullstackdev.uz/categories/all?limit=0')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  return (
    <nav className="flex gap-4 justify-between w-full">
      {categories.map(cat => (
        <button
          key={cat.id}
          className="text-base font-medium px-3 py-1 rounded hover:bg-gray-100 transition"
        >
          {cat.name}
        </button>
      ))}
    </nav>
  );
}