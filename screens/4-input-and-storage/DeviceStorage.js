import React, { useState, useEffect } from "react";
import { View, StyleSheet, AsyncStorage, TextInput } from "react-native";
import Constants from "expo-constants";

const textKey = "lingaro:text";

const App = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    AsyncStorage.getItem(textKey).then(text => setText(text));
  }, [text]);

  const textChanged = async text => {
    setText(text);
    await AsyncStorage.setItem(textKey, text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        placeholder="Enter text"
        onChangeText={textChanged}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  input: {
    width: 100
  }
});

export default App;
