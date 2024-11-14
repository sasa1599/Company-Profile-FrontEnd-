import NavProduct from "@/components/layout/product/navproduct";
import ProductList from "@/components/layout/product/products";
import TestimonialPage from "@/components/layout/product/testimonial";
import React from "react";
import Image from "next/image";

export default function ProductPage() {
  return (
    <div>
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/product-background(1).webp"
          alt="Product page background"
          width={1200}
          height={400}
          priority
          loading="eager"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55"></div>
      </div>
      <div className="relative z-10">
        <NavProduct />
        <ProductList />
        <TestimonialPage />
      </div>
    </div>
  );
}
