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
import {
  MovieType,
  RootStackParamList,
  ActorInfo,
  ActorType,
  MovieTrailer,
} from "../../utils/types";
import { useGetMovieActors } from "../../hooks/useGetMovieActors";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useGetActorImage } from "../../hooks/useGetActorImage";
import { useGetMoviesDetails } from "../../hooks/useGetMoviesDetails";
import { useGetMovieTrailers } from "../../hooks/useGetMovieTrailers";
import MovieTrailerPlayer from "./MovieTrailerPlayer";
import { useGetMovieRecommendations } from "../../hooks/useGetMovieRecommendations";
import MovieListContainer from "../(home)/MovieListContainer";
import { useGetSimilarMovies } from "../../hooks/useGetSimilarMovies";

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
  const recommendedMovies = useGetMovieRecommendations(movie.id);
  const similarMovies = useGetSimilarMovies(movie.id);

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
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate("Trailer", { trailerId: item.key })}
      >
        <View style={styles.trailerCard}>
          <Image
            style={styles.thumbnail}
            source={{
              uri: `https://img.youtube.com/vi/${item.key}/mqdefault.jpg`,
            }}
            resizeMode="cover"
          />
        </View>
      </TouchableOpacity>
    </>
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
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row", paddingRight: 8 }}>
                <Text style={styles.text}>Utgitt: </Text>
                <Text style={styles.textGray}>{movie.release_date}</Text>
              </View>
              <View style={{ flexDirection: "row", paddingLeft: 8 }}>
                <Text style={styles.textGray}>{details.runtime}</Text>
                <Text style={styles.text}> min</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "row", paddingRight: 8 }}>
                <Text style={styles.text}>Stammer ifra: </Text>
                <Text style={styles.textGray}>{details.origin_country}</Text>
              </View>
              <View style={{ flexDirection: "row", paddingLeft: 8 }}>
                <Text style={styles.text}>Orginalspråk: </Text>
                <Text style={styles.textGray}>{details.original_language}</Text>
              </View>
            </View>
          </>
        )}
        <Text style={styles.textGray}>{movie.overview}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", paddingRight: 8 }}>
            <Text style={styles.text}>Poeng: </Text>
            <Text style={styles.textGray}>{movie.vote_average}</Text>
          </View>
          <View style={{ flexDirection: "row", paddingLeft: 8 }}>
            <Text style={styles.text}>Populæritet: </Text>
            <Text style={styles.textGray}>{movie.popularity}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={cast}
        renderItem={renderCastItem}
        keyExtractor={(item: ActorType) => item.cast_id.toString()}
        numColumns={1}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={{ paddingTop: 24 }}>
        <Text style={styles.headline}>Trailere:</Text>

        {movieTrailers.length > 0 ? (
          <FlatList
            data={movieTrailers}
            renderItem={renderTrailerItem}
            keyExtractor={(item: MovieTrailer) => item.id}
            numColumns={1}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        ) : null}
      </View>
      <View style={styles.section}>
        <MovieListContainer
          headline="Anbefalinger"
          text="Fordi en god film alltid fortjener en oppfølger"
          movies={recommendedMovies}
        />
      </View>
      <View style={styles.section}>
        <MovieListContainer
          headline="Lignende Filmer Du Vil Elsker"
          text="Filmopplevelser som gir mer av det du elsker"
          movies={similarMovies}
        />
      </View>
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
  textGray: {
    color: "#9ca3af",
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1 / 1.5,
    resizeMode: "cover",
    marginBottom: 20,
  },

  thumbnail: {
    width: "100%",
    aspectRatio: 1 / 0.7,
    resizeMode: "cover",
    marginBottom: 20,
  },
  card: {
    width: 150,
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

  trailerCard: {
    width: 150,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    height: 100,
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
    backgroundColor: "#18181b",
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
  section: {
    flex: 1,
    width: "100%",
    marginVertical: 20,
  },
});

export default MovieDetailsPage;
