import React from "react";
import Image from "next/image";

const Item = () => {
  return (
    <article className="px-4 py-2.5 border-b-dark border-b-1 flex gap-3.5 items-start">
      <div className="flex flex-col gap-1.5">
        <header className="flex flex-row gap-1">
          <p className="text-dark5 text-sm font-medium">Topic</p>
          <p className="text-dark5 text-sm font-medium">·</p>
          <p className="text-dark5 text-sm font-medium">Time</p>
        </header>
        <article>
          <p className=" w-235 font-bold text-base  tracking-wide">
            Parler may go offline following suspensions by Amazon, Apple and
            Google
          </p>
        </article>
        <footer className="flex flex-row gap-1">
          <p className="text-dark5 text-sm font-medium">Topic</p>
          <p className="text-main text-sm font-medium tracking-tighter">
            #hashtag
          </p>
        </footer>
      </div>

      <Image src="/images/fake-news.png" alt="news" width={70} height={70} />
    </article>
  );
};

export default Item;
