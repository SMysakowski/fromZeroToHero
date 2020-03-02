import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { DeviceStorageExample } from "./screens/4-input-and-storage";
// import {} from "./screens/3-basic-components";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <DeviceStorageExample />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
