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
import { MovieType, RootStackParamList } from "../../utils/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type RenderProp = {
  item: MovieType;
};

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<MovieType[]>([]);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const movies = useGetMoviesByQuery(searchTerm);

  const handleSearchChange = (text: string) => {
    setSearchTerm(text);
  };

  const handleSearch = () => {
    setSearchResult(movies);
    console.log("Search term:", searchTerm);
    console.log("Search result:", movies);
    console.log("Search result length:", movies.length);
  };

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
        <Text style={styles.title}>{item.original_title}</Text>
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
      {searchResult.length > 0 && (
        <View style={styles.resultContainer}>
          <FlatList
            data={movies}
            renderItem={renderMovieItem}
            keyExtractor={(item: MovieType) => item.id.toString()}
            numColumns={1}
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
  },
  resultText: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
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
});

export default SearchPage;
