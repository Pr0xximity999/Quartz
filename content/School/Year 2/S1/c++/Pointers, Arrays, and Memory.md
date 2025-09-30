---
tags:
  - school/robot-fleet
  - school/cpp
  - language/english
  - taal/engels
  - programming-languages/cpp
---
# Pointers
Whenever you assign/create a [[School/Year 2/S1/c++/Data types and Operators|data type]] in c++, like a void, char, int, double, bool, etc.. It allocates a bit of memory and gives back the memory location; a *pointer*. Pointers don't hold the value of the memory location, but the *address*.

Typing ``int i;`` gives you an integer.<br>Typing ``p = &i`` gives you a pointer to the address of i. It is called the **address** operator.<br>Typing ``int* p`` gives you a pointer. It is called the **indirection** operator. If you have a pointer that contains an address, you can add \* to read the value of that address (``*p``). This is why it is sometimes called a **dereference** operator.

To get a member value (struct or class) from a pointer, you can either type ``(*p).member`` or ``p->member``; both do the same.

# Smart pointers
In c++, pointers are used to dynamically manage memory.

If you forget to delete it, you will get a memory leak.

If you double delete it, you will get undefined behavior.

Smart pointers fix this problem; it is an object from the standard library. As soon as a smart pointer goes out of scope, it will free the assigned memory.

Smart pointers make for an automatic way to manage memory.

Some cons of shared pointers are:
- larger memory usage over regular pointers
- complexer than regular pointers, though sometimes they may be easier to use
- smart pointers are a little more constricted in their functionality

There are a handful of smart pointer types:
## Unique pointer
An unique pointer only has one owner who will be responsible for its memory. Default choice

## Shared pointer
A pointer can have multiple owners. As soon as there are no owners left, the memory will be freed.

## Weak pointer
Kind of like a shared pointer, but it doesnt block access to the allocated memory for other owners. Can be upgraded to a shared pointer to break circular shared-pointer-loops.

# Function pointer
Function pointers are as the name suggests, pointers to functions. It is like a lambda, but you reference to another function, which them can be ran.

## Call by reference vs call by value
When you call an object by value, it will create a copy of that object and change that value. A call by value object will be destroyed once it goes out of scope.

When you call an object by reference, it will create a reference to that object, thus changes being made will affect the main object. A call by reference is made by passing the address to the object instead of a new one.
# Arrays
An array in c++ is basically a pointer to the first element in a continuous range of values. so a\[0] is essentially the same as \*a where a is an address (a\[1] is \*(a+1) etc).

# Linked lists
A Linked list is not the same as an array.

A linked list is a list where every object references to the next one. This makes it so that the list can be any size at runtime. Objects can be popped out anywhere, it just needs to be handled correctly that the linked items correct themselves.

One downside is that you have to step trough the entire list if you want to grab one item.

A linked list is basically an std::vector.

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

If we were to use the [[School/Year 2/S1/c++/Data types and Operators#Sizeof operator|sizeof operator]]:
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
# Pointers
Whenever you create a datatype in c++, like a void, char, int, double, bool, etc.. It allocates a bit of memory and gives back the memory location; a *pointer*. Pointers don't hold the value of the memory location, but the *address*.

Typing ``int i;`` gives you an integer.<br>Typing ``p = &i`` gives you a pointer to the address of i. It is called the **address** operator.<br>Typing ``int* p`` gives you a pointer. It is called the **indirection** operator. If you have a pointer that contains an address, you can add \* to read the value of that address (``*p``). This is why it is sometimes called a **dereference** operator.

To get a member value (struct or class) from a pointer, you can either type ``(*p).member`` or ``p->member``; both do the same.

## Call by reference vs call by value
When you call an object by value, it will create a copy of that object and change that value. A call by value object will be destroyed once it goes out of scope.

When you call an object by reference, it will create a reference to that object, thus changes being made will affect the main object. A call by reference is made by passing the address to the object instead of a new one.
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
​struct C {
    char c1;  // 1 byte
    double d; // 8 bytes
    char c2;  // 1 byte
    int i;    // 4 bytes
```