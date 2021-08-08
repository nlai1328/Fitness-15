import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image} from "react-native"

function MyAccount({ navigation, route }) {
  const [sports, setSports] = useState([
    {sport: "skiing", key: "1"},
    {sport: "snowboarding", key: "2"},
    {sport: "badminton", key: "3"},
    {sport: "overwatch", key: "4"},
  ])
  const match = route.params

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./../assets/defaultProfile.png")}/>
      <View style={styles.sportTitleContainer}>
        <Text style={styles.sportTitle}>Sports in Common</Text>
      </View>
      <FlatList
        style={styles.list}
        data={match["sport"]}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}
      />
      <Text style={styles.attribute}>Name: {match["firstName"] + " " + match["lastName"]}</Text>
      <Text style={styles.attribute}>Email: {match["email"]}</Text>
      <Text style={styles.attribute}>Phone Number: {match["phone"]} </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  attribute: {
    fontSize: 20,
    marginBottom: 20,
    backgroundColor: "orange",
    width: "87%",
    color: "white",
    fontWeight: "bold",
    paddingVertical: 10,
    paddingLeft: 20,

  },
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingTop: 20,
    backgroundColor: "lightblue"
  },
  image: {
    height: 120,
    width: 120,
    alignSelf: "center",
    marginRight: 30,
    marginTop: 5,
  },
  list: {
    width: "90%",
    flexDirection: "column",
  },
  item: {
    fontSize: 20,
    marginRight: 10,
    color: "white",
    backgroundColor: "lightpink",
    paddingLeft: 10,
    paddingVertical: 10,
    marginBottom: 20,

  },
  sportTitle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",

  },
  sportTitleContainer: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomColor: "orange",
    borderBottomWidth: 1,
    width: "90%"
  },
})

export default MyAccount;