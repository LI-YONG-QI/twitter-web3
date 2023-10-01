import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
};

const Item = ({ image, title }: Props) => {
  return (
    <Link href={`/${title}`} className="px-2.5 py-3.5 w-full flex">
      <div className="w-7 h-7">
        <Image src={image} alt="logo" width="25" height="25" />
      </div>
      <p className="font-bold font-xl ml-5 hidden xl:block capitalize">
        {title}
      </p>
    </Link>
  );
};

export default Item;
