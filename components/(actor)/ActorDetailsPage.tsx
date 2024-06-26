import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { ActorType, KnownFor, MovieType, RootStackParamList } from "../../utils/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type Props = {
  actor: ActorType;
};

type RenderProp = {
  item: MovieType;
};

const ActorDetailsPage = ({ actor }: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    console.log(actor.known_for)
  const renderMovieItem = ({ item }: RenderProp) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("MovieDetails", { movie: item })}
    >
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}`,
          }}
          resizeMode="cover"
        />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

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
      <Text style={styles.text}>Kjent for:</Text>
      <FlatList
        data={actor.known_for}
        renderItem={renderMovieItem}
        keyExtractor={(item: KnownFor) => item.title}
        numColumns={1}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

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
    backgroundColor: "#18181b",
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
  
  card: {
    width: 200,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    backgroundColor: "#18181b",
  },
  title: {
    position: "absolute",
    top: 50,
    left: 0,
    fontWeight: "bold",
    fontSize: 10,
    width: 100,
    right: 0,
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2,
  },
  text: {
    color: "white",
    paddingTop: 20,
  },
});

export default ActorDetailsPage;
