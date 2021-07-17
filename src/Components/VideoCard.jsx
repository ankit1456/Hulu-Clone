import React, { forwardRef, useState } from "react";
import "../CSS/videoCard.css";
import ThumbUpSharpIcon from "@material-ui/icons/ThumbUpSharp";
import FiberManualRecordSharpIcon from "@material-ui/icons/FiberManualRecordSharp";
import { useHistory } from "react-router-dom";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie, alternatemovie }, ref) => {
  const history = useHistory();
  const handleRedirect = (e) => {
    e.preventDefault();
    history.push({
      pathname: `/movie/${movie.title || movie.original_title}`,
      clickedMovie: movie,
    });
  };

  return (
    <div onClick={handleRedirect} ref={ref} className='videoCard'>
      <img
        src={`${base_url}${
          movie.backdrop_path ||
          movie.poster_path ||
          alternatemovie.backdrop_path
        }`}
        alt='movie poster'
      />
      <p className='VideoCard__overview'>{movie.overview}</p>
      <h2>{movie.title || movie.original_title}</h2>
      <p className='VideoCard__stats'>
        {movie.media_type && `${movie.media_type}`}
        {movie.media_type && (
          <FiberManualRecordSharpIcon
            style={{ fontSize: 10, marginBottom: -1.5 }}
            color='#fff'
          />
        )}
        {movie.release_date || `${movie.first_air_date} `}
        <FiberManualRecordSharpIcon
          style={{ fontSize: 10, marginBottom: -1.5 }}
          color='#fff'
        />
        {"  "}{" "}
        <ThumbUpSharpIcon style={{ marginBottom: -1.5, marginLeft: -1 }} />
        {"  "} {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;
