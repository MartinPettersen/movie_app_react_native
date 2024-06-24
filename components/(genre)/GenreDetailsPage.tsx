import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  genre: string;
};

const GenreDetailsPage = ({ genre }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Genre: {genre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default GenreDetailsPage;
