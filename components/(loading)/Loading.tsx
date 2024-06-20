import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, ActivityIndicator, View, Dimensions, StatusBar } from 'react-native';

const Loading = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      setIsLandscape(width > height);
    };

    Dimensions.addEventListener('change', updateOrientation);
    return () => Dimensions.removeEventListener('change', updateOrientation);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={isLandscape ? require('../../assets/images/movie_poster_landscape.png') : require('../../assets/images/movie_poster.png')}
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
