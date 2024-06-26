import React from 'react'
import { Text, View } from 'react-native'
import { ActorType } from '../../utils/types';

type Props = {
    actor: ActorType;
  };

const ActorDetailsPage = ({actor}: Props) => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <Text style={{color: "white"}}>{actor.name}</Text>
    </View>
  )
}

export default ActorDetailsPage