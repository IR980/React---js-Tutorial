import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h1 className='absolute top-1/3 left-1/2 text-black font-bold text-4xl'>Product Page</h1>

      <nav className="flex justify-center gap-5 py-6">
        <Link className="text-2xl font-bold" to="/product/kids">Kids</Link>
        <Link className="text-2xl font-bold" to="/product/men">Men</Link>
        <Link className="text-2xl font-bold" to="/product/women">Women</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Product;