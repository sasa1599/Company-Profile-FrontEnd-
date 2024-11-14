import NavProduct from '@/components/layout/product/navproduct'
import ProductList from '@/components/layout/product/products'
import TestimonialPage from '@/components/layout/product/testimonial'
import React from 'react'

export default function ProductPage() {
  return (
   <div>
      <div className="bg-productIMG bg-cover bg-center h-[300px] relative">
      <div className="absolute inset-0 bg-black/55"></div>
      </div>
      <div>
<NavProduct/>
<ProductList/>
<TestimonialPage/>
      </div>
    </div>
  )
}
