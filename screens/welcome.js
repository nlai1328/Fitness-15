import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native"

function Welcome({ navigation }) {
  const loginHandler = () => {
    navigation.navigate("Login")
  }
  const signUpHandler = () => {
    navigation.navigate("SignUp")
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to our app!</Text>
      <TouchableOpacity onPress={loginHandler}>
        <Text style={styles.option}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signUpHandler}>
        <Text style={styles.option}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 120,
  },
  option: {
    fontSize: 30,
    paddingBottom: 20,
    color: "blue",
  },
  title: {
    fontSize: 40,
    paddingBottom: 20,
  },
})

export default Welcome;