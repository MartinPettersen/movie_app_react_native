import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useGetPopularMovies } from "../../hooks/useGetPopularMovies";
import { MovieType } from "../../utils/types";
import { Feather } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

type RenderProp = {
  item: MovieType;
  index: number;
};

const PopularContainer = () => {
  const movies = useGetPopularMovies();

  const number_of_movies = movies.length;

  const renderMovieItem = ({ item, index }: RenderProp) => (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
        }}
        resizeMode="cover"
      />
      <Text style={styles.title}>{item.original_title}</Text>
      <View style={styles.indexer}>
        <Feather name={"circle"} size={25} color={"white"} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item: MovieType) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    height: 250,
  },
  card: {
    width: width - 20, // Adjust if needed
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  title: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: "center",
    fontSize: 16,
  },

  indexer: {
    position: "absolute",
    top: 205,
    left: 0,
    right: 0,
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: "center",
    fontSize: 16,
  },
});

export default PopularContainer;
