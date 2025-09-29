import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
  activeTab: "Smart Script" | "Advanced Script";
  setActiveTab: (tab: "Smart Script" | "Advanced Script") => void;
}


export default function TopNavigator({ activeTab, setActiveTab }: Props) {
  return (
    <View style={styles.topNav}>
      <TouchableOpacity onPress={() => setActiveTab("Smart Script")}>
        <Text
          style={[styles.navText, activeTab === "Smart Script" && styles.activeText]}
        >
          Smart Script
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setActiveTab("Advanced Script")}> 
        <View style={styles.blockContainer}>
          <Text
            style={[styles.navText, activeTab === "Advanced Script" && styles.activeText]}
          >
            Advanced Script
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  blockContainer: {
    width: '100%',
    alignSelf: 'stretch',
    display: 'flex',
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#0e0d0dff",
    borderBottomWidth: 1,
    // borderBottomColor: "#fff",
    fontFamily: "Poppins-Regular",
  },
  navText: {
    fontSize: 18,
    color: "#fff",
    paddingBottom: 12,
    fontFamily: "Poppins-Regular",
  },
  activeText: {
    color: "white",
    borderBottomWidth: 4,
    width: '100%',
    textAlign:"center",
    borderBottomColor: "blue",
    paddingBottom: 12,
  },
});