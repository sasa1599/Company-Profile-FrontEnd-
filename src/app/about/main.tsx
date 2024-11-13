"use client";
import NavbarAbout from "@/components/navbarabout";
import React from "react";
import { LogoAboutUs } from "../../components/layout/about/aboutuspic";
import HistoryPage from "../../components/layout/about/history";
import { LeaderShip } from "../../components/layout/about/leadership";
import { OurHistory } from "../../components/layout/about/abouthistory";
import EnvironmentPage from "@/components/layout/about/sustainability";

export default function AboutPage() {
  return (
    <div>
      <div className="bg-aboutImg bg-cover bg-center h-[300px] relative inset-0 bg-black opacity-75"></div>
      <div>
        <NavbarAbout />
        <LogoAboutUs />
        <HistoryPage />
        <LeaderShip />
        <OurHistory />
        <EnvironmentPage/>
      </div>
    </div>
  );
}
