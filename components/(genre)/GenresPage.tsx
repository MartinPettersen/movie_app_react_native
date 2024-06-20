import React from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'
import GenresContainer from './GenresContainer'

const GenresPage = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>GenresPage</Text>
        <GenresContainer />
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

export default GenresPage