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
C++ is an object oriented programming language and contains principles like [[School/27 - Software Development/26.03 - Object Oriented Programming#Objects (instances)|objects]], [[School/27 - Software Development/26.03 - Object Oriented Programming#Classes|classes]], inheritance, polymorphism and [[School/27 - Software Development/26.03 - Object Oriented Programming#Encapsulation|encapsulation]]. 
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
## Binary and hex numbers
Since ``c++14``, you can define binary literals with \[number]b or \[number]B.<br>You can use the ``<bitset>`` library to directly print numbers in their binary form: ``std::bitset<8>(x) # 8 bits long``.

You can define hexadecimal literals with \[number]x of \[number]X.<br>You can print a number in hexadecimal using ``std::hex << x``


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

# Pointers
Whenever you create a datatype in c++, like a void, char, int, double, bool, etc.. It allocates a bit of memory and gives back the memory location; a *pointer*. Pointers don't hold the value of the memory location, but the *address*.

Typing ``int i;`` gives you an integer.<br>Typing ``p = &i`` gives you a pointer to the address of i. It is called the **address** operator.<br>Typing ``int* p`` gives you a pointer. It is called the **indirection** operator. If you have a pointer that contains an address, you can add \* to read the value of that address (``*p``). This is why it is sometimes called a **dereference** operator.

# Arrays
An array in c++ is basically a pointer to the first element in a continuous range of values. so a\[0] is essentially the same as \*a where a is an address (a\[1] is \*(a+1) etc).

# Memory
The memory of a c++ program is built up from the following sections:
- **Code segment**: run able code + constants
- **Initialized data segment**: Initialized global variables
- **Uninitialized data segments:** remaining global variables (zero)
- **Heap**: dynamically allocated variable memory that *manually* is managed by the *programmer*.
- **Stack**: temporary storage of data automatically managed by the system.
# Padding
CPU's are optimized for aligned data in memory. (most) programming languages make sure data types are aligned to this rule. Take this struct for example:(i added the byte size for easier understanding)
```cpp
struct C {
    char c1;  // 1 byte
    double d; // 8 bytes
    char c2;  // 1 byte
    int i;    // 4 bytes
};
```

If we were to use the [[#Sizeof operator|sizeof operator]]:
- ``c1`` would be at offset 0 (first position)
- ``d`` would be at offset 8
- ``c2`` would be at 16
- ``i`` would be at 20

You may be noticing that some spaces seem to be skipped. That is because of the aforementioned cpu optimization. Spaces in between datatypes are *padded* to align the next member. The reason behind it is pretty simple: 

Take member ``d`` for example. It is 8 bytes long. The most efficient way for the cpu to read it is if its starting offset is divisible by 8. And since ``c1`` is a char of 1 byte, 7 bytes are added as padding.

``c2`` starts (and ends) at 16 because ``d`` starts on 8 and ends on 15 (8 bytes). Since chars are just 1 byte, they don't need any padding. 

``i`` cannot start at 17 since its not divisible by 4 (its size). 3 bytes will be added because the next suitable number is 20. ``i`` will fill up the struct up to 24.

To recap:
- 0        (1 byte)  : ``c1``
- 1 - 7   (7 bytes) : padding
- 8 - 15  (8 bytes) : ``d``
- 16       (1 byte)  : ``c2``
- 17 - 19 (3 bytes) : padding
- 20 - 24 (4 bytes) : ``i``

There is another rule that gets more apparent in the next example:

if you were to re-order the struct as this...
```cpp
struct C {
    double d; // 8 bytes
    int i;    // 4 bytes
    char c1;  // 1 byte
    char c2;  // 1 byte
};
```
...it would take up less space.
- 0 - 7   (8 bytes)  : ``d``
- 8 - 11  (4 bytes)  : ``i``     
- 12       (1 byte)   : ``c1``    
- 13       (1 byte)   : ``c2``     
It all aligns....but we forgot something
A struct also has to be a multiple of its biggest member. This is for reasons in case it is in something like an array (i don't fully know why, just that its a reason).
the double of 8 bytes (``d``) is the biggest, so it has to be a multiple of 8. The next multiple of 8 is 16, so we add 2 more padding. Resulting in the final:
- 0 - 7   (8 bytes)  : ``d``
- 8 - 11  (4 bytes)  : ``i``     
- 12       (1 byte)   : ``c1``    
- 13       (1 byte)   : ``c2``  
- 14 - 15 (2 bytes) : padding

So, by re-arranging the datatypes, we knocked down the byte size of 24 to 16.

## Allocation
There are two ways to allocate memory in c++: static and dynamic:
### Static allocation
**Size**: Known during compilation
**Location**: On the stack
**Lifetime**: As long as it is in scope
**Use**: Small variables, arrays with a static size, local variables in functions
**Pros**: quick and easy, no manual cleanup needed
**Cons**: size is fixed, limited stack size (big arrays can cause a stack overflow)

### Dynamic allocation
**Size**: Known during runtime
**Location**: On the heap
**Lifetime**: As long as it is not explicitly de-allocated by you.
**Use**: Big variables, arrays with a variable size
**Pros**: more flexible size wise, more fit for bigger datasets
**Cons**: its slower, you have to manager the memory usage, otherwise you get memory leaks.

# Classes - Access
Access modifiers decide if other parts of your code have access to variables and functions in a class.

C++ has private, public, and protected just [[School/27 - Software Development/26.03 - Object Oriented Programming#Encapsulation|like C#]], but c++ also has something else: a friend modifier.<br>Friend tells the program that exceptions for certain classes are made, which give them access to private/protected methods and variables.

# Structs
A struct, or structure, is a datatype that can hold multiple variables under a single variable name. Its handy to group certain variables together.
The biggest difference between a class and a struct is that struct members are public by default (and a class's deconstructor is automatically called)

# Typedef
A ``typedef`` is a way to give an **alias** to a variable. It doesn't change the type, but gives it a shorter way to type it.

While using [[#Structs|structs]], you always need to explicitly type ``struct`` before using the variable. This can be fixed by using typedefs.

You can also use ``using`` in modern c++.

# Enums
An enum, or enumeration, is a self defined type that holds a list of symbolic names which all have a (explicit or implicit) numerical value. It can be used for things like a list of seasons, days in a week, etc.. enums work great with [[#Switch|switches]]

# Switch 
A switch is a keyword that evaluates an expression and then runs a defined *(switch)case*. Switches and [[#Enums|enums]] work great together.

# STD::Array
the std::array class is a **wrapper** around the default array that makes it type-safe. A number of features are things like:
- Fixed size during compilation
- Elements are always in memory
- Adds member functions like ``.size()``, ``.front()``, ``.back()``, ``.fill()``, etc.
- No dynamic size allocation; its always on the stack
- No index check happening by i\[x], but it does by ``.at()``

# STD::Vector
the std::vector is a dynamic array added by the standard library. A number of features are thing like:
- The size is not fixed
- Elements are always in memory
- Gives a lot of handy functions like ``.push_back()``, ``.pop_back()``, ``.size()``, ``.clear()``, etc
- Is dynamically allocated on the heap

