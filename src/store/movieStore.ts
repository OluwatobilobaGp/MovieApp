import { create } from "zustand";
import { getPopularMovies, searchMovies, getMovieDetails } from "../api/tmdb";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

interface MovieStore {
  movies: Movie[];
  selectedMovie: Movie | null;
  favorites: Movie[];
  loading: boolean;
  error: string | null;

  fetchPopular: () => Promise<void>;
  search: (query: string) => Promise<void>;
  fetchDetails: (id: number) => Promise<void>;
  toggleFavorite: (movie: Movie) => void;
}

export const useMovieStore = create<MovieStore>((set, get) => ({
  movies: [],
  selectedMovie: null,
  favorites: [],
  loading: false,
  error: null,

  fetchPopular: async () => {
    set({ loading: true, error: null });
    try {
      const data = await getPopularMovies();
      set({ movies: data, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch popular movies", loading: false });
    }
  },

  search: async (query) => {
    set({ loading: true, error: null });
    try {
      const data = await searchMovies(query);
      set({ movies: data, loading: false });
    } catch (err) {
      set({ error: "Failed to search movies", loading: false });
    }
  },

  fetchDetails: async (id) => {
    set({ loading: true, error: null });
    try {
      const data = await getMovieDetails(id);
      set({ selectedMovie: data, loading: false });
    } catch (err) {
      set({ error: "Failed to fetch movie details", loading: false });
    }
  },

  toggleFavorite: (movie) => {
    const favorites = get().favorites;
    const exists = favorites.some((m) => m.id === movie.id);

    if (exists) {
      set({ favorites: favorites.filter((m) => m.id !== movie.id) });
    } else {
      set({ favorites: [...favorites, movie] });
    }
  },
}));
