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

const task5 = () => {
  const [cities, setCities] = useState([
    { id: 0, name: "Świdnik", visited: true },
    { id: 1, name: "Warsaw", visited: false },
    { id: 2, name: "Lublin", visited: false },
    { id: 3, name: "Dorohusk", visited: true },
    { id: 4, name: "Chełm", visited: false },
    { id: 5, name: "Białystok", visited: false },
    { id: 6, name: "Radom", visited: true },
    { id: 7, name: "Sosnowiec", visited: false },
    { id: 8, name: "Zakopane", visited: true },
    { id: 9, name: "Polańczyk", visited: false },
    { id: 10, name: "Cisna", visited: false },
  ]);

  const notVisitedCities = cities.filter(city => city.visited);

  return (
    <View style={styles.root}>
      <ScrollView style={styles.ScrollView}>
        {notVisitedCities.map(({ id, name }) => (
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

export default task5;
