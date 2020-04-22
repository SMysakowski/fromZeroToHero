import React from "react";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
    letterSpacing: 3,
    fontWeight: '700',
    textTransform: 'uppercase',
    textDecorationLine: 'underline',
    color: 'pink'
  },
});

const task2 = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Manila</Text>
    </View>
  );
};

export default task2;
