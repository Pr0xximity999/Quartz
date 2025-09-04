---
tags:
  - school/robot-fleet
  - school/cpp
  - language/english
  - taal/engels
  - programming-languages/cpp
---

# Introduction
C++ is an unsafe programming language. "unsafe" means that you can directly access memory, which when used wrong, can lead to memory leaks and other issues.
## "Improved" version of C
C++ is the successor of C
To increment a number in C, you can write \[number]++.

So in that logic, C++ is the next version of C.
It has been created in the 80's by Bjarne Strousrup. 

## Object oriented
C++ is an object oriented programming language and contains principles like [[20 - 39 School/27 - Software Development/26.03 - Object Oriented Programming#Objects (instances)|objects]], [[20 - 39 School/27 - Software Development/26.03 - Object Oriented Programming#Classes|classes]], inheritance, polymorphism and [[20 - 39 School/27 - Software Development/26.03 - Object Oriented Programming#Encapsulation|encapsulation]]. 
Some advanced features are templates(functionality working for different types of data) and exception handling

## Active maintenance
C++ is still being actively maintained, with the 2026 version being in development.

## Use cases
C++ is made to be lightweight and fast, It is used for applications where speed and low file sizes are crucial.

C++ is really popular for embedded systems like microcontrollers because of their tiny storage.

# Datatypes
At default, C++ only has a certain number of datatypes:
- **Void**: Nothing, Used for things like methods with no return values or pointers(sometimes).
- **Char**: 8 bits, represents one character.
- **Int**: 16-32 bits, a whole number. Can be explicitly only positive or also negative
- **Float**: 32 bits, a decimal number.
- **Double**: 64 bits, a decimal number with higher precision and a bigger range.
- **Boolean**: true or false.

# Macros
A macro is a predefined expression that converts back into its written value before the program compiles.

```cpp
#define SQUARE(x) (x * x)

std::cout << SQUARE(16) << std::endl // Will collapse into (4 * 4) a pre-compiling 
```
# Modifiers
If you want to use a specific number of bits, or define if a datatype can be negative, you can use certain keywords:
- **Short**: At least 16 bits
- **Long**: At least 32 bits
- **Long Long**: At least 64 bits
- **Signed**: A number can be positive and negative
- **Unsigned**: A number can only be positive. (Has one more bit free so its number can be x^2 higher)




