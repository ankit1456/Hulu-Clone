const API_KEY = "36527f23447a177ab80007cf85e703d4";

const urls = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchToprated: `/movie/top_rated/week?api_key=${API_KEY}&language=en-US`,
  fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  fetchMystry: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,

  fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fecthWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,

  fecthTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};

export default urls;
