import React, { useState, useEffect } from "react";
import "../CSS/banner.css";
import { useLocation, Link } from "react-router-dom";
import FiberManualRecordSharpIcon from "@material-ui/icons/FiberManualRecordSharp";
import SearchIcon from "@material-ui/icons/Search";
import Results from "./Results";
import Avatar from "@material-ui/core/Avatar";
import { useStateValue } from "../stateManagement/stateProvider";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";
const opts = {
  height: "550",
  width: "100%",
  playVars: {
    autoPlay: 1,
  },
};

const Banner = ({ selectedCategory }) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const [{ user }] = useStateValue();
  const [movie, setMovie] = useState([]);

  const location = useLocation();

  const playTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err.message));
    }
  };

  useEffect(() => {
    setMovie(location.clickedMovie);
  }, [location, movie]);

  return (
    <>
      <div
        className='banner'
        style={{
          backgroundSize: "cover",
          objectFit: "contain",
          backgroundPosition: "top",
          backgroundImage: `linear-gradient(to right bottom,transparent,
          rgba(37, 37, 37, 0.6),
          #111),url(${baseURL}${movie?.backdrop_path})`,
        }}
      >
        {!trailerUrl && (
          <div className='banner__header '>
            <div className='banner__headerleft flex-spaceBetween'>
              <SearchIcon className='banner__HeaderLink' />
              <Link style={{ textDecoration: "none", color: "#fff" }} to='/'>
                <p className='banner__HeaderLink'>Home</p>
              </Link>
              <p className='banner__HeaderLink'>My Stuff</p>
              <p className='banner__HeaderLink'>TV Shows</p>
              <p className='banner__HeaderLink'>Movies</p>
            </div>
            <div className=' flex-spaceBetween'>
              <Avatar src={user?.photoURL} />
              <Link to='/'>
                <img
                  className='banner__logo'
                  src='https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png'
                  alt='logo'
                />
              </Link>
            </div>
          </div>
        )}
        {!trailerUrl ? (
          <div className='banner__contents'>
            <h4>START WATCHING</h4>
            <h1 className='banner__title'>
              {" "}
              {movie?.title || movie?.name || movie?.original_name}{" "}
            </h1>
            <p className='banner__description'>{movie?.overview}</p>
            <p className='movie__stats'>
              TVMA {<FiberManualRecordSharpIcon style={{ fontSize: 8 }} />}{" "}
              Drama {<FiberManualRecordSharpIcon style={{ fontSize: 8 }} />}{" "}
              2020
            </p>
            <div className='banner__buttons'>
              <button
                onClick={() => playTrailer(movie)}
                className='banner__btn banner__btnWhite'
              >
                {" "}
                <PlayArrowIcon
                  style={{ marginBottom: -5.5, marginRight: 3, fontSize: 25 }}
                />
                Play
              </button>
              <button className='banner__btn '>My List</button>
            </div>
          </div>
        ) : (
          <>
            <div className='video__trailer'>
              {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            </div>
            <button onClick={() => setTrailerUrl("")} className='btn-trailer'>
              Close movie
            </button>
          </>
        )}
      </div>
      <div className='banner__lower'>
        <Results selectedCategory={selectedCategory} />
      </div>
    </>
  );
};

export default Banner;
