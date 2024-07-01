import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../../utils/colors.json"
import { useGetGenreImage } from "../../hooks/UseGetGenreImage";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../utils/types";

type Props = {
  name: string;
  id: string;
};

const GenreButton = ({ name, id  }: Props) => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();


  const backgroundColor = (colors as Record<string, string>)[name] || "white";
  const imageSource = useGetGenreImage(name);

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GenreDetails', { genre: name, id: id })}>
        
      <View style={styles.buttonContent}>
      <ImageBackground
            source={imageSource}

        style={styles.background}
        imageStyle={styles.image}
      >
        <Text style={styles.text}>{name}</Text>
        <LinearGradient
            colors={["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0)"]}
            locations={[0.3, 1]}
            style={[styles.overlay,  { backgroundColor }]}
          />
      </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    borderRadius: 5,
  },
  buttonContent: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 75,
    marginRight: 5,
    zIndex: 1,
    borderRadius: 5,

  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    zIndex: 3,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,

  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 75,
    marginRight: 5,
    zIndex: 1,
    borderRadius: 5,

  },
  overlay: {
    ...StyleSheet.absoluteFillObject, 
    opacity: 0.2, 
    zIndex: 2, 
    borderRadius: 5,
  },
});

export default GenreButton;
