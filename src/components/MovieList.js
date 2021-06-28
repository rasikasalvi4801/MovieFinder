import React from "react";
import "./MovieList.css";

const MovieList = ({ movies }) => {
  const renderedResults = movies.map((movie) => {
    return (
      <div className=" flex-container container text-center" key={movie.id}>
        <div className=" mt-4">
          <h2>{movie.title}</h2>
          <img
            className="w-50"
            alt={movie.poster_path}
            src={`https://image.tmdb.org/t/p/original/` + [movie.poster_path]}
          />
          <h6 className="pt-3">Synopsis:</h6>
          <p>{movie.overview}</p>
          <h6>Popularity:</h6>
          <p>{movie.vote_average}</p>
          <a
            href={`https://www.themoviedb.org/movie/+${movie.id}-+${movie.title}`}
            className="btn btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    );
  });
  return <div className="twocolumn">{renderedResults}</div>;
};

export default MovieList;
