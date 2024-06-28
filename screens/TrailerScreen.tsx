import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "../utils/types";
import GenreDetailsPage from "../components/(genre)/GenreDetailsPage";
import TrailerPage from "../components/(trailer)/TrailerPage";

type TrailerRouteProp = RouteProp<RootStackParamList, "Trailer">;

const TrailerScreen = () => {
  const route = useRoute<TrailerRouteProp>();
  const { trailerId} = route.params;

  return (
    <TrailerPage trailerId={trailerId} />
  );
};


export default TrailerScreen;
