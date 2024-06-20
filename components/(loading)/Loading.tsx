import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, ActivityIndicator, View, Dimensions, StatusBar } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/movie_poster.png')}
        style={styles.background}
        imageStyle={styles.image}
      >
        <ActivityIndicator size="large" color="white" />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
  },
});

export default Loading;
