import React from "react";
import Image from "next/image";
import { PROFILE_IMAGE } from "@/utils/constants";

const Item = () => {
  return (
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
  );
};

export default Item;
