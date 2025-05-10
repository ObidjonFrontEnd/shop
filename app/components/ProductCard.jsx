import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="font-medium text-lg">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.price} сум</p>
      <button className="bg-blue-700 text-white px-4 py-2 rounded w-full">
        В корзину
      </button>
    </div>
  );
}