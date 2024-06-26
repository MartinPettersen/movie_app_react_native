import React from "react";
import { View, Text } from "react-native";
import { ActorType, MovieType } from "../utils/types";
import { RouteProp, useRoute } from "@react-navigation/native";
import MovieDetailsPage from "../components/(movieDetails)/MovieDetailsPage";
import ActorDetailsPage from "../components/(actor)/ActorDetailsPage";

type RootStackParamList = {
  ActorDetail: { actor: ActorType };
};

type ActorDetailRouteProp = RouteProp<RootStackParamList, 'ActorDetail'>;

const ActorDetailsScreen = () => {

    const route = useRoute<ActorDetailRouteProp>();
    const { actor } = route.params;

  return (
    <ActorDetailsPage actor={actor} />
  );
};

export default ActorDetailsScreen;
