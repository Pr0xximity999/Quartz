---
tags:
  - programming-languages/qml
publish: "true"
---
# Intro
The definition of QML, Qt, and QtQuick are a bit vague and confusing, so i will try my best to explain it.

## What is QML?
QML, or Qt Meta-object Language) is a user interface markup language. I would describe it to be a weird mix of JSON and JavaScript.

QML is made for designing user interfaces on things like an app or desktop UI(user interface).

QML uses **declarative** syntax, meaning that you *describe* what you want, not *how* to do it. It's reactive, meaning when data changes, the ui changes automatically.<br>And another big thing is that it's integrated with JavaScript, so you can embed logic or events inside it.

### What is QtQuick?
QtQuick is the **framework** built on top of Qt (which is a C++ toolkit, utilizing the QML language). It's the engine that takes your QML code and makes it show up on your screen. Think of QML as the *language* and QtQuick as the *runtime* that makes the language do things.

# QML fundamentals
Let’s go over some of the basics of qml syntax by creating a very simple “Hello world” example ([source](https://doc.qt.io/qt-6/qml-tutorial1.html)). All the example steps are done in the drop-down info boxes.

>[!important]
>Keep in mind when reading this that semicolons are permitted basically everywhere, but not needed, as a new line will do the same. So unless you want multiple expressions on one line, you don’t need them.

## Importing
qml in itself cannot do much. It needs libraries/types/logic/etc to work with. We do that by calling the ``import`` command. 

>[!info]- Example
>Most qml files will import the built-in qml types(like a rectangle or image) that come with Qt. These types are stored in the ``QtQuick`` library.
>```qml
>import QtQuick
>```

## Value Types
QML is all about types. Types stores the data and the pre-defined behavior based on what type is called. These are things like Rectangle or Text types.

Types can be nested into one another (placing it at the *root* of the parent type), this way, one type contains another (visually or position wise).

>[!info]- Type example
>In our case, we want to create a Rectangle to fill with stuff later on. It will be 320 by 480 pixels in size and have a light gray color. We will also label it with the id “page”.
>Inside, we will place a Text object that displays the text “Hello world!”, is centered horizontally on the Rectangle, and is placed 30 pixels above the top of the Rectangle, and has a font size of 24 and is bold.
>```qml
>Rectangle {
>	id: page
>	width: 320; height: 480
>	color "lightgray"
>	Text {
>		id: helloText
>		text: "Hello world!"
>		y: 30
>		anchors.horizontalCenter: page.horizontalCenter
>		font.pointSizeExample: 24; font.bold: true
>	}
>}
>```
>To visualize how this looks, i will use [[Personal-projects/Arch linux/Quickshell|Quickshell]], Which with some additional code, will look like this:
>![[Vault-data/Attachments/QML Fundamentals - hello world block.png]]

# Components
A piece of code defining a type with properties is called a component. You can re-use components to remove boilerplate code. They’re kinda treated like variables in a sense. A component can be referenced by calling the file name, *starting with a capital letter*.

Components can have properties that are accessible from the outside, called **property alias**es. This allows us to instantiate components with specific property values. It is called a property alias because, as the name suggests, it’s an alias that binds to an existing property. 

See [property binding](https://doc.qt.io/qt-6/qtqml-syntax-propertybinding.html) for more info.

### Signals and Handlers
Components can have interactivity in the form of signals. What a signal does, is creating an event when something happens, like clicking an component(or button). 

Signals might have parameters in case it gives output data.

Signals are responded to by *signal handlers*, which does something when triggered. Signal handlers can also override existing handlers, emitting our own signal instead.

See [Signal and Handler Events](https://doc.qt.io/qt-6/qtqml-syntax-signals.html) for more info
>[!info]- Component example
>Let’s create a file and call it `Cell.qml`.
>Inside, we will create an Item Type of id container.
>container will have a property alias cellColor, which binds to its child `Rectangle`’s(of id rectangle) `color` property.
>container will also have a signal called `clicked` with the parameter `cellColor` of type `color`.
>Lastly, container will have a [`MouseArea`](https://doc.qt.io/qt-6/qml-qtquick-mousearea.html) with an `onClicked` handler, emitting our own `clicked` signal with the color alias as parameter.
>Both of container’s children will use the `anchors.fill` of their parent so that they fill up the entirety of it’s size (see [anchor-based layouts](https://doc.qt.io/qt-6/qtquick-positioning-anchors.html)).
>```qml
>import QtQuick
>Item {
>	id: container
>	property alias cellColor: rectangle.color
>	signal clicked(cellColor: color)
>	width: 40; height: 25
>	Rectangle {
>		id: rectangle
>		border.color: "white"
>		ancors.fill: parent
>	}		
>	MouseArea {
>		anchors.fill: parent
>		onClicked: container.clicked(container.cellColor)
>	}
>}
>```
> 
> Now, we will add a [`grid`](https://doc.qt.io/qt-6/qml-qtquick-grid.html) with 6 cells to the script used in the previous example, each instantiated with a different color.
>```qml
>import QtQuick
>import Quickshell
>PanelWindow {
>    id: panel
>    width: page.width
>    height: page.height
>    anchors{
>        top: true
>    }
>
>    Rectangle {
>        id: page
>        width: 480; height: 180
>        color: "lightgray"
>
>        Text {
>            id: helloText
>            text: "Hello world!"
>            y: 30
>            anchors.horizontalCenter: page.horizontalCenter
>            font.pointSize: 24; font.bold: true
>        }
>        
>        Grid {
>            id: colorPicker
>            x:4; anchors.bottom: page.bottom; anchors.bottomMargin: 4
>            rows: 2; columns: 3; spacing: 3
>
>            Cell { cellColor: "red"; onClicked: helloText.color = cellColor}
>        }
>    }
>}
>```
>This way, when the `clicked` signal of a cell is triggered, the color of the helloText is set to the one passed as the parameter cellColor because we edited its behavior. 
>See [signal attributes](https://doc.qt.io/qt-6/qtqml-syntax-objectattributes.html#signal-attributes) for more info.



## States and transitions
States and transitions can be used to liven up your components a bit more, by making them able to move and such.

A **state** defines a number of properties changes of a component. This can be color, position, rotation, basically every property a component can have. A state also has a name and *when* the state changes.

A **transition** how a transition will happen between two states, in case you don’t want the change to instantly happen. You can use multiple animations at the same time by using the `ParallelAnimation` type. If you instead want them to run one after the other, you can use `SequentialAnimation`

For a number of examples, click [here](https://doc.qt.io/qt-6/qtquick-animation-example.html#states).

>[!note]- State and transition example
>We will once again expand on the previous example, adding a `MouseArea` to page(the rectangle), filling it to page’s entire size.
>Then, we will create a “down” `State` for helloText when the `MouseArea` is pressed. The down state includes a set of property changes from their implicit *default* state (as defined initially).
>Finally, we will create a `Transition` to smoothly move from the default state to the down state. We wouldn’t want the transition to instantly happen, which is what would happen if we didn’t add this (usually, just assume it won’t). Because we want the state to move back when we release the mouse button, we set the `reversible` property of the transition to `true`.
>```qml
>import QtQuick
>import Quickshell
>
>PanelWindow {
>    id: panel
>    width: page.width
>    height: page.height
>    anchors{
>        top: true
>    }
>
>    Rectangle {
>        id: page
>        width: 480; height: 180
>        color: "lightgray"
>
>        MouseArea {id: mouseArea; anchors.fill: parent}
>
>        Text {
>            id: helloText
>            text: "Hello world!"
>            y: 30
>            anchors.horizontalCenter: page.horizontalCenter
>            font.pointSize: 24; font.bold: true
>
>            states: State {
>                name: "down"; when: mouseArea.pressed == true
>                PropertyChanges{
>                    helloText {
>                        y: 140
>                        rotation: 180
>                        color: "red"
>                    }
>                }
>            }
>
>            transitions: Transition {
>                from: ""; to: "down"; reversible: true
>                ParallelAnimation {
>                    NumberAnimation {properties: "rotation, y"; duration: 500; easing.type: Easing.InOutQuad}
>
>                    ColorAnimation {duration: 500}
>                }
>            }
>        }
>        
>        Grid {
>            id: colorPicker
>            x:4; anchors.bottom: page.bottom; anchors.bottomMargin: 4
>            rows: 2; columns: 3; spacing: 3
>
>            Cell { cellColor: "red"; onClicked: helloText.color = cellColor}
>            Cell { cellColor: "green"; onClicked: helloText.color = cellColor }
>            Cell { cellColor: "blue"; onClicked: helloText.color = cellColor }
>            Cell { cellColor: "yellow"; onClicked: helloText.color = cellColor }
>            Cell { cellColor: "steelblue"; onClicked: helloText.color = cellColor }
>            Cell { cellColor: "black"; onClicked: helloText.color = cellColor }
>        }
>    }
>}
>```
