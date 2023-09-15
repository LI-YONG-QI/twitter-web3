import React from "react";
import Item from "./item";

const News = () => {
  return (
    <section className="bg-dark8 rounded-2xl mb-4">
      <header className="px-4 py-2.5 border-b-1 border-dark">
        <p className="text-xl font-bold text-profileMain tracking-header">
          {"What’s happening"}
        </p>
      </header>
      <Item />
      <Item />
      <Item />
      <footer className="p-4">
        <p className="text-main text-base font-medium">Show more</p>
      </footer>
    </section>
  );
};

export default News;
