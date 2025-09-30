---
tags:
  - school/robot-fleet
  - school/cpp
  - language/english
  - taal/engels
  - programming-languages/cpp
---
# Classes
## Copy constructors (new)
A copy constructor is a standard class constructor, but it’s only argument is a class object itself. It essentially **creates** a new object with the same properties.

## Copy assignments (overwrite)
Copy assignments work the same as copy constructors, but they **overwrite** an existing object.

## Rule of three / five / zero
The rule of three states that every class you create should have:
- A destructor (for de-allocating)
- A copy constructor (for duplicating to a new object)
- A copy assignment constructor (for duplicating to an existing object)


The rule of five states that every class you create should have:
- A destructor (for de-allocating)
- A copy constructor (for duplicating to a new object)
- A copy assignment constructor (for duplicating to an existing object)
- A move constructor (for moving to a new object)
- A move assignment constructor (for moving to an existing object)


The rule of zero states that every class you create should have:

None of these, because you can use memory safe datatypes like STD vectors, strings, unique_ptr’s, etc. This way, memory allocation happens automatically.
## Access
Access modifiers decide if other parts of your code have access to variables and functions in a class.

C++ has private, public, and protected just [[School/Year 1/P2/Software-development/Object Oriented Programming#Encapsulation|like C#]], but c++ also has something else: a friend modifier.<br>Friend tells the program that exceptions for certain classes are made, which give them access to private/protected methods and variables.

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