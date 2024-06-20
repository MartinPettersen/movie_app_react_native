import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, View, Text } from 'react-native'
import { useGetMovieGenres } from '../../hooks/useGetMovieGenres';
import { Genre } from '../../utils/types';
import GenreButton from './GenreButton';

type RenderProp = {
    item: Genre
}

const GenresContainer = () => {


    const movieGenres = useGetMovieGenres()
    console.log(movieGenres)
    const renderGenreItem = ({ item }: RenderProp) => (
        <View style={{ padding: 10 }}>
          <GenreButton name={item.name} />
        </View>
      );

  return (
    <View>
        <FlatList
        data={movieGenres}
        renderItem={renderGenreItem}
        keyExtractor={(item: Genre) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  )
}

export default GenresContainer