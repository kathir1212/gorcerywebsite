import React from 'react';
import ProductCard from './ProductCard';
import { useAppContext } from '../context/AppContext';

export const BestSeller = () => {
  const { products } = useAppContext(); // ✅ fixed

  console.log(products, "propro");

  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-medium'>Best Seller</p>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 mt-6 gap-6">
          {products.length > 0 ? (
            products.slice(0, 4).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};
