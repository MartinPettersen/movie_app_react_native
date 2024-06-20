import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Layout from "./Layout";
import Loading from "./components/(loading)/Loading";
import { usefetchMovieDBData } from "./hooks/useGetMovieDBData";
import HomeScreen from "./screens/HomeScreen";
import Tabs from "./Tabs";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  // usefetchMovieDBData()

  return (
    <NavigationContainer>
        <Tabs />
        <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "black"
  }
});
