import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useGetMoviesByQuery } from "../../hooks/useGetMoviesByQuery";
import { ActorType, MovieType, RootStackParamList } from "../../utils/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useGetActorsByQuery } from "../../hooks/useGetActorsByQuery";

type RenderProp = {
  item: MovieType;
};
type RenderPropActor = {
  item: ActorType;
};
const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showing, setShowing] = useState("movies")
  const [searchResult, setSearchResult] = useState<MovieType[]>([]);
  const [searchResultActors, setSearchResultActors] = useState<ActorType[]>([]);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const movies = useGetMoviesByQuery(searchTerm);
  const actors = useGetActorsByQuery(searchTerm);

  const handleSearchChange = (text: string) => {
    setSearchTerm(text);
  };

  const handleSearch = () => {
    setSearchResult(movies);
    setSearchResultActors(actors);

  };

  const actorsWithImages = searchResultActors.filter(actor => actor.profile_path);
  const actorsWithoutImages = searchResultActors.filter(actor => !actor.profile_path);
  const sortedActors = [...actorsWithImages, ...actorsWithoutImages];

  const moviesWithBackdrop = searchResult.filter(movie => movie.backdrop_path);
  const moviesWithPoster = searchResult.filter(movie => !movie.backdrop_path && movie.poster_path);
  const moviesWithoutImages = searchResult.filter(movie => !movie.backdrop_path && !movie.poster_path);
  const sortedMovies = [...moviesWithBackdrop, ...moviesWithPoster, ...moviesWithoutImages];



  const renderMovieItem = ({ item }: RenderProp) => {
    const imagePath = item.backdrop_path ? item.backdrop_path : item.poster_path;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("MovieDetails", { movie: item })}
      >
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: `https://image.tmdb.org/t/p/original${imagePath}`,
            }}
            resizeMode="cover"
          />
          <Text style={styles.title}>{item.original_title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderActorItem = ({ item }: RenderPropActor) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("ActorDetails", { actor: item })}
    >
      <View style={styles.cardActor}>
        <Image
          style={styles.imageActor}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.profile_path}`,
          }}
          resizeMode="cover"
        />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Søk</Text>
      <View style={styles.searchField}>
        <TextInput
          placeholder="Søk filmer/skuespillere/sjangere..."
          value={searchTerm}
          onChangeText={handleSearchChange}
          placeholderTextColor="#a1a1aa"
          autoFocus={true}
          style={styles.inputText}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Feather name="search" size={22} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: "row", width: "100%", justifyContent: "center", paddingTop: 6,}}>

      <TouchableOpacity style={{backgroundColor: "#18181b",width: 100, borderRadius: 25, padding: 10,justifyContent: "center",  alignItems: "center", margin: 8}} onPress={() => setShowing("movies")}>
          <Text style={{color: "white"}}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor: "#18181b",width: 100, borderRadius: 25, padding: 10,justifyContent: "center", alignItems: "center", margin: 8}} onPress={() => setShowing("actors")}>
          <Text style={{color: "white"}}>Actors</Text>
        </TouchableOpacity>
      </View>
      {(searchResult.length > 0 && showing == "movies") && (
        <View style={styles.resultContainer}>
          <FlatList
            data={sortedMovies}
            renderItem={renderMovieItem}
            keyExtractor={(item: MovieType) => item.id.toString()}
            numColumns={1}
            contentContainerStyle={styles.listContent}
          />
        </View>
      )}
      {(searchResultActors.length > 0 && showing == "actors") && (

      <View style={styles.resultContainer}>
          <FlatList
            data={sortedActors}
            renderItem={renderActorItem}
            keyExtractor={(item: ActorType) => item.id.toString()}
            numColumns={1}
            contentContainerStyle={styles.listContent}
          />
        </View>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    top: 100,
    paddingHorizontal: 20,
  },
  headline: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  searchField: {
    backgroundColor: "#27272a",
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    color: "white",
    flex: 1,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "flex-start",
    flex: 1,
  },
  resultText: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  listContent: {
    paddingBottom: 120,
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
    backgroundColor: "#18181b"
  },
  cardActor: {
    width: 100,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  imageActor: {
    width: "100%",
    height: 100,
    borderRadius: 250,
    backgroundColor: "#18181b"
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
  },
  name: {
    position: "absolute",
    top: 65,
    left: 0,
    fontWeight: "bold",
    fontSize: 10,
    width: 100,
    right: 0,
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: "center",
  },
});

export default SearchPage;
