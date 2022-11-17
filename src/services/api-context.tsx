import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { stateContextType, thought } from "../@types";
import { PROD } from "./constants";

const state = createContext<stateContextType>({
  data: [],
  isLoading: false,
  addModalOpen: false,
});

export const ApiContext = ({ children }: any) => {
  const [data, setData] = useState<thought[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const getAllThoughts = () => {
    setIsLoading(true);
    axios
      .get(PROD)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getAllThoughts();
  }, []);

  return (
    <state.Provider
      value={{ data, isLoading, addModalOpen, setAddModalOpen, getAllThoughts }}
    >
      {children}
    </state.Provider>
  );
};

export const useStateContext = () => useContext(state);
