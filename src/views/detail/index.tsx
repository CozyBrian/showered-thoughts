import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { thought } from "../../@types";
import Thought from "../../components/thought-component";
import { DEV } from "../../services/constants";

const Details = () => {
  const { id } = useParams();

  const [data, setData] = useState<thought>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${DEV}/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className="flex w-full justify-center items-center">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col">
          <Thought item={data} />
          <div className="flex flex-row justify-end gap-2 my-4">
            <button className="text-white bg-blue-400 hover:bg-blue-300 active:bg-blue-500 px-4 py-2 rounded-md duration-150">
              Edit
            </button>
            <button className="text-white bg-red-400 hover:bg-blue-300 active:bg-blue-500 px-4 py-2 rounded-md duration-150">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
