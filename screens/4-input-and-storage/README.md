# 4. Input and storage

---

#### [`<Touchable />`](https://reactnative.dev/docs/handling-touches#__docusaurus)

Users interact with mobile apps mainly through touch. They can use a combination of gestures, such as tapping on a button, scrolling a list, or zooming on a map. React Native provides components to handle all sorts of common gestures, as well as a comprehensive gesture responder system to allow for more advanced gesture recognition, but the one component you will most likely be interested in is the basic Button.

####usage:

**Button**

```
<Button title="Tomato button" color="tomato" onPress={increaseCounter} />
```

**TouchableHighlight**

```
<TouchableHighlight onPress={increaseCounter}>
    <Text>Touchable Highlight</Text>
</TouchableHighlight>
```

**TouchableOpacity**

```
<TouchableOpacity
    onPress={increaseCounter}
    activeOpacity={0.05}
    style={styles.touchable}
>
    <Text>Touchable Opacity 2</Text>
</TouchableOpacity>
```

**TouchableWithoutFeedback**

```
<TouchableWithoutFeedback
    onPress={increaseCounter}
    style={styles.touchable}
>
    <View style={{ borderWidth: 2 }}>
        <Text>Touchable Without Feedback</Text>
    </View>
</TouchableWithoutFeedback>
```

---

#### [`<Image />`](https://reactnative.dev/docs/images#__docusaurus)

React Native provides a unified way of managing images and other media assets in your Android and iOS apps. To add a static image to your app, place it somewhere in your source code tree and reference it like this:

```
<Image resizeMode="cover" style={styles.logo} source={require('../../assets/react-icon.png')} />
```

---

#### [`<TextInput />`](https://reactnative.dev/docs/textinput#__docusaurus)

A foundational component for inputting text into the app via a keyboard.

```
<TextInput
    placeholder="Enter text"
    returnKeyType="done"
    autoFocus={true}
    value={this.state.value}
    onChangeText={this.textChanged}
    onSubmitEditing={this.submit}
/>
```

---

#### [`AsyncStorage`](https://reactnative.dev/docs/asyncstorage)

An asynchronous, unencrypted, persistent, key-value storage system for React Native.

##### AsyncStorage from React Native package is deprecated.

Use [react-native-community/react-native-async-storage](https://github.com/react-native-community/async-storage) instead.

#### usage:

**save:**

```
import AsyncStorage from '@react-native-community/async-storage';

saveData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        {...}
    }
}

```

**read:**

```
import AsyncStorage from '@react-native-community/async-storage';

getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key)
    if(value !== null) {
      {...}
    }
  } catch(e) {
    {...}
  }
}
```

## TASKS:

1. Add simple form for adding new city
2. Save cities to AsyncStorage
3. Add possibility to edit and remove city
4. Allow user to show and hide visited cities
5. \*Use icons for displaying visited city indicator and for buttons
6. \*Handle usage of AsyncStorage completely outside components
