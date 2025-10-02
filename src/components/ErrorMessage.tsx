import { View, Text, StyleSheet } from "react-native";

interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    color: "red", // equivalent to text-error
    fontSize: 18, // equivalent to text-lg
    fontWeight: "700", // bold since we can't use font-quicksand-bold directly
    // fontFamily: "Quicksand-Bold", // uncomment if you’ve loaded a custom font
  },
});
