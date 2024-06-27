import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { MovieType, RootStackParamList, ActorInfo, ActorType, MovieTrailer } from "../../utils/types";
import { useGetMovieActors } from "../../hooks/useGetMovieActors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useGetActorImage } from "../../hooks/useGetActorImage";
import { useGetMoviesDetails } from "../../hooks/useGetMoviesDetails";
import { useGetMovieTrailers } from "../../hooks/useGetMovieTrailers";
import MovieTrailerPlayer from "./MovieTrailerPlayer";

type RenderProp = {
  item: ActorType;
};
type RenderTrailerProp = {
  item: MovieTrailer;
};
type Props = {
  movie: MovieType;
};

const MovieDetailsPage = ({ movie }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const cast = useGetMovieActors(movie.id);
  const details = useGetMoviesDetails(movie.id);
  const movieTrailers = useGetMovieTrailers(movie.id) ?? [];
  const renderCastItem = ({ item }: RenderProp) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("ActorDetails", { actor: item })}
    >
    <View style={styles.cardActor}>
        <Image
          style={styles.imageActor}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.profile_path}`,
          }}
          resizeMode="cover"
        />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
  const renderTrailerItem = ({ item }: RenderTrailerProp) => (
      <MovieTrailerPlayer videoId={item.key} />
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
        }}
        resizeMode="cover"
      />
      <View style={styles.content}>
        <Text style={styles.headline}>{movie.original_title}</Text>
        {details && (
          <>
            <Text style={styles.text}>Utgitt: {movie.release_date}, {details.runtime} min</Text>
            <Text style={styles.text}>Stammer ifra: {details.origin_country}, Orginalspråk: {details.original_language}</Text>
          </>
          )}
        <Text style={styles.text}>{movie.overview}</Text>
        <Text style={styles.text}>Poeng: {movie.vote_average}, Populæritet: {movie.popularity}</Text>

      </View>
      
      <FlatList
        data={cast}
        renderItem={renderCastItem}
        keyExtractor={(item: ActorType) => item.id.toString()}
        numColumns={1}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      {movieTrailers.length > 0 ? (
      <FlatList
        data={movieTrailers}
        renderItem={renderTrailerItem}
        keyExtractor={(item: MovieTrailer) => item.key}
        numColumns={1}
        horizontal
        showsHorizontalScrollIndicator={false}
      />): null }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flexGrow: 1,
    paddingTop: 0,
  },
  content: {
    padding: 20,
  },
  headline: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1 / 1.5,
    resizeMode: "cover",
    marginBottom: 20,
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
  
  cardActor: {
    width: 100,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  imageActor: {
    width: "100%",
    height: 100,
    borderRadius: 250,
    backgroundColor: "#18181b"
  },
  name: {
    position: "absolute",
    top: 65,
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

export default MovieDetailsPage;
