import  { useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useMovieStore } from "../store/movieStore";

const HomeScreen = () => {
    const { movies, fetchPopular, loading, error } = useMovieStore();

    useEffect(() => {
        const load = async () => {
            await fetchPopular();
            console.log("📽️ Popular Movies:", movies); // ✅ log movies after fetch
        };

        load();
    }, []);

    if (loading) return <ActivityIndicator size="large" />;
    if (error) return <Text>{error}</Text>;

    return (
        <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Text>{item.title}</Text>}
        />
    );
};

export default HomeScreen;
