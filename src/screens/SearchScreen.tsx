import { useState } from "react";
import {
    View,
    TextInput,
    FlatList,
    Keyboard,
    StyleSheet,
} from "react-native";
import axios from "axios";
import MovieCard from "../components/movieCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import { useTheme } from '../ThemeContext';


const API_KEY = process.env.EXPO_PUBLIC_TMDB_APIKEY;
const BASE_URL = process.env.EXPO_PUBLIC_TMDB_ENDPOINT;

export default function SearchScreen({ navigation }: any) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const { theme, mode, toggleTheme } = useTheme();
    const styles = createStyles(theme);

    const searchMovies = async () => {
        if (!query.trim()) return;

        setLoading(true);
        setError(null);

        try {
            const res = await axios.get(`${BASE_URL}/search/movie`, {
                params: { api_key: API_KEY, query },
            });
            setResults(res.data.results);
        } catch (err: any) {
            setError("Failed to fetch movies. Please try again.");
        } finally {
            setLoading(false);
            Keyboard.dismiss();
        }
    };

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;

    return (
        <View style={styles.container}>
            {/* Search Input */}
            <View style={styles.searchBox}>
                <TextInput
                    style={styles.input}
                    placeholder="Search movies..."
                    placeholderTextColor="#666"
                    value={query}
                    onChangeText={setQuery}
                    onSubmitEditing={searchMovies}
                    returnKeyType="search"
                />
            </View>

            {/* Search Results */}
            <FlatList
                data={results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <MovieCard
                        id={item.id}
                        title={item.title}
                        posterPath={item.poster_path}
                        rating={item.vote_average}
                        onPress={() =>
                            navigation.navigate("Details", { movieId: item.id })
                        }
                    />
                )}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}

function createStyles(theme: any) {
    return StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.background,
    },
    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        margin: 16,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 12,
        backgroundColor: theme.background,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: theme.text,
    },
    });
}

