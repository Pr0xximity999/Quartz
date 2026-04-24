---
tags:
  - programming-languages/rust
  - taal/engels
  - language/english
banner:
publish: true
---
This file won’t be as coherent as i won’t explicitly write down every characteristic of rust, instead choosing to write down things that i see as “unique” or “noteworthy” to the language.

If you want the whole list of information things you need to get a grasp of rust, check out [The Rust Programming Language book](https://doc.rust-lang.org/book/)

Rust is a statically typed, expression-based safe programming language, usually compared to [[School/Year 2/S1/c++/Introduction C++|C++]] control-wise. It also has a 20% chance of turning you into a girl.
# No classes
No classes found in this language. Freed from the shackles of [[School/Year 1/P2/Software-development/Object Oriented Programming|Object Oriented Programming]] at last 🙏.

# Expressions vs Statements
Rust is an expression-based language, which means that most things in the language are made of expressions (i think). Basically, pieces or blocks or code wil collapse to a certain value after being evaluated. Though some code does not; Statements.

Statements are instructions that do some action but do not return a value, so in places where an expression is expected, a statement cannot be used.

So a funfact is that a literal of any sorts are expressions, until a semicolon is introduced. AND because of how functions work, you can just put a literal value (or variable) without a semicolon on the last line and it will work.

```rust
fn five(){
	5 //Returns five
}

fn otherfive(){
	5; // compilation error
}
```
To me that’s just silly, but i guess a quirk of how expressions work.

This does mean that you can go wild with how you want to assign things to stuff. Because for example assigning a variable some value also just expects an expression, meaning you don’t just have to use a literal or other variable.

Some other things that are expressions are:
- Loops (the break value is essentially a return)
- If statements (diabolical oneliner potential with this one)
- Functions

So to recap:
- An **expression** is an instruction that evaluates to some value
- A **statement** is an instruction that does some action but does *not* evaluate to some value
# Variables
variables are denoted by the keyword `let`, followed by either the name of the variable or the `mut` keyword. Mutability will be covered [[#Mutability|later]].

The compiler will usually infer te datatype from the expression at the right hand side of the statement, but in some cases (or if you just want to explicitly define the type) it might be needed to be defined explicitly. This is done by writing `:datatype`. After all, rust is a statically typed language, meaning everything has to be explicitly typed (unless the compiler can figure it out).

```rust
let variable: i32 = 5;
```

## Data Types
Rust’s datatypes are broken up into two categories: scalar and compound types. 

Scalar types are datatypes with single values rust has the following scalars:
- Integer: numbers without fractions (decimals), has a signed and unsigned version with the following primitives:
	- i8 / u8 (8 bits)
	- i16 / u16 (16 bits)
	- i32 / u32 (32 bits) (i32 default)
	- i128 / u128 (128 bits)
	- isize / usize (architecture-dependent)
	- Integer literals can be written in other ways than decimal too
		- Hex: 0x22
		- Octal: 0o77 (thats zero o as in zero oranges)
		- Binary: 0b1111
		- Byte (only u8): b’A’
- Floating-point, or floats: numbers with fractions (decimals), has only two primitives:
	- f32 (32 bits)
	- f64 (64 bits) (default)
- Boolean: either true or false, 1 byte in size
- Character: alphabetic type, 4 bytes.
	- Literals are specified using single quotes
		- String literals use double quotes

Compound types can group multiple values into a single type. Rust has two compounds:
- Tuple: a collection of different types with a fixed length
	- Indexed by `.index`
- Array: a collection of the same type with a fixed length
	- Indexed by `[i]`
## Mutability
At default, variables in rust are immutable, meaning they cannot be edited after being assigned. To make a variable mutable, add `mut` after the `let` keyword.
```rust
let x = 5; #Immutable
let mut y = 5; #Mutable
```

# Conditions and If Statements
Everything that evaluates to a boolean can be used in if statements. You don’t need the brackets around the condition, but it’s a crime to not do it. 