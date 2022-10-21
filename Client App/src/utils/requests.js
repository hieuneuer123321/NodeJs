const API_KEY = "504b85f6fe0a10a9c7f35945e14e7ddf";
const API_KEY2 = "8qlOkxz4wq";
const hostting = "http://localhost:5000/";
// const requests = {
//   fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
//   fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//   fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
//   fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
// };
//http://localhost:5000/8qlOkxz4wq/api/movies/trending
const requests = {
  fetchTrending: `${hostting}${API_KEY2}/api/movies/trending`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `${hostting}${API_KEY2}/api/movies/top-rate`,
  fetchActionMovies: `${hostting}${API_KEY2}/api/movies/discover/28`,
  fetchComedyMovies: `${hostting}${API_KEY2}/api/movies/discover/35`,
  fetchHorrorMovies: `${hostting}${API_KEY2}/api/movies/discover/27`,
  fetchRomanceMovies: `${hostting}${API_KEY2}/api/movies/discover/10749`,
  fetchDocumentaries: `${hostting}${API_KEY2}/api/movies/discover/99`,
  fetchSearch: `${hostting}${API_KEY2}/api/movies/search`,
};

export default requests;
