import axios from "axios";

const API_KEY = process.env.EXPO_PUBLIC_TMDB_APIKEY; // 🔑 put your TMDb key here
const BASE_URL = process.env.EXPO_PUBLIC_TMDB_ENDPOINT;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

// Functions
export const getPopularMovies = async () => {
  const res = await api.get("/movie/popular");
  return res.data.results;
};

export const searchMovies = async (query: string) => {
  const res = await api.get("/search/movie", {
    params: { query },
  });
  return res.data.results;
};

export const getMovieDetails = async (id: number) => {
  const res = await api.get(`/movie/${id}`);
  return res.data;
};
