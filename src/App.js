import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.module.css";
import MovieList from "./components/MovieList/MovieList";
import Heading from "./components/Heading/Heading";
import SearchBox from "./components/SearchBox/SearchBox";
import AddFavourites from "./components/AddFavourites/AddFavourites";
import RemoveFavourites from "./components/RemoveFavourites/RemoveFavourites";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=$${searchValue}&apikey=9065f301`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};
  return (
    <div className="container-fluid">
      <div className="outerDiv">
        <div className="rowOne d-flex align-items-center mt-4 mb-2">
          <Heading heading="Movies" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="row">
          <MovieList
            movies={movies}
            handleFavouriteClick={addFavouriteMovie}
            favoutiteComponent={AddFavourites}
          />
        </div>
        <div className="rowOne d-flex align-items-center mt-4 mb-2">
          <Heading heading="Favourites" />
        </div>
        <div className="row">
          <MovieList
            movies={favourites}
            handleFavouriteClick={removeFavouriteMovie}
            favoutiteComponent={RemoveFavourites}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
