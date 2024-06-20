import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import React from "react";
import GenresScreen from "./screens/GenresScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();


const Tab = createBottomTabNavigator();

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
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={"film"}
                size={25}
                color={focused ? "white" : "grey"}
              />
            ),
          }}
        >
          {() => <HomeScreen />}
        </Tab.Screen>
        <Tab.Screen
          name={"Genres"}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={"arrow-right"}
                size={25}
                color={focused ? "white" : "grey"}
              />
            ),
          }}
        >
          {() => <GenresScreen />}
        </Tab.Screen>
        <Tab.Screen
          name={"Search"}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={"search"}
                size={25}
                color={focused ? "white" : "grey"}
              />
            ),
          }}
        >
          {() => <HomeScreen />}
        </Tab.Screen>
      </Tab.Navigator>
  );
};

export default TabsNavigation;
