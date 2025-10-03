import { useEffect } from "react";
import { View, FlatList, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useMovieStore } from "../store/movieStore";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import MovieCard from "../components/movieCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from '../ThemeContext';

export default function HomeScreen({ navigation }: any) {
    const { movies, loading, error, fetchPopular } = useMovieStore();
    const { theme, mode, toggleTheme } = useTheme();

    useEffect(() => {
        fetchPopular();
    }, []);

    if (loading) return <Loader />;
    if (error) return <ErrorMessage message={error} />;
    if (movies.length === 0) return <ErrorMessage message="No movies found 📭" />;

    console.log(navigation.getState().routeNames);

    return (
        <SafeAreaView style={{ backgroundColor: theme.background }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 16, marginTop: 16 }}>
                <Text style={[styles.header, { color: theme.text, margin: 0 }]}>Popular Movies 🎬</Text>
                <TouchableOpacity
                    onPress={toggleTheme}
                    style={{
                        padding: 8,
                        backgroundColor: '#fff',
                        borderRadius: 20,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.3,
                        shadowRadius: 3,
                        elevation: 5,
                    }}
                >
                    <Image
                        source={mode === 'light'
                            ? require('../../assets/moon.png')
                            : require('../../assets/sun.png')
                        }
                        style={{ width: 32, height: 32, backgroundColor: '#fff', borderRadius: 16, padding: 4 }}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
            
            {/* <TouchableOpacity
                onPress={() => navigation.navigate("Favorites")}
                className="bg-primary py-3 rounded-xl mx-4 mb-4"
            >
                <Text className="text-white text-center text-lg font-bold">
                    View Favorites ❤️
                </Text>
            </TouchableOpacity> */}

            <FlatList
                data={movies}
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
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff", // bg-white
    },
    header: {
        fontSize: 24, // text-2xl
        fontWeight: "700", // fallback if custom font not loaded
        margin: 16, // m-4
        // color: "#1A1A1A", // approximate text-dark-100
        // fontFamily: "Quicksand-Bold", // if custom font loaded
    },
    listContent: {
        paddingBottom: 20,
    },
});
