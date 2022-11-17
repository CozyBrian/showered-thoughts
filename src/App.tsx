import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./views/home";
import Details from "./views/detail";

function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen w-screen bg-slate-100">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
