import { RouteProp } from '@react-navigation/native';
import React from 'react'
import { View } from 'react-native';
import { RootStackParamList } from '../utils/types';

type GenreRouteProp = RouteProp<RootStackParamList, 'Genre'>;

const GenreScreen = () => {
  return (
    <View>GenreScreen</View>
  )
}

export default GenreScreen