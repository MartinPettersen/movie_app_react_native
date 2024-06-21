import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import HomeContainer from './HomeContainer'
import GenresContainer from '../(genre)/GenresContainer'
import PopularContainer from '../(popular)/PopularContainer'
import { useGetTopRatedMovies } from '../../hooks/useGetTopRatedMovies'
import TopRatedContainer from '../(toprated)/TopRatedContainer'

const HomePage = () => {


  return (
    <View style={styles.container}>
        <PopularContainer />
        <TopRatedContainer />
    </View>
  )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 50,
   },
   text:{
    color: 'white'
   }
})

export default HomePage