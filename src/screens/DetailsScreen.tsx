import { useEffect, useState } from "react";
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import axios from "axios";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { useFavoriteStore } from "../store/favoriteStore";
import { useTheme } from '../ThemeContext';

const API_KEY = process.env.EXPO_PUBLIC_TMDB_APIKEY;
const BASE_URL = process.env.EXPO_PUBLIC_TMDB_ENDPOINT;

export default function DetailsScreen({ route, navigation }: any) {
    const { movieId } = route.params;
    const { theme, mode, toggleTheme } = useTheme();
    const styles = createStyles(theme);

    const [movie, setMovie] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const addFavorite = useFavoriteStore((state) => state.addFavorite);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/movie/${movieId}`, {
                    params: { api_key: API_KEY },
                });
                setMovie(res.data);
            } catch (err) {
                setError("Failed to load movie details.");
            } finally {
                setLoading(false);
            }
        };
        fetchMovieDetails();
    }, [movieId]);

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;

    // const favorites = useFavoriteStore((state) => state.favorites);
    // const isFavorite = favorites.some((fav) => fav.id === movie.id);


    return (
        <ScrollView style={styles.container}>
            {/* Poster */}
            <Image
                source={{
                    uri: movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "https://via.placeholder.com/300x450.png?text=No+Image",
                }}
                style={styles.poster}
                resizeMode="cover"
            />

            {/* Movie Title */}
            <Text style={styles.title}>{movie.title}</Text>

            {/* Release Date + Rating */}
            <Text style={styles.subInfo}>
                Release: {movie.release_date} | ⭐ {movie.vote_average.toFixed(1)}
            </Text>

            {/* Overview */}
            <Text style={styles.overview}>{movie.overview}</Text>

            {/* Add to Favorites */}
            <TouchableOpacity
                onPress={() =>
                    addFavorite({
                        id: movie.id,
                        title: movie.title,
                        poster_path: movie.poster_path,
                        vote_average: movie.vote_average,
                    })
                }
                style={styles.button}
            >
                <Text style={styles.buttonText}>+ Add to Favorites</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("Favorites")}
                className="bg-primary py-3 rounded-xl mx-4 mb-4"
            >
                <Text style={{color: theme.text}} className="text-white text-center text-lg font-bold">
                    View Favorites ❤️
                </Text>
            </TouchableOpacity>
            
        </ScrollView>
    );
}
function createStyles(theme: any) {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.background,
            padding: 16,
        },
        poster: {
            width: "100%",
            height: 380,
            borderRadius: 16,
            marginBottom: 16,
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            color: theme.text,
            marginBottom: 8,
        },
        subInfo: {
            fontSize: 14,
            color: "#666",
            marginBottom: 12,
        },
        overview: {
            fontSize: 16,
            lineHeight: 22,
            color: theme.text,
            marginBottom: 20,
        },
        button: {
            backgroundColor: "#FE8C00",
            paddingVertical: 14,
            borderRadius: 12,
        },
        buttonText: {
            textAlign: "center",
            fontSize: 16,
            fontWeight: "700",
            color: theme.text,
        },
    });
}
