import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";

const Item = ({ city }) => (
  <View>
    <Text>{city}</Text>
  </View>
);

const FlatListExample = () => {
  const [items, setItems] = useState(
    new Array(100)
      .fill(0)
      .map((a, i) => i)
      .map((i) => ({
        id: i,
        city: `City ${i}`,
      }))
  );

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <Item city={item.city} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default FlatListExample;
