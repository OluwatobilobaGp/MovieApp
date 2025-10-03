import { View, Text, FlatList, Image, Button } from "react-native";
import { useFavoriteStore } from "../store/favoriteStore";

export default function FavoritesScreen() {
  const { favorites, removeFavorite } = useFavoriteStore();

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
          <Button
            title="Remove"
            onPress={() => removeFavorite(item.id)}
            color="#FF3B30"
          />
        </View>
      )}
      numColumns={2}
    />
  );
}
