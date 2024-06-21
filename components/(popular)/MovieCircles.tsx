import React from 'react'
import { View, StyleSheet } from 'react-native'
import { MovieType } from '../../utils/types';
import { Feather } from '@expo/vector-icons';

type Props = { 
    movies: MovieType[];
    currentIndex: number
}

const MovieCircles = ({ movies, currentIndex }: Props) => {
  return (
    <View style={styles.indexer}>
    {movies.map((_, i) => (
      <Feather
        key={i}
        name={"circle"}
        size={i === currentIndex ? 25 : 10}
        color={"white"}
      />
    ))}
  </View>
  )
}

const styles = StyleSheet.create({  indexer: {
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

export default MovieCircles