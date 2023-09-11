import React from "react";
import Image from "next/image";
import { PROFILE_IMAGE } from "@/utils/constants";

const Follower = () => {
  return (
    <section className="bg-dark8 rounded-2xl mb-4">
      <header className="px-4 py-2.5 border-b-1 border-dark">
        <p className="text-xl font-bold text-profileMain tracking-header">
          Who to follow
        </p>
      </header>
      <div className="py-2.5 px-4 flex items-center justify-between border-b-dark border-b-1">
        <section className="flex gap-2.5 items-center">
          <Image
            className="rounded-full"
            src={PROFILE_IMAGE}
            alt="profile"
            width="39"
            height="39"
          />
          <div>
            <p className="text-base font-bold text-profileMain">Jerome Bell</p>
            <p className="text-base text-subMain font-medium tracking-tighter">
              @afonsoinocente
            </p>
          </div>
        </section>
        <button className="px-4 rounded-full border-1 border-main h-btn">
          <p className="text-main text-base font-bold"> Follow </p>
        </button>
      </div>

      <footer className="p-4">
        <p className="text-main text-base font-medium">Show more</p>
      </footer>
    </section>
  );
};

export default Follower;
