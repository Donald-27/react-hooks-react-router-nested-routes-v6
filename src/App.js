// src/App.jsx
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((res) => res.json())
      .then(setMovies)
      .catch(console.error);
  }, []);

  return (
    <div>
      <NavBar />
      <Outlet context={movies} />
    </div>
  );
}

export default App;
