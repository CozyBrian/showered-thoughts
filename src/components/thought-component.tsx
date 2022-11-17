import React from "react";
import { Link } from "react-router-dom";
import { thought } from "../@types";

type PageProps = {
  item?: thought;
};
const Thought = ({ item }: PageProps) => {
  return (
    <Link to={`/${item?.id}`}>
      <div className="flex flex-col justify-between p-4 bg-white w-[24rem] h-32 border border-slate-300 hover:border-slate-500 hover:cursor-pointer rounded-lg shadow-lg duration-150">
        <div>{item?.content}</div>
        <div className="flex w-full justify-end">~{item?.author}</div>
      </div>
    </Link>
  );
};

export default Thought;
