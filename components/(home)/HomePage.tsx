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

const HomePage = () => {
  const discoverMovies = useGetDiscoverMovies();
  const cinemaMovies = useGetCinemaMovies();
  
  return (
    <View style={styles.container}>
      <PopularContainer />
      <ScrollView>
      <View style={styles.section}>
        <TopRatedContainer />
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
            headline="Nå på Kino"
            text="Se de Ferskeste Filmene på Stor Skjerm"
            movies={cinemaMovies}
          />
        </View>
        <View style={styles.section}>
          <MovieListContainer
            headline="Oppdag Spennende Nyheter innen Filmverdenen"
            text="Opplev De Nyeste Filmene Nå"
            movies={discoverMovies}
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
