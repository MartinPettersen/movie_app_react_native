import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, View, Text, Image, Dimensions } from 'react-native'
import { useGetMovieGenres } from '../../hooks/useGetMovieGenres';
import { Genre, MovieType } from '../../utils/types';
import { useGetPopularMovies } from '../../hooks/useGetPopularMovies';

type RenderProp = {
    item: MovieType
}

const { width, height } = Dimensions.get("window");

const PopularContainer = () => {


    const movies = useGetPopularMovies()

    const renderMovieItem = ({ item }: RenderProp) => (
        <View style={{ padding: 10 }}>
          <Image
        style={{width: width, height:200}}
        source={{
          uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
        }}
      />
          <Text style={{color: "white"}}>{item.original_title}</Text>
        </View>
      );

  return (
    <View>
        <FlatList
        data={movies}
        renderItem={renderMovieItem}
        keyExtractor={(item: MovieType) => item.id.toString()}
        numColumns={1}
      />
    </View>
  )
}

export default PopularContainer