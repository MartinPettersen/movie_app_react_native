import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { MovieType } from '../../utils/types';

type Props = {
  movie: MovieType;
};

const MovieDetailsPage = ({ movie }: Props) => {
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
        <Text style={styles.text}>Release Date: {movie.release_date}</Text>
        <Text style={styles.text}>Overview: {movie.overview}</Text>
        <Text style={styles.text}>Rating: {movie.vote_average}/10</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexGrow: 1,
    paddingTop: 0,
  },
  content: {
    padding: 20,
  },
  headline: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1 / 1.5,
    resizeMode: 'cover',
    marginBottom: 20,
  },
});

export default MovieDetailsPage;
