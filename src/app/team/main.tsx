"use client";

import HeroTeam from "@/components/layout/team/heroteam";
import SectionTeam from "@/components/layout/team/section-1";
import { IMembers } from "@/types/member";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function TeamPage() {
  const [members, setMembers] = useState<IMembers[]>([]);

  const positions = [
    "Co-Founder",
    "Agronomist/Pest Management Advisor",
    "Office Manager",
    "Agriculture Technician",
    "Human Resources Manager",
    "Equipment Operation Supervisor",
    "Special Projects Supervisor",
    "Facilities Manager",
    "Financial Officer",
    "After-Sales Manager"
  ];

  const getData = async () => {
    try {
      const result = await axios.get("https://randomuser.me/api/?results=10");
      setMembers(result.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <HeroTeam />
      <SectionTeam />
      <div className="flex flex-col items-center mt-10 space-y-8 mx-auto max-w-6xl p-6">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-4">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-500 text-center mb-6">
          We bring together a skilled team to serve you better.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {members.map((value, index) => (
            <MemberCard key={index} value={value} position={positions[index]} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MemberCard({ value, position }: { value: IMembers; position: string }) {
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:-translate-y-2 text-center w-full max-w-[250px] mx-auto">
      <Image
        src={value.picture.large}
        alt="thumbnail"
        width={300}
        height={300}
        className="w-full h-[300px] object-cover rounded-t-lg"
      />
      <div className="text-center text-lg font-semibold text-gray-600 bg-gray-100 py-2">
        {position}
      </div>
      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 bg-green-600 bg-opacity-80 text-white text-center p-4 transition-opacity duration-500 ease-in-out">
        <p className="text-xl font-bold">{value.name.first} {value.name.last}</p>
        <p className="text-base">{value.email}</p>
        <p className="text-base">{value.cell}</p>
        <p className="text-base">{value.location.city}</p>
      </div>
      <div className="text-center mt-4">
        <p className="text-2xl font-semibold text-gray-800">{value.name.title}. {value.name.first} {value.name.last}</p>
      </div>
    </div>
  );
}
