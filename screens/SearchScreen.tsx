import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomePage from "../components/(home)/HomePage";
import SearchPage from "../components/(search)/SearchPage";

const SearchScreen = () => {
  return (
    <View style={styles.background}>
      <SearchPage />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default SearchScreen;
