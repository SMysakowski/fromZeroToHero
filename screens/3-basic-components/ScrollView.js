import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

const App = () => {
  const [items, setItems] = useState(
    new Array(100)
      .fill(0)
      .map((a, i) => i)
      .map(i => ({
        title: `City ${i}`,
        content: `Content number ${i}. It's a bit longer than title. It's even long enough to force a line break`
      }))
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {items.map(({ title, content }) => (
          <View key={title} style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
          </View>
        ))}
      </ScrollView>
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
  scrollView: {
    flex: 1,
    alignSelf: "stretch"
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
