import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Main from "./components/TempDetail/Main";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>aloxxxxx</Text> */}
      <StatusBar style="auto" />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#1e1e1e",
    // alignItems: "center",
    // justifyContent: "center",
    height: "100%",
  },
});
