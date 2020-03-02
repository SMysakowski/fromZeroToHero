import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import Constants from "expo-constants";

const App = () => {
  const [items, setItems] = useState(
    new Array(100)
      .fill(0)
      .map((a, i) => i)
      .map(i => ({
        title: `City no. ${i}`,
        key: i,
        content: `Content number ${i}. It's a bit longer than title. It's even long enough to force a line break`
      }))
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  item: {
    paddingHorizontal: 10
  },
  title: {
    fontWeight: "bold",
    marginVertical: 5
  },
  content: {
    marginBottom: 10
  }
});

export default App;
