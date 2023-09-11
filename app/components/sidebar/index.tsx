import React from "react";
import Image from "next/image";
import News from "./news";
import Follower from "./follower";

const Sidebar = () => {
  return (
    <div className="w-sidebar">
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
  );
};

export default Sidebar;
