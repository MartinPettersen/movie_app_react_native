import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import React from "react";
import GenresScreen from "./screens/GenresScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import SearchScreen from "./screens/SearchScreen";
import MovieDetailsScreen from "./screens/MovieDetailsScreen";
import GenreScreen from "./screens/GenreScreen";
import ActorDetailsScreen from "./screens/ActorDetailsScreen";
import TrailerScreen from "./screens/TrailerScreen";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const GenreStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="MovieDetails" component={MovieDetailsScreen} />
    <HomeStack.Screen name="ActorDetails" component={ActorDetailsScreen} />
    <HomeStack.Screen name="Trailer" component={TrailerScreen} />
  </HomeStack.Navigator>
);

const SearchStackScreen = () => (
  <SearchStack.Navigator screenOptions={{ headerShown: false }}>
    <SearchStack.Screen name="Search" component={SearchScreen} />
    <SearchStack.Screen name="ActorDetails" component={ActorDetailsScreen} />
    <SearchStack.Screen name="Trailer" component={TrailerScreen} />
  </SearchStack.Navigator>
);

const GenreStackScreen = () => (
  <GenreStack.Navigator screenOptions={{ headerShown: false }}>
    <GenreStack.Screen name="Genres" component={GenresScreen} />
    <GenreStack.Screen name="GenreDetails" component={GenreScreen} />
    <GenreStack.Screen name="Trailer" component={TrailerScreen} />

  </GenreStack.Navigator>
);

const TabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          backgroundColor: "black",
        },
        headerShown: false,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
          color: "black",
        },
      }}
    >
      <Tab.Screen
        name={"home"}
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"film"}
              size={25}
              color={focused ? "white" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"genres"}
        component={GenreStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"grid"}
              size={25}
              color={focused ? "white" : "grey"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={"search"}
        component={SearchStackScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"search"}
              size={25}
              color={focused ? "white" : "grey"}
            />
          ),
        }}
      />
       
    </Tab.Navigator>
  );
};

export default TabsNavigation;
