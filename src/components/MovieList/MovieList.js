import React from "react";
import classes from "./MovieList.module.css";
const MovieList = (props) => {
  const FavoutiteComponent = props.favoutiteComponent;
  return (
    <>
      <div className={classes.movieList}>
        {props.movies.map((movie, index) => (
          <div className={classes.movieHover}>
            <div className={classes.image}>
              <img
                style={{ width: "300px", height: "400px" }}
                src={movie.Poster}
                alt="movie"
              />
            </div>
            <div
              onClick={() => props.handleFavouriteClick(movie)}
              className={classes.overlay}
            >
              <FavoutiteComponent />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
