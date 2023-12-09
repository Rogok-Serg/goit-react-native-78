import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
// import { StyleSheet } from "react-native";

import { useFonts } from "expo-font";

import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import PostsScreen from "./src/Screens/PostsScreen";
import Home from "./src/Screens/Home";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{
            title: "Registration",
            headerStyle: { height: 0 },
            headerTitleStyle: {
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        />
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerStyle: { height: 0 },
          }}
        />
        <MainStack.Screen
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
          }}
          name="Home"
          component={Home}
        />
        <MainStack.Screen name="PostsScreen" component={PostsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     margin: 0,
//     padding: 0,
//     backgroundColor: "#FFF",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
