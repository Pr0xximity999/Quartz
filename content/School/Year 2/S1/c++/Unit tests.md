---
tags:
  - school/cpp
  - programming-languages/cpp
  - school/robot-fleet
  - taal/engels
  - language/english
publish: true
---
Code needs to run well. It also needs to run well when it doesn’t. Unit tests are tests that run tiny bits of code (usually one function or method) to test multiple scenarios and their outcome. It is the smallest unit of testable software.

The goal of unit tests is to find bugs early on and increase the reliability of the code. The nice thing about unit tests is that they’re easily automated, being able to be implemented in an automated deployment pipeline

# Unit test frameworks
For c++ there are multiple frameworks available, like Google tests (gtest), microsoft c++ unit testing framework (CppUnitTestFramework) and Boost.Test (from the boost library).

- Google test (windows & linux): [link](https://learn.microsoft.com/en-us/visualstudio/test/how-to-use-google-test-for-cpp?view=vs-2022)
- Microsoft c++ unit testing framework (windows only): [link](https://learn.microsoft.com/en-us/visualstudio/test/how-to-use-microsoft-test-framework-for-cpp?view=vs-2022)
- Boost.test (windows & linux, you’ll need to compile the boost library): [link](https://learn.microsoft.com/en-us/visualstudio/test/how-to-use-boost-test-for-cpp?view=vs-2022)

# Unit testing terminology
![[Vault-data/Attachments/Unit tests chart.png]]


# C++ Templates
Templates are a mechanism to write code that can be edited for different filetypes, like C# Type parameters. Templates enable to creation of generic methods that can be used for different types or objects.

```cpp
template<typename T>
T add(T a, T b){
	return a + b
}
```

