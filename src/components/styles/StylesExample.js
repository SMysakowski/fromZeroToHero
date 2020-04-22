import React from "react";
import { Text, View } from "react-native";
import Constants from "expo-constants";

const StylesExample = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#ecf0f1",
      }}
    >
      <Text
        style={{
          margin: 24, // By default we are defining "px"
          fontSize: 18,
          textAlign: "center",
          color: "#FFF",
          backgroundColor: "#34485e",
        }}
      >
        Change code in the editor and watch it change on your phone!
        <Text style={{ fontWeight: "bold" }}> Text can be nested</Text>
      </Text>
      <Text style={{ fontSize: 20 }}>And styles can be defined inline</Text>
    </View>
  );
};

export default StylesExample;
