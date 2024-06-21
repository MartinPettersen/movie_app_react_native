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
      <View key={i} style={styles.iconContainer}>
      <Feather
        name={"circle"}
        size={i === currentIndex ? 18 : 10}
        color={"white"}
      />
      </View>
    ))}
  </View>
  )
}

const styles = StyleSheet.create({  
  indexer: {
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
  iconContainer: {
    padding: 2,
  }
});

export default MovieCircles