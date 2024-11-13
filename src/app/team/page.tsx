

import React from "react";
import TeamPage from "./main";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Team Kebun Koe Agricore",
  };

const Page = () => {
  return (
    <div>
      <TeamPage />
    </div>
  );
};

export default Page;
