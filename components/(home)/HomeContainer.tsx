import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, View, Text } from 'react-native'
import { useGetMovieGenres } from '../../hooks/useGetMovieGenres';
import { Genre, MovieType } from '../../utils/types';
import { useGetPopularMovies } from '../../hooks/useGetPopularMovies';
import { useGetTopRatedMovies } from '../../hooks/useGetTopRatedMovies';

type RenderProp = {
    item: MovieType
}

const HomeContainer = () => {



    const movies = useGetPopularMovies()

    const renderMovieItem = ({ item }: RenderProp) => (
        <View style={{ padding: 10 }}>
          <Text style={{color: "white"}}>{item.original_title}</Text>
        </View>
      );

  return (
    <View>
        <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item: MovieType) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  )
}

export default HomeContainer