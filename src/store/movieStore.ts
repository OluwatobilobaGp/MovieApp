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
      console.log("✅ Popular Movies Fetched:", data); // 👈 log here
      set({ movies: data, loading: false });
    } catch (err) {
      console.error("❌ Failed to fetch popular movies:", err);
      set({ error: "Failed to fetch popular movies", loading: false });
    }
  },

  search: async (query) => {
    set({ loading: true, error: null });
    try {
      const data = await searchMovies(query);
      console.log("🔍 Search Results:", data); // 👈 log here
      set({ movies: data, loading: false });
    } catch (err) {
      console.error("❌ Failed to search movies:", err);
      set({ error: "Failed to search movies", loading: false });
    }
  },

  fetchDetails: async (id) => {
    set({ loading: true, error: null });
    try {
      const data = await getMovieDetails(id);
      console.log("🎬 Movie Details:", data); // 👈 log here
      set({ selectedMovie: data, loading: false });
    } catch (err) {
      console.error("❌ Failed to fetch movie details:", err);
      set({ error: "Failed to fetch movie details", loading: false });
    }
  },

  toggleFavorite: (movie) => {
    const favorites = get().favorites;
    const exists = favorites.some((m) => m.id === movie.id);

    if (exists) {
      console.log("💔 Removed from favorites:", movie.title);
      set({ favorites: favorites.filter((m) => m.id !== movie.id) });
    } else {
      console.log("❤️ Added to favorites:", movie.title);
      set({ favorites: [...favorites, movie] });
    }
  },
}));
