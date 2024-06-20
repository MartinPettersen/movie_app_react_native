import React from 'react'
import { ImageBackground, View, StyleSheet, Text, ActivityIndicator } from 'react-native'

const Loading = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/movie_poster.png')}
      style={styles.background}
    >

    <ActivityIndicator size="large" color="white" />
    </ImageBackground>
  )
}

const styles= StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1, 
  },
  text: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    zIndex: 2,
    marginTop: 100,
    marginBottom: 100,
 }
})

export default Loading