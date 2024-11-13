import React from 'react'
import ProductPage from './main'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Product Kebun Koe Agricore",
  };

export default function Page() {
  return (
    <div>
      <ProductPage/>
    </div>
  )
}
