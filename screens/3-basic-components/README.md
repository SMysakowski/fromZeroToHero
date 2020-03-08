# 3. Basic components

[`<View />`](https://reactnative.dev/docs/view)

The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls.

**Basic usage:**

```
<View>
    {...}
</View>
```

[`<Text />`](https://reactnative.dev/docs/text)

A React component for displaying text.
Text supports nesting, styling, and touch handling.

**Basic usage:**

```
<Text>
      Change code in the editor and watch it change on your phone! Save to get a
      shareable url.
</Text>
```

**Nested text:**

```
<Text>
      <Text style={{ fontWeight:"bold" }}>Change code</Text> in the editor and watch it change on your phone! Save to get a
      shareable url.
</Text>
```

[`<ScrollView />`](https://reactnative.dev/docs/scrollview)

Component that wraps platform ScrollView while providing integration with touch locking "responder" system.

```
<ScrollView>
    {items.map(({ title, content }) => (
        <View key={title}>
            <Text>{title}</Text>
            <Text>{content}</Text>
        </View>
    ))}
</ScrollView>
```

[`<FlatList />`](https://reactnative.dev/docs/flatlist)

A performant interface for rendering basic, flat lists, supporting the most handy features:

```
<FlatList
    data={items}
    renderItem={renderItem}
    keyExtractor={item => item.title}
/>
```

---

### `<ScrollView>` vs `<FlatList>` - which one to use?

`ScrollView` renders all its react child components at once, but this has a performance downside.

`FlatList` renders items lazily, when they are about to appear, and removes items that scroll way off screen to save memory and processing time.

| ScrollView                                                                                                                 | FlatList                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ScrollView will load items (data in it for scrolling) immediately after component loading. So all data will mount into RAM | But FlatList has a better solution for this issue, it will mount 10 items (by default) to screen, if user scroll view so other items will mount. It's a big gain of FlatList instead of ScrollView. |

---

## Styling

`{}` vs `StyleSheet.create({})`

#### Basic styling:

```
<Text style={{ fontSize: 20 }}>And styles can be defined inline</Text>
```

#### StyleSheet:

**usage:**

```
<Text style={styles.paragraph}>
```

**initialization:**
```
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    margin: 24, // px
    fontSize: 18,
    textAlign: "center",
    color: "#FFF",
    backgroundColor: "#34485e"
  }
});
```

#### Styled components:

**usage:**
```
<StyledText>You can use also styled components!</StyledText>
```

**initialization:**
```
const StyledText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: palevioletred;
`;
```

---

## TASKS:

1. Create new project:
   - `expo init projectName`
   - select **blank**
2. Display single city, for now it can be just a text.
3. Display list of cities.
4. Apply styling to the list.
5. \*Add a flag indicating whether city is visited or not, display only not visited cities.
6. \*Divide notes to sections: to visit, visited
