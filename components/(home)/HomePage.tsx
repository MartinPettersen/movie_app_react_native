import React from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import HomeContainer from "./HomeContainer";
import GenresContainer from "../(genre)/GenresContainer";
import PopularContainer from "../(popular)/PopularContainer";
import { useGetTopRatedMovies } from "../../hooks/useGetTopRatedMovies";
import TopRatedContainer from "../(toprated)/TopRatedContainer";
import { useGetDiscoverMovies } from "../../hooks/useGetDiscoverMovies";
import MovieListContainer from "./MovieListContainer";
import { useGetCinemaMovies } from "../../hooks/useGetCinemaMovies";
import { useGetUpcomingMovies } from "../../hooks/useGetUpcomingMovies";
import { useGetPopularMovies } from "../../hooks/useGetPopularMovies";

const HomePage = () => {
  const popularMovies = useGetTopRatedMovies();
  const discoverMovies = useGetDiscoverMovies();
  const cinemaMovies = useGetCinemaMovies();
  const upcomingMovies = useGetUpcomingMovies();

  return (
    <View style={styles.container}>
      <PopularContainer />
      <ScrollView>
        <View style={styles.section}>
          <MovieListContainer
            headline="Topp Rangerte Filmer"
            text="Filmene som tok verden med storm"
            movies={popularMovies}
          />
        </View>
        <View style={styles.section}>
          <MovieListContainer
            headline="Oppdag Spennende Nyheter innen Filmverdenen"
            text="Opplev De Nyeste Filmene Nå"
            movies={discoverMovies}
          />
        </View>

        <View style={styles.section}>
          <MovieListContainer
            headline="Gled Deg til Nye Eventyr"
            text="Nye Filmer - Snart på et Kino Nær Deg"
            movies={upcomingMovies}
          />
        </View>
        <View style={styles.section}>
          <MovieListContainer
            headline="Nå på Kino"
            text="Se de Ferskeste Filmene på Stor Skjerm"
            movies={cinemaMovies}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
  },
  text: {
    color: "white",
  },
  section: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default HomePage;
