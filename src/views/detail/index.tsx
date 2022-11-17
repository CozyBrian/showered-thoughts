import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { thought } from "../../@types";
import AddEditThought from "../../components/add-edit-thought.component";
import Thought from "../../components/thought-component";
import { useStateContext } from "../../services/api-context";
import { DEV } from "../../services/constants";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { setAddModalOpen, getAllThoughts } = useStateContext();

  const [data, setData] = useState<thought>();
  const [isLoading, setIsLoading] = useState(false);

  const getThought = () => {
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
  };

  const deleteThought = () => {
    axios
      .delete(`${DEV}/${id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        getAllThoughts!();
        navigate("/");
      });
  };

  useEffect(() => {
    getThought();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-full justify-center items-center">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-col">
          <Thought item={data} />
          <div className="flex flex-row justify-end gap-2 my-4">
            <button
              onClick={() => setAddModalOpen!(true)}
              className="text-white bg-blue-400 hover:bg-blue-300 active:bg-blue-500 px-4 py-2 rounded-md duration-150"
            >
              Edit
            </button>
            <button
              onClick={() => deleteThought()}
              className="text-white bg-red-400 hover:bg-red-300 active:bg-red-500 px-4 py-2 rounded-md duration-150"
            >
              Delete
            </button>
          </div>
          <AddEditThought mode="EDIT" thought={data} onEdit={getThought} />
        </div>
      )}
    </div>
  );
};

export default Details;
