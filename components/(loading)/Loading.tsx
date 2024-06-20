import React from 'react';
import { ImageBackground, StyleSheet, ActivityIndicator, View, Dimensions } from 'react-native';

const Loading = () => {

  const { width, height } = Dimensions.get('window');
  const isLandscape = width > height;

  if (isLandscape){
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/movie_poster_landscape.png')}
          style={styles.background}
          imageStyle={styles.image}
        >
          <ActivityIndicator size="large" color="white" />
        </ImageBackground>
      </View>
    );    
  }

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
