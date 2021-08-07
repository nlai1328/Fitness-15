import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Seperator } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Headertop from "./components/header.js";
import Welcome from "./screens/welcome";
import Login from "./screens/login";
import SignUp from "./screens/signUp";
import Menu from "./routes/menu.js";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Log In" }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{ title: "Sign Up" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
