import axios from "axios";
import React, { useState } from "react";
import { useStateContext } from "../services/api-context";
import { DEV } from "../services/constants";

const AddThought = () => {
  const { addModalOpen, setAddModalOpen } = useStateContext();
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const addThought = () => {
    if (content === "") {
      return;
    }
    if (author === "") {
      setAuthor("Anonymous");
    }
    if (content !== "" && author !== "") {
      axios
        .post(DEV, { author, content })
        .then((res) => {
          console.log(res.data);
          setAddModalOpen!(false);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    }
  };

  const contentOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (content.length <= 121) {
      setContent((prev) => {
        if (prev.length < 120) {
          return event.target.value;
        } else {
          return prev.slice(0, 119);
        }
      });
    }
  };
  const authorOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };

  if (addModalOpen) {
    return (
      <div className="fixed left-0 top-0 w-screen h-screen flex justify-center items-center bg-black/50 z-10">
        <div className="flex flex-col">
          <div className="flex flex-col justify-between p-4 bg-white w-[24rem]  border border-slate-300 hover:border-slate-500 rounded-lg shadow-lg duration-150">
            <div className="h-full">
              <textarea
                onChange={contentOnChange}
                value={content}
                className="border border-slate-300 p-1 w-full h-full rounded-md"
              />
            </div>
            <div className="flex w-full justify-between pt-2">
              <div className="text-xs text-slate-500">{content.length}/120</div>
              <div>
                ~
                <input
                  onChange={authorOnChange}
                  value={author}
                  className="border border-slate-300 p-0.5 pl-1 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end gap-2 my-4">
            <button
              onClick={() => setAddModalOpen!(false)}
              className="text-white bg-red-500 hover:bg-red-300 active:bg-red-400 px-4 py-2 rounded-md duration-150"
            >
              Cancel
            </button>
            <button
              onClick={() => addThought()}
              className="text-white bg-green-500 hover:bg-green-300 active:bg-green-400 px-4 py-2 rounded-md duration-150"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default AddThought;
