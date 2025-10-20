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

# Endinanness
The endinanness is the order in which binary data is stored or transmitted when representing multi-byte data (like int, float, double, etc..). When a multi-byte value is stored in memory, the system has to decide **which byte goes first**.

- **Little-endian**: The Least Significant Byte (LSB) is stored first (at the lowest memory address)
- **Big-endian**: The Most Significant Byte (MSB) is stored first (at the lowest memory address)
# Lambdas
Lambdas are variables that hold a method body inside them. They work just as a method, accepting arguments (if set up that way), and returning values. Lambda’s are usually used as arguments inside methods.

Lambdas can also be used **anonymously**: the lambda is defined *inside* the parameter section of a method, and isn’t bound to a variable.

A lambda is secretly just a [[School/Year 2/S1/c++/Classes#Structs|struct]] with an [[#Operator overloading|overloaded method operator]], which is instantly invoked.
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

## Constant expressions (constexpr)
A constant expression is a function which calculates its outcome at compile time, instead of runtime.

# Auto
Auto can be used on the left hand side of a variable assignment to simplify the definition of a variable. It evaluates the right hand side (right of the =) to deduct what type it is.<br>``auto number = 5`` will evaluate to an int<br>``auto text = "hello"`` will evaluate to a char\[]
``auto text = new std::string("hello")`` will evaluate to a std::string.

Under the hood, auto's will be turned into their respective variable. So its more of an improvement of readability than a performance increase.

# Type casting
A typecast is the act of converting the type of a value to another type (like the text “22” to the integer 22).

In C there are two types of casts casts:
- implicit casting: ``int a = 5; int b = a``. You don’t specify the type, but let the compiler figure it out
- explicit casting: `int a = 5; double b = (double)a`. You specify the type *explicitly*.

In C++ there are four types of casts:
- static_cast: for normal conversions, like numbers or types with a relation.
- dynamic_cast: for a safe downcast in a class hierarchy
- const_cast: removing a constant classifier. Only use if you’re *certain* that the original data is not constant.
- reinterpret_cast: use the same *raw binary data*, just reinterpret the values.

# Decltype
`decltype(x)` runs the expression and returns the type that that comes out of the expression. The difference between this and [[#auto]], is that `decltype` also keeps any `const` or reference properties, while auto doesn’t.

# Structs
A struct, or structure, is a datatype that can hold multiple variables under a single variable name. Its handy to group certain variables together.
The biggest difference between a class and a struct is that struct members are public by default (and a class's deconstructor is automatically called)

# Typedef
A ``typedef`` is a way to give an **alias** to a variable. It doesn't change the type, but gives it a shorter way to type it.

While using [[#Structs|structs]], you always need to explicitly type ``struct`` before using the variable. This can be fixed by using typedefs.

You can also use ``using`` in modern c++.

# Enums
An enum, or enumeration, is a self defined type that holds a list of symbolic names which all have a (explicit or implicit) numerical value. It can be used for things like a list of seasons, days in a week, etc.. enums work great with switches.
## Switch 
A switch is a keyword that evaluates an expression and then runs a defined *(switch)case*.

```c++
switch (text)
{
	case "string1":
		//do things
		break;
	case "string2":
		//do things
		break;
	case "string3":
		//do things
		break;
}
```

Not adding a ``break`` at the end of the case will cause the execution to “fall-trough“ the next case without evaluating it.