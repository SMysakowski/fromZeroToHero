# 3. Basic components

[`<View />`](https://reactnative.dev/docs/view)

The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls.


[`<Text />`](https://reactnative.dev/docs/text)

A React component for displaying text.
Text supports nesting, styling, and touch handling.

@import "ViewAndText.js"  {cmd="node" line_begin=5 line_end=9}


[`<ScrollView />`](https://reactnative.dev/docs/scrollview)

Component that wraps platform ScrollView while providing integration with touch locking "responder" system.

@import "ScrollView.js"  {cmd="node" line_begin=17 line_end=25}


[`<FlatList />`](https://reactnative.dev/docs/flatlist) 

A performant interface for rendering basic, flat lists, supporting the most handy features:

@import "FlatList.js"  {cmd="node" line_begin=25 line_end=30}


---
### `<ScrollView>` vs `<FlatList>` - which one to use?

`ScrollView` renders all its react child components at once, but this has a performance downside. 


`FlatList` renders items lazily, when they are about to appear, and removes items that scroll way off screen to save memory and processing time.

---
## Styling
`{}` vs `StyleSheet.create({})`

#### Basic styling:

@import "Styles.js" {cmd="node" line_begin=18, line_end=19}


#### StyleSheet:

**usage:**
@import "Styles.js" {cmd="node" line_begin=14, line_end=15}

**initialization:**
@import "Styles.js" {cmd="node" line_begin=24, line_end=40}

#### Styled components:
**usage:**
@import "Styles.js" {cmd="node" line_begin=19, line_end=20}

**initialization:**
@import "Styles.js" {cmd="node" line_begin=5, line_end=10}

---
## TASKS:

1. Create new project:
    * `expo init projectName`
    * select **blank**
2. Display single note, for now it can be just a text.
3. Display list of notes.
4. Apply styling to the list.
5. *Add a flag indicating whether note is completed or not, display only not completed notes.
6. *Divide notes to sections: todo, completed