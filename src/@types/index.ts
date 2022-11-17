export type thought = {
  id: string;
  author: string;
  content: string;
};

export type stateContextType = {
  data: thought[];
  isLoading: boolean;
  addModalOpen: boolean;
  setAddModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  getAllThoughts?: () => void;
};
