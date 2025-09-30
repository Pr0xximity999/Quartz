---
tags:
  - school/robot-fleet
  - school/cpp
  - language/english
  - taal/engels
  - programming-languages/cpp
---
The pre-processor is a process that evaluates certain syntax in your code and collapses it to an expression that the compiler can use.
# Macros
A macro is a predefined expression that the pre-compiler converts back into its written value, it is very useful for writing shorthands.

```cpp
#define SQUARE(x) (x * x)
#defile print std::cout
#define end std::endl

// Will collapse into std::cout << (4 * 4) << std::endl at pre-processing 
print << SQUARE(16) << end
```

# \#if
\#if works like an normal if statement, but instead of executing code within its scope if the expression is true, it will either add or not add the code to the actual compilation step. This can come in handy when you need to do compiler/operating system specific methods.

```cpp
#if defined(_WIN32) && defined(_WIN64)  
    std::cout << "Running on Windows 64-bit" << std::endl;  
#elif defined(_WIN32)  
    std::cout << "Running on Windows 32-bit" << std::endl;  
#elif defined(__APPLE__) || defined(__MACH__)  
    std::cout << "Running on macOS" << std::endl;  
#elif defined(__linux__)  
    std::cout << "Running on Linux" << std::endl;  
#elif defined(__unix__)  
    std::cout << "Running on Unix" << std::endl;  
#elif defined(_POSIX_VERSION)  
    std::cout << "Running on POSIX-compliant OS" << std::endl;  
#else  
    std::cout << "Unknown OS" << std::endl;  
#endif
```
