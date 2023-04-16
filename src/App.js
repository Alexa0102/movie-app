import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";
import MovieList from "./components/MovieList/MovieList";
import Heading from "./components/Heading/Heading";
import SearchBox from "./components/SearchBox/SearchBox";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=9065f301";

    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div className="container-fluid">
      <div className="outerDiv">
        <div className="rowOne d-flex align-items-center mt-4 mb-2">
          <Heading heading="Movies" />
          <SearchBox/>
        </div>
        <div className="row">
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
}

export default App;
