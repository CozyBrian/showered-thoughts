import AddThought from "../../components/add-thought.component";
import ThoughtList from "../../components/thoughtList.component";
import { useStateContext } from "../../services/api-context";

const Home = () => {
  const { setAddModalOpen } = useStateContext();
  return (
    <div className="flex flex-col p-12 w-full items-center">
      <h1 className="text-5xl uppercase text-center">Showered Thoughts</h1>
      <p className="py-4 text-center">
        A place where you can share all your{" "}
        <span className="italic">shower thoughts</span> with the world
      </p>
      <button
        onClick={() => setAddModalOpen!(true)}
        className="text-white my-8 bg-blue-400 hover:bg-blue-300 active:bg-blue-500 px-4 py-2 rounded-md duration-150"
      >
        Add a Shower Thought
      </button>
      <div className="container">
        <ThoughtList />
      </div>
      <AddThought />
    </div>
  );
};

export default Home;
