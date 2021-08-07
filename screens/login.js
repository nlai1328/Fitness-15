import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native"

function Login({ navigator }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You're logging in!</Text>
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
  title: {
    fontSize: 40,
    paddingBottom: 20,
  },
  
})

export default Login;