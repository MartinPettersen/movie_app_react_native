import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { useGetPopularMovies } from "../../hooks/useGetPopularMovies";
import { MovieType } from "../../utils/types";
import { Feather } from "@expo/vector-icons";
import MovieCircles from "./MovieCircles";

const { width } = Dimensions.get("window");

type RenderProp = {
  item: MovieType;
  index: number;
};

const PopularContainer = () => {
  const movies = useGetPopularMovies();
  const [currentIndex, setCurrentIndex] = useState(0);

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
    </View>
  );

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / (width - 20));
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item: MovieType) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
      />
      <MovieCircles movies={movies} currentIndex={currentIndex} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    position: "relative",
  },
  card: {
    width: width - 20,
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
    top: 134,
    left: 0,
    fontWeight: "bold",
    fontSize: 26,
    right: 0,
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: "center",
  },
  indexer: {
    position: "absolute",
    bottom: 1,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PopularContainer;
