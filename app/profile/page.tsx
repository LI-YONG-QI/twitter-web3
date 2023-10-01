"use client";
import React from "react";
import Image from "next/image";
import News from "@/components/sidebar/news";
import Follower from "@/components/sidebar/follower";
import dynamic from "next/dynamic";
import { useSIWE } from "connectkit";

import Main from "./main";
import Login from "./login";

const Header = dynamic(() => import("@/components/profile/header"), {
  ssr: false,
});

const Profile = () => {
  const { isSignedIn } = useSIWE();

  return (
    <>
      <main className="col-span-3 w-main border-dark border-r-1  border-l-1 mr-8">
        <Header />
        <div className="bg-dark8 h-2.5 border-b-dark border-b-1"></div>

        {isSignedIn ? <Main /> : <Login />}
      </main>

      <div className="w-sidebar col-span-2">
        <section className="mt-2.5 mb-4">
          <div className=" w-full rounded-full py-2.5 px-4 bg-dark7 flex flex-row">
            <Image
              className="mr-4"
              src="/images/search.svg"
              alt="logo"
              width="16"
              height="16"
            />
            <input
              className="focus:outline-none bg-transparent tracking-tighter text-subMain text-base font-medium"
              placeholder="Search Twitter"
            />
          </div>
        </section>
        <News />
        <Follower />
        <article>
          <p className="text-subMain text-xs font-medium">
            Terms of Service Privacy Policy Cookie Policy Ads info More © 2021
            Twitter, Inc.
          </p>
        </article>
      </div>
    </>
  );
};

export default Profile;
