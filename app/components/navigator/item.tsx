import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
};

const Item = ({ image, title }: Props) => {
  return (
    <div className="px-2.5 py-3.5 w-full flex">
      <div className="w-7 h-7">
        <Image src={image} alt="logo" width="25" height="25" />
      </div>
      <p className="w-5 font-bold font-xl ml-5">{title}</p>
    </div>
  );
};

export default Item;
