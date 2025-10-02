import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Platform } from "react-native";

interface Props {
  id: number;
  title: string;
  posterPath: string | null;
  rating: number;
  onPress: (id: number) => void;
}

export default function MovieCard({ id, title, posterPath, rating, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(id)} activeOpacity={0.8}>
      <Image
        source={{
          uri: posterPath
            ? `https://image.tmdb.org/t/p/w500${posterPath}`
            : "https://via.placeholder.com/200x300.png?text=No+Image",
        }}
         resizeMode="cover"
        style={styles.poster}
      />
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text style={styles.rating}>⭐ {rating.toFixed(1)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 8,
    width: width / 2 - 24, // half of screen minus margins

    // iOS shadow
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },

    // Android shadow
    elevation: 4,
  },
  poster: {
    height: 224,
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    padding: 8,
  },
  title: {
    color: "#111",
    fontWeight: "700",
    fontSize: 16,
  },
  rating: {
    color: "#555",
    fontSize: 14,
    marginTop: 4,
  },
});
