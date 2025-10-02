import { View, Text, FlatList, Image } from "react-native";
import { useMovieStore } from "../store/movieStore";

export default function FavoritesScreen() {
  const { favorites } = useMovieStore();

  if (favorites.length === 0) {
    return <Text>No favorites yet ❤️</Text>;
  }

  return (
    <FlatList
      data={favorites}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ margin: 10 }}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
            style={{ width: 120, height: 180, borderRadius: 10 }}
          />
          <Text>{item.title}</Text>
        </View>
      )}
      numColumns={2}
    />
  );
}
