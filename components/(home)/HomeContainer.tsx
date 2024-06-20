import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, View, Text } from 'react-native'
import { useGetMovieGenres } from '../../hooks/useGetMovieGenres';
import { Genre } from '../../utils/types';

type RenderProp = {
    item: Genre
}

const HomeContainer = () => {


    const movieGenres = useGetMovieGenres()

    const renderGenreItem = ({ item }: RenderProp) => (
        <View style={{ padding: 10 }}>
          <Text style={{color: "white"}}>{item.name}</Text>
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

export default HomeContainer