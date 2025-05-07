import React from 'react';
import mainbanner from '../assets/main-banner.png';
import { Link } from 'react-router-dom';

export const Mainbanner = () => {
  return (
    <div className="relative w-full">
      <img src={mainbanner} alt="Grocery Banner" className="w-full hidden md:block" />
      <img src={mainbanner} alt="Grocery Banner" className="w-full md:hidden" />

      <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start px-4 md:px-10 lg:px-24 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black max-w-md lg:max-w-2xl leading-tight lg:leading-snug drop-shadow-md">
          Freshness You Can Trust, Savings You Will Love
        </h1>

        <div className="mt-6">
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer text-lg font-medium shadow-md"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};
