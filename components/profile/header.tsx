"use client";
import React from "react";
import Image from "next/image";
import { useAccount } from "wagmi";

const Header = () => {
  const { address } = useAccount();
  return (
    <header className="w-full flex items-center justify-between p-4 border-b-dark border-b-1">
      <p className="font-bold text-lg">{address}</p>
      <Image src="/images/star.svg" alt="Home" width={22} height={21} />
    </header>
  );
};

export default Header;
