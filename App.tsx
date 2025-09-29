import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import SmartScript from "./src/screens/SmartScript";
import AdvancedScript from "./src/screens/AdvancedScript";
import TopNavigator from "./src/components/TopNavigator";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  
  
  const [activeTab, setActiveTab] = useState<"Smart Script" | "Advanced Script">("Smart Script");

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Text Navigator */}
      <TopNavigator activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Screen Content */}
      <View style={styles.screen}>
        {activeTab === "Smart Script" ? <SmartScript /> : <AdvancedScript />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161515ff",
    fontFamily: "Poppins-Regular",
    tintColor: "#ffffffff",
    color: "#ffffffff",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins-Regular", // 👈 apply your font here
  },
});
