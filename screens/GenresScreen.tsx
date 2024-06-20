import React from "react";
import GenresPage from "../components/(genre)/GenresPage";
import { View, StyleSheet } from "react-native";

const GenresScreen = () => {
  return (
    <View style={styles.background}>
      <GenresPage />
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default GenresScreen;
