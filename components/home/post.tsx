import { PROFILE_IMAGE } from "@/utils/constants";
import React from "react";
import Image from "next/image";

const Post = () => {
  return (
    <div className=" px-4 py-2.5 w-full border-b-dark border-b-1">
      <div className="flex items-center mb-2.5">
        <Image
          className="rounded-full"
          src={PROFILE_IMAGE}
          alt="profile"
          width={50}
          height={50}
        />
        <textarea
          className="resize-none focus:outline-none w-full text-subMain text-xl tracking-tighter pt-3 px-3"
          placeholder="What's happening"
        />
      </div>
      <footer className="flex items-center justify-between">
        <div className="flex flex-row gap-4 ml-14">
          <Image src={"/images/photo.svg"} alt="photo" width={20} height={20} />
          <Image src={"/images/gif.svg"} alt="photo" width={20} height={20} />
          <Image
            src={"/images/analyze.svg"}
            alt="analyze"
            width={20}
            height={20}
          />
          <Image src={"/images/emoji.svg"} alt="emoji" width={20} height={20} />
          <Image src={"/images/emoji.svg"} alt="photo" width={20} height={20} />
        </div>
        <div>
          <button className="opacity-50 bg-main px-4 py-2.5 rounded-full">
            <p className="font-bold text-white text-base"> Tweet </p>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Post;
