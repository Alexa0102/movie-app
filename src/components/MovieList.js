import React from "react";
import "./MovieList.css";
const MovieList = (props) => {
  return (
    <>
      <div className="d-flex justify-content-space-center m-3 gap-4">
        {props.movies.map((movie, index) => (
          <img src={movie.Poster} alt="movie"></img>
        ))}
      </div>
    </>
  );
};

export default MovieList;
