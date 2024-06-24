import React from "react";
import { View, Text } from "react-native";
import { MovieType } from "../utils/types";
import { RouteProp, useRoute } from "@react-navigation/native";
import MovieDetailsPage from "../components/(movieDetails)/MovieDetailsPage";

type RootStackParamList = {
  MovieDetail: { movie: MovieType };
};

type MovieDetailRouteProp = RouteProp<RootStackParamList, 'MovieDetail'>;

const MovieDetailsScreen = () => {

    const route = useRoute<MovieDetailRouteProp>();
    const { movie } = route.params;

  return (
    <MovieDetailsPage movie={movie} />
  );
};

export default MovieDetailsScreen;
