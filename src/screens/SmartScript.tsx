import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";
import CustomCard from "../components/CustomCard";
import { SafeAreaView } from "react-native-safe-area-context";

const SmartScript = () => {
  const data = [
    {
      id: "1",
      title: "Write Smarter",
      subtitle: "Boost productivity with AI-powered scripts.",
      background: require("../assets/bg1.jpg"),
      description: "This is an Write Smarter image showing a person working on a laptop with A1 elements around.",
    },
    {
      id: "2",
      title: "Organize Ideas",
      subtitle: "Turn scattered thoughts into structured notes.",
      background: require("../assets/b2.jpg"),
      description: "This is an Organize Ideas image showing a person working on a laptop with A2 elements around.",
    },
    {
      id: "3",
      title: "Stay Inspired",
      subtitle: "Let creativity flow with daily insights.",
      background: require("../assets/b3.jpg"),
      description: "This is an Stay Inspired image showing a person working on a laptop with A3 elements around.",
    },
    {
      id: "4",
      title: "Stay Desired",
      subtitle: "Let creativity flow with daily insights.",
      background: require("../assets/b5.jpeg"),
      description: "This is an Stay Inspired image showing a person working on a laptop with A4 elements around.",
    },
  ];

  const [selectedId, setSelectedId] = useState<string>(data[0]?.id || "");
  const [selectedDescription, setSelectedDescription] = useState<string>(data[0]?.description || "");

  useEffect(() => {
    // Set default selected item on mount
    if (data[0]) {
      setSelectedId(data[0].id);
      setSelectedDescription(data[0].description);
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>What type posters do you want to create?</Text>

      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedId(item.id);
              setSelectedDescription(item.description);
            }}
            style={[
              { marginRight: 10 },
              item.id === selectedId && styles.activeCard
            ]}
          >
            <CustomCard
              title={item.title}
              subtitle={item.subtitle}
              background={item.background}
            />
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        style={{ height: 'auto' }}
      />

      <View style={styles.descriptionContainer}>
        <Text style={styles.detailsText}>
          {selectedDescription || 'Image Description'}
        </Text>
      </View>

      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>
          🔵 Generate
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SmartScript;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#020202ff",
    paddingVertical: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    display: 'flex',
    marginBottom: 10,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
  listContent: {
    paddingHorizontal: 10, // spacing on left/right
    height: 200, // adjust height as needed
    borderRadius: 10,
    paddingVertical: 10,
  },
  descriptionContainer: {
    display: 'flex',
    marginBottom: 70, 
    justifyContent: 'center', 
    alignItems: 'flex-start', 
    backgroundColor: '#535252ff', 
    borderRadius: 10, 
    padding: 10, 
    height: 140, 
    marginHorizontal: 10,
  },
  detailsText: {
    color: '#fff',
    textAlign: 'left',
    fontSize: 16,
  },  
  button: {
    width: 410,
    display: 'flex',
    backgroundColor: '#ffffffff',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#000000ff',
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    // marginLeft: 8,
  },
  activeCard: {
    borderWidth: 4,
    borderColor: 'white',
    borderRadius: 10,
  },
});
