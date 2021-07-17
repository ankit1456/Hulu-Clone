import React from "react";
import "../CSS/navbar.css";
import requests from "../request";

const Navbar = ({ setSelectedCategory }) => {
  return (
    <div className='nav'>
      <h2 onClick={() => setSelectedCategory(requests.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setSelectedCategory(requests.fetchToprated)}>
        TopRated
      </h2>

      <h2 onClick={() => setSelectedCategory(requests.fetchActionMovie)}>
        Action
      </h2>
      <h2 onClick={() => setSelectedCategory(requests.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSelectedCategory(requests.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSelectedCategory(requests.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectedCategory(requests.fetchMystry)}>Mystery</h2>
      <h2 onClick={() => setSelectedCategory(requests.fetchSciFi)}>Scifi</h2>
      <h2 onClick={() => setSelectedCategory(requests.fecthWestern)}>
        Western
      </h2>
      <h2 onClick={() => setSelectedCategory(requests.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedCategory(requests.fecthTV)}> Movie</h2>
    </div>
  );
};

export default Navbar;
