import React, { useState } from "react";
import { Text, View, ScrollView } from "react-native";

const ScrollViewExample = () => {
  const [items, setItems] = useState(
    new Array(100)
      .fill(0)
      .map((a, i) => i)
      .map((i) => ({
        title: `City ${i}`,
        content: `Content number ${i}. It's a bit longer than title. It's even long enough to force a line break`,
      }))
  );

  return (
    <ScrollView>
      {items.map(({ title, content }) => (
        <View key={title}>
          <Text>{title}</Text>
          <Text>{content}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ScrollViewExample;
