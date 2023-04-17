import React from "react";
import classes from "./MovieList.module.css";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import { Pagination } from "swiper";

const MovieList = (props) => {
  const FavoutiteComponent = props.favoutiteComponent;
  return (
    <>
      <div className={classes.movieList}>
        {/* <Swiper
          navigation={true}
          slidesPerView={3}
          spaceBetween={3}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        > */}
          {props.movies.map((movie, index) => (
            // <SwiperSlide>
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
            // </SwiperSlide>
          ))}
        {/* </Swiper> */}
      </div>
    </>
  );
};

export default MovieList;
