---
tags:
  - programming-languages/qml
  - personal-project/linux
  - personal-project/programming
  - personal-project/customization
  - language/english
  - taal/engels
---
[Quickshell](https://quickshell.org/) is a toolkit you can use to create status bars, widgets, lockscreens and everything else desktop related. It uses the QtQuick qml framework.

# QML fundamentals
The definition of QML, Qt, and QtQuick are a bit vague and confusing, so i will try my best to explain it.

## What is QML?
QML, or Qt Meta-object Language) is a user interface markup language. I would describe it to be a weird mix of JSON and JavaScript.

QML is made for designing user interfaces on things like an app or desktop UI(user interface).

QML uses **declarative** syntax, meaning that you *describe* what you want, not *how* to do it. It's reactive, meaning when data changes, the ui changes automatically.<br>And another big thing is that it's integrated with JavaScript, so you can embed logic or events inside it.

### What is QtQuick?
QtQuick is the **framework** built on top of Qt (which is a C++ toolkit, utilizing the QML language). It's the engine that takes your QML code and makes it show up on your screen. Think of QML as the *language* and QtQuick as the *runtime* that makes the language do things.