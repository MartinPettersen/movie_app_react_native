import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./Layout";
import Loading from "./components/(loading)/Loading";
import { usefetchMovieDBData } from "./hooks/useGetMovieDBData";
import HomeScreen from "./screens/HomeScreen";
import Tabs from "./Tabs";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import TabsNavigation from "./Tabs";

export default function App() {
  // usefetchMovieDBData()

  return (
<View style={styles.container}>
      <NavigationContainer theme={DarkTheme}>
        <TabsNavigation />
      </NavigationContainer>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  }
});
