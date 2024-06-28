import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native'
import { RootStackParamList } from '../../utils/types';

type Props = {
    trailerId: string;
}

const TrailerPage = ({trailerId}: Props) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
    return (
    <View>
        <Text>
            TrailerPage
            {trailerId}
        </Text>
        
        </View>
  )
}

export default TrailerPage