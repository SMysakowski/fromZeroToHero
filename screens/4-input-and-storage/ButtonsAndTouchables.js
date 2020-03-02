import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text
} from "react-native";
import Constants from "expo-constants";

const App = () => {
  const [count, setCount] = useState(0);
  const increaseCounter = () => setCount(count => count + 1);

  return (
    <View style={styles.container}>
      <Text>Counter: {count}</Text>
      <Button title="Plain button" onPress={increaseCounter} />
      <Button title="Tomato button" color="tomato" onPress={increaseCounter} />
      <TouchableHighlight onPress={increaseCounter}>
        <Text>Touchable Highlight</Text>
      </TouchableHighlight>
      <TouchableHighlight
        onPress={increaseCounter}
        activeOpacity={0.25}
        underlayColor="tomato"
        style={styles.touchable}
      >
        <Text>Touchable Highlight 2</Text>
      </TouchableHighlight>
      <TouchableOpacity onPress={increaseCounter} style={styles.touchable}>
        <Text>Touchable Opacity</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={increaseCounter}
        activeOpacity={0.05}
        style={styles.touchable}
      >
        <Text>Touchable Opacity 2</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback
        onPress={increaseCounter}
        style={styles.touchable}
      >
        <View style={{ borderWidth: 2 }}>
          <Text>Touchable Without Feedback</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  touchable: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  }
});

export default App;
