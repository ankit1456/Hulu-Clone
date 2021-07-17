import React, { useState, useEffect } from "react";
import "../CSS/results.css";
import VideoCard from "./VideoCard";
import axios from "../axios";
import FlipMove from "react-flip-move";

const Results = ({ selectedCategory }) => {
  const [movies, setMovies] = useState([]);

  const [alternatemovie, setalternateMovie] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      const request = await axios.get(selectedCategory);
      setMovies(request.data.results);
      setalternateMovie(request.data.results[0] || request.data.results[1]);

      return request;
    }
    fetchMovies();
  }, [selectedCategory]);

  return (
    <div className='results'>
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard
            key={movie.id}
            movie={movie}
            alternatemovie={alternatemovie}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Results;
