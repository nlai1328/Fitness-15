import React from "react";
import { View, Text, Button } from "react-native";

export default function Profile(navigation) {

  const logoutHandler = () => {
    navigation.navigate("Welcome")
  }
  return (
    <View>
      <Text>Name: </Text>
      <Text>Gender: </Text>
      <Text>Phone Number: </Text>
      <Text>Sports: </Text>
      <Button
        title="Log out"
        color="#f194ff"
        onPress={logoutHandler}
      />
    </View>
  );
}
