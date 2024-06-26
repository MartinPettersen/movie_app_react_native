import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { ActorType } from '../../utils/types';

type Props = {
    actor: ActorType;
  };

const ActorDetailsPage = ({actor}: Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.cardActor}>
        <Image
          style={styles.imageActor}
          source={{
            uri: `https://image.tmdb.org/t/p/original${actor.profile_path}`,
          }}
          resizeMode="cover"
        />
        <Text style={styles.name}>{actor.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      top: 60,
      paddingHorizontal: 20,
    },
  
    cardActor: {
      width: 300,
      marginHorizontal: 0,
      marginTop: 0,
      borderRadius: 10,
    },
    imageActor: {
      width: "100%",
      height: 500,
      borderRadius: 10,
      backgroundColor: "#18181b"
    },
    name: {
      position: "absolute",
      top: 0,
      left: -150,
      fontWeight: "bold",
      fontSize: 20,
      right: 0,
      color: "white",
      paddingHorizontal: 10,
      paddingVertical: 5,
      textAlign: "center",
      textShadowColor: "rgba(0, 0, 0, 0.75)",
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
  });
  

export default ActorDetailsPage