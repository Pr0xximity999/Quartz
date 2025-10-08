---
tags:
  - school/robot-fleet
  - school/cpp
  - language/english
  - taal/engels
  - programming-languages/cpp
---
At default, C++ only has a certain number of datatypes (of course you can make more through the use of classes):
- **Void**: Nothing, Used for things like methods with no return values or pointers(sometimes).
- **Char**: 8 bits, represents one character.
- **Int**: 16-32 bits, a whole number. Can be explicitly only positive or also negative
- **Float**: 32 bits, a decimal number.
- **Double**: 64 bits, a decimal number with higher precision and a bigger range.
- **Boolean**: true or false.
# Modifiers
If you want to use a specific number of bits, or define if a datatype can be negative, you can use certain keywords:
- **Short**: At least 16 bits
- **Long**: At least 32 bits
- **Long Long**: At least 64 bits
- **Signed**: A number can be positive and negative
- **Unsigned**: A number can only be positive. (Has one more bit free so its number can be x^2 higher)
## Binary and hex literals
Since ``c++14``, you can define binary literals with \[number]b or \[number]B.<br>You can use the ``<bitset>`` library to directly print numbers in their binary form: ``std::bitset<8>(x) # 8 bits long``.

You can define hexadecimal literals with \[number]x of \[number]X.<br>You can print a number in hexadecimal using ``std::hex << x``
# Lambdas
Lambdas are variables that hold a method body inside them. They work just as a method, accepting arguments (if set up that way), and returning values. Lambda’s are usually used as arguments inside methods.

Lambdas can also be used **anonymously**: the lambda is defined *inside* the parameter section of a method, and isn’t bound to a variable.

A lambda is secretly just a [[School/Year 2/S1/c++/Classes and Types#Structs|struct]] with an [[#Operator overloading|overloaded method operator]], which is instantly invoked.
# Operators
c++ has a handful of operators, split down into categories, they are:
## Arithmetic operators
The standard stuff.
- Add (+)
- Subtract (-)
- Increment (++)
- Decrement (--)
- Multiply (\*)
- Divide (/)
- Modulo (%)

## Relational operators
Compares two values and returns either true or false.
- Equal to (\==)
- Not equal to (!=)
- Smaller than (<)
- Bigger than (>)
- Smaller or equal to (<=)
- Bigger or equal to (=>)

## Logical operators
Evaluates two values and returns either true or false.
- AND (&&)
- OR (||)#include <boost_1_89_0/boost/un>
- NOT (!)

## Ternary operator
A shortened if-else.
``(condition) ? if_true : if_false;``

## Sizeof operator
Sizeof returns the size in bytes of a datatype. Size can be determined by the datatype's *padding*. Padding is unused bytes added by the compiler inside structs or classes to correctly align data inside memory. Cpu's prefer that data is in certain spots in the memory.

## Offsetof operator
Offsetof returns the offset, or position, of a class's/struct's member. This isn't always 1:1 because of [[#Padding|padding]] being added to optimize cpu speed.

## Bit-wise operators
Bit-wise operators work on bits of variables.
- Bitwise AND (&)
- Bitwise OR (|)
- Bitwise XOR (^)
- Bitwise NOT (~)
- Shift left (<<)
- Shift right (>>)

# Operator overloading
Operator overloading is a way to add operator functionality for data types who don’t have it. You write it like ``[datatype] operator+([datatype] input) const {}``, where \[datatype] is the datatype, like a string, and ``+`` is the operator you’re overloading. 

# Static
Static variables within a method *retains its value between method calls*. It will not be destroyed when the variables goes out of scope.

Static class members are *shared between classes*. Changing a static member value in one class will change it in another.

Static class methods do *not need an instantiated class*. You can always call it.


# Constants (consts)
A constant modifier is given to a variable, making it immutable in turn; it cannot be changed after being initialized.

It turns variables read only and makes them more optimized.

# Auto
Auto can be used on the left hand side of a variable assignment to simplify the definition of a variable. It evaluates the right hand side (right of the =) to deduct what type it is.<br>``auto number = 5`` will evaluate to an int<br>``auto text = "hello"`` will evaluate to a char\[]
``auto text = new std::string("hello")`` will evaluate to a std::string.

Under the hood, auto's will be turned into their respective variable. So its more of an improvement of readability than a performance increase.