import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

type MovieTrailerProps = {
  videoId: string;
};

const MovieTrailerPlayer: React.FC<MovieTrailerProps> = ({ videoId }) => {
  const videoUrl = `https://www.youtube.com/watch/${videoId}?modestbranding=1&showinfo=0&controls=1`;

  return (
    <View style={styles.container}>
      <WebView
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: videoUrl }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  webview: {
    width: 400,
    height: 100,
    borderRadius: 15

  },
});

export default MovieTrailerPlayer;
