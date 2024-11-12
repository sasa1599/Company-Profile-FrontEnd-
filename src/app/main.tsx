"use client";

import { ServicePage } from "@/components/layout/home/content-1";
import { HistoryPage } from "@/components/layout/home/content-2";
import { FounderPage } from "@/components/layout/home/founder";
import { HeroPage } from "@/components/layout/home/hero";
import Carousel from "@/components/layout/home/gallery";
import React from "react";

export default function Homepage() {
  return (
    <div>
      <HeroPage />
      <ServicePage />
      <HistoryPage />
      <FounderPage />
      <Carousel />
    </div>
  );
}
