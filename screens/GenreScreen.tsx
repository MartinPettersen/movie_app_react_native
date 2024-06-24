import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../utils/types";
import GenreDetailsPage from "../components/(genre)/GenreDetailsPage";

type GenreRouteProp = RouteProp<RootStackParamList, "GenreDetails">;

const GenreScreen = () => {
  const route = useRoute<GenreRouteProp>();
  const { genre } = route.params;

  return (
    <GenreDetailsPage genre={genre} />
  );
};


export default GenreScreen;
