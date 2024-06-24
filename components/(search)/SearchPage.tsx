import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (text: string) => {
    setSearchTerm(text);
  };

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
        <Feather name={"search"} size={22} color={"white"} />
      </View>
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

  },
  inputText: {
    color: "white"
  }
});

export default SearchPage;
