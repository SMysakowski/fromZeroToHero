import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  ScrollView: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  cityContainer: {
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  orangeContainer: {
    backgroundColor: "#f90",
  },
  greenContainer: {
    backgroundColor: "green",
  },
  text: {
    fontSize: 32,
    letterSpacing: 3,
    color: "#fffa",
  },
});

const task3 = () => {
  const [cities, setCities] = useState([
    { id: 0, name: "Świdnik" },
    { id: 1, name: "Warsaw" },
    { id: 2, name: "Lublin" },
    { id: 3, name: "Dorohusk" },
    { id: 4, name: "Chełm" },
    { id: 5, name: "Białystok" },
    { id: 6, name: "Radom" },
    { id: 7, name: "Sosnowiec" },
    { id: 8, name: "Zakopane" },
    { id: 9, name: "Polańczyk" },
    { id: 10, name: "Cisna" },
  ]);

  return (
    <View style={styles.root}>
      <ScrollView style={styles.ScrollView}>
        {cities.map(({ id, name }) => (
          <View
            style={[
              styles.cityContainer,
              id % 2 === 0 ? styles.orangeContainer : styles.greenContainer,
            ]}
            key={id}
          >
            <Text style={styles.text}>{name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default task3;
