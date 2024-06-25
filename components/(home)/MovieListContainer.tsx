import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useGetMovieGenres } from "../../hooks/useGetMovieGenres";
import { Genre, MovieType, RootStackParamList } from "../../utils/types";
import { useGetPopularMovies } from "../../hooks/useGetPopularMovies";
import { useGetTopRatedMovies } from "../../hooks/useGetTopRatedMovies";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type RenderProp = {
  item: MovieType;
};

type Props = {
  headline: string;
  text: string;
  movies: MovieType[];
};

const MovieListContainer = ({ headline, text, movies }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderMovieItem = ({ item }: RenderProp) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("MovieDetails", { movie: item })}
    >
      <View style={styles.card}>
        <Image
          style={styles.image}
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
      <Text style={styles.headline}>{headline}</Text>
      <Text style={styles.text}>{text}</Text>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item: MovieType) => item.id.toString()}
        numColumns={1}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headline: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: "gray",
  },
  container: {
    padding: 8,
  },

  card: {
    width: 200,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    backgroundColor: "#18181b",
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

export default MovieListContainer;
