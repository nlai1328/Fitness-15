import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native"

const GymDetails = ({route, navigation}) => {
    const gymData = route.params
    console.log(gymData)
    return (  
      <View style={styles.container}>
        <Text style={styles.title}>{gymData["name"]}</Text>
        <Text style={styles.title}>{gymData["vicinity"]}</Text>
        <Text style={styles.title}>Rating: {gymData["rating"]}/5</Text>
        <Text style={styles.title}>#ofReviews: {gymData["user_ratings_total"]}</Text>
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

export default GymDetails;