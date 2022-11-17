import React from "react";
import { useStateContext } from "../services/api-context";
import Thought from "./thought-component";

const ThoughtList = () => {
  const { data } = useStateContext();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((item, _) => (
        <div key={item.id} className="flex justify-center py-8">
          <Thought item={item} />
        </div>
      ))}
    </div>
  );
};

export default ThoughtList;
