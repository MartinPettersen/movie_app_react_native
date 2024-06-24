import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { useGetGenreImage } from "../../hooks/UseGetGenreImage";
import { useGetMoviesMoviesWithGenre } from "../../hooks/useGetMoviesWithGenre";
import { MovieType, RootStackParamList } from "../../utils/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type Props = {
  genre: string;
  id: string;
};

type RenderProp = {
    item: MovieType;
  };

const GenreDetailsPage = ({ genre, id }: Props) => {
  const imageSource = useGetGenreImage(genre);
  const movies = useGetMoviesMoviesWithGenre(id);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();


  const renderMovieItem = ({ item }: RenderProp) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("MovieDetails", { movie: item })}
    >
      <View style={styles.card}>
        <Image
          style={styles.imageCard}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
          }}
          resizeMode="cover"
        />
        <Text style={styles.title}>{item.original_title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSource} resizeMode="cover" />
      <Text style={styles.text}>Genre: {genre}</Text>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item: MovieType) => item.id.toString()}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
      />
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
    resizeMode: "cover",
    marginBottom: 20,
    marginTop: 34,
  },
  
  card: {
    width: 200,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  imageCard: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
  title: {
    position: "absolute",
    top: 50,
    left: 0,
    fontWeight: "bold",
    fontSize: 10,
    width: 100,
    right: 0,
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: "center",
  },
});

export default GenreDetailsPage;
