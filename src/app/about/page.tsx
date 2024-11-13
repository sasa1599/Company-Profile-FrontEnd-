import React from "react";
import AboutPage from "./main";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Kebun Koe Agricore",
  };

const Page = () => {
  return (
    <>
      <AboutPage />
    </>
  );
};

export default Page;
