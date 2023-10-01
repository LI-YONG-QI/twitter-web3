"use client";
import React from "react";
import Image from "next/image";
import Item from "./item";
import { PROFILE_IMAGE } from "@/utils/constants";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";

const Navigator = () => {
  return (
    <nav className="col-start-1 col-end-2 flex flex-col justify-between h-screen sticky left-[130px] top-0 w-72 xl:w-255">
      <section>
        <div className="p-2.5">
          <div className="w-7 h-7">
            <Image src="/images/logo.svg" alt="logo" width="28" height="23" />
          </div>
        </div>
        <div>
          <Item image="/images/group.svg" title="home" />
          <Item image="/images/explore.svg" title="explore" />
          <Item image="/images/notification.svg" title="notifications" />
          <Item image="/images/msg.svg" title="message" />
          <Item image="/images/bookmark.svg" title="bookmarks" />
          <Item image="/images/list.svg" title="list" />
          <Item image="/images/profile.svg" title="profile" />
          <Item image="/images/more.svg" title="more" />
        </div>
        <div className="my-4">
          <ConnectKitButton />
        </div>
      </section>
      <div className="pb-5 flex justify-between items-center">
        <section className="flex gap-2.5 items-center">
          <Image
            className="rounded-full"
            src={PROFILE_IMAGE}
            alt="profile"
            width="39"
            height="39"
          />
          <div className="hidden xl:block">
            <p className="text-base font-bold text-profileMain">Jerome Bell</p>
            <p className="text-base text-subMain font-medium tracking-tighter">
              @afonsoinocente
            </p>
          </div>
        </section>
        <div className="hidden xl:block">
          <div className="w-8 h-8 flex justify-center items-center ">
            <Image
              src="/images/profile-more.svg"
              alt="more"
              width="20"
              height="5"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigator;
