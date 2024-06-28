import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native'
import { RootStackParamList } from '../../utils/types';
import MovieTrailerPlayer from '../(movieDetails)/MovieTrailerPlayer';

type Props = {
    trailerId: string;
}

const TrailerPage = ({trailerId}: Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
    return (
        <MovieTrailerPlayer videoId={trailerId} />

  )
}

export default TrailerPage