import { create } from "zustand";

interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
}

interface FavoriteState {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (id: number) => void;
}

export const useFavoriteStore = create<FavoriteState>((set) => ({
  favorites: [],
  addFavorite: (movie) =>
    set((state) => {
      // prevent duplicate entries
      if (state.favorites.find((m) => m.id === movie.id)) return state;
      return { favorites: [...state.favorites, movie] };
    }),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((m) => m.id !== id),
    })),
}));
