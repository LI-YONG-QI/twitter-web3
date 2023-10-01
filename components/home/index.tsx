import React from "react";
import Image from "next/image";
import Post from "./post";

const Home = () => {
  return (
    <main className="col-span-3 w-main border-r-dark border-l-dark border-r-1  border-l-1 mr-8">
      <header className="w-full flex items-center justify-between p-4 border-b-dark border-b-1">
        <p className="font-bold text-lg">Home</p>
        <Image src="/images/star.svg" alt="Home" width={22} height={21} />
      </header>
      <Post />
      <div className="bg-dark8 h-2.5 border-b-dark border-b-1" />
    </main>
  );
};

export default Home;
