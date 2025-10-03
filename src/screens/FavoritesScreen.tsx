import { View, Text, FlatList, Image, Button } from "react-native";
import { useFavoriteStore } from "../store/favoriteStore";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from '../ThemeContext';
import { StyleSheet } from "react-native";

export default function FavoritesScreen() {
  const { favorites, removeFavorite } = useFavoriteStore();
  const { theme, mode, toggleTheme } = useTheme();
  const styles = createStyles(theme);


  if (favorites.length === 0) {
    return <Text>No favorites yet ❤️</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={ { color: theme.text }}>Popular Movies 🎬</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ margin: 10 }}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
              style={{ width: 120, height: 180, borderRadius: 10 }}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Button
              title="Remove"
              onPress={() => removeFavorite(item.id)}
              color="#FF3B30"
            />
          </View>
        )}
        numColumns={2}
      />
    </SafeAreaView>

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
            fontSize: 14,
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
        
    });
}

