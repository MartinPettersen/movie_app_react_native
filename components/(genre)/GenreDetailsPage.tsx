import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useGetGenreImage } from "../../hooks/UseGetGenreImage";
import { useGetMoviesMoviesWithGenre } from "../../hooks/useGetMoviesWithGenre";

type Props = {
  genre: string;
  id: string
};

const GenreDetailsPage = ({ genre, id }: Props) => {

    const imageSource = useGetGenreImage(genre);
    console.log("image source ", imageSource)
    console.log("id " + id)
    const movies = useGetMoviesMoviesWithGenre(id)
    console.log(movies)
  return (
    <View style={styles.container}>
        <Image
        style={styles.image}
        source={imageSource}
        resizeMode="cover"
      />
      <Text style={styles.text}>Genre: {genre}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 20,
  },
  image: {
    width: "100%",
    height: 220,
    aspectRatio: 166 / 94,
    resizeMode: 'cover',
    marginBottom: 20,
    marginTop: 34,
  },
});

export default GenreDetailsPage;
