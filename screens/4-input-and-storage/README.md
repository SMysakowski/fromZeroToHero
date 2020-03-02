# 4. Input and storage
___

#### [`<Touchable />`](https://reactnative.dev/docs/handling-touches#__docusaurus)

Users interact with mobile apps mainly through touch. They can use a combination of gestures, such as tapping on a button, scrolling a list, or zooming on a map. React Native provides components to handle all sorts of common gestures, as well as a comprehensive gesture responder system to allow for more advanced gesture recognition, but the one component you will most likely be interested in is the basic Button.

####usage:

**Button**
@import "ButtonsAndTouchables.js" {cmd="node" line_begin=20 line_end=21}

**TouchableHighlight**
@import "ButtonsAndTouchables.js" {cmd="node" line_begin=21 line_end=24}

**TouchableOpacity**
@import "ButtonsAndTouchables.js" {cmd="node" line_begin=35 line_end=42}

**TouchableWithoutFeedback**
@import "ButtonsAndTouchables.js" {cmd="node" line_begin=42 line_end=50}

___

#### [`<Image />`](https://reactnative.dev/docs/images#__docusaurus)

act Native provides a unified way of managing images and other media assets in your Android and iOS apps. To add a static image to your app, place it somewhere in your source code tree and reference it like this:
___

#### [`<TextInput />`](https://reactnative.dev/docs/textinput#__docusaurus)

A foundational component for inputting text into the app via a keyboard. 
___
#### [`AsyncStorage`](https://reactnative.dev/docs/asyncstorage)

An asynchronous, unencrypted, persistent, key-value storage system for React Native.

##### AsyncStorage from React Native package is deprecated. 
Use [react-native-community/react-native-async-storage](https://github.com/react-native-community/async-storage) instead.


## TASKS:
1. Add simple form for adding new city
2. Save cities to AsyncStorage
3. Add possibility to edit and remove city
4. Allow user to show and hide visited cities
5. *Use icons for displaying visited city indicator and for buttons
6. *Handle usage of AsyncStorage completely outside components