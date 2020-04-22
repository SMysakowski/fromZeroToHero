import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

const LEGEND_ITEMS = [
  { id: 0, label: "Visited", color: "green" },
  { id: 1, label: "Not Visited", color: "#f90" },
];

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
  colorLegendContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  colorLegendTitle: {
    fontSize: 16,
    letterSpacing: 1.2,
  },
  legendItemContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  legendLabel: {
    paddingLeft: 10,
  },
  legendDot: {
    width: 20,
    height: 20,
    backgroundColor: "green",
    borderRadius: 10,
  },
});

const ColorLegend = () => {
  return (
    <View style={styles.colorLegendContainer}>
      <Text style={styles.colorLegendTitle}>Color Legend</Text>
      {LEGEND_ITEMS.map(({ id, label, color }) => (
        <View style={styles.legendItemContainer} key={id}>
          <View style={[styles.legendDot, { backgroundColor: color }]} />
          <Text style={styles.legendLabel}>{label}</Text>
        </View>
      ))}
    </View>
  );
};

const CityItem = ({ name, visited }) => (
  <View
    style={[
      styles.cityContainer,
      visited ? styles.greenContainer : styles.orangeContainer,
    ]}
  >
    <Text style={styles.text}>{name}</Text>
  </View>
);

const App = () => {
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

  return (
    <View style={styles.root}>
      <ColorLegend />
      <ScrollView style={styles.ScrollView}>
        {cities.map(({ id, name, visited }) => (
          <CityItem key={id} name={name} visited={visited} />
        ))}
      </ScrollView>
    </View>
  );
};

export default App;
