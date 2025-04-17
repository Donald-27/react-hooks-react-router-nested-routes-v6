// src/pages/Movie.jsx
import { useParams, useOutletContext } from "react-router-dom";

function Movie() {
  const { id } = useParams();
  const movies = useOutletContext();

  const movie = movies.find((movie) => movie.id === parseInt(id));

  if (!movie) return <h2>Movie not found</h2>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p><strong>Time:</strong> {movie.time}</p>
      <p><strong>Genres:</strong> {movie.genres.join(", ")}</p>
    </div>
  );
}

export default Movie;
