import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { useGetMovieGenres } from "../../hooks/useGetMovieGenres";
import { Genre, MovieType } from "../../utils/types";
import { useGetPopularMovies } from "../../hooks/useGetPopularMovies";
import { useGetTopRatedMovies } from "../../hooks/useGetTopRatedMovies";

type RenderProp = {
  item: MovieType;
};

const TopRatedContainer = () => {
  const movies = useGetTopRatedMovies();

  const renderMovieItem = ({ item }: RenderProp) => (
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
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Topp Rangerte Filmer</Text>
      <Text style={styles.text}>Filmene som tok verden med storm</Text>
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

export default TopRatedContainer;
