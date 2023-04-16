import React from "react";
import classes from "./MovieList.module.css";
const MovieList = (props) => {
  return (
    <>
      <div className={classes.movieList}>
        {props.movies.map((movie, index) => (
          <img src={movie.Poster} alt="movie"></img>
        ))}
      </div>
    </>
  );
};

export default MovieList;
