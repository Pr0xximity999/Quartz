---
tags:
  - taal/engels
  - language/english
  - maths/integers
  - maths/operators
publish: true
---
In the previous chapter we talked about [[Info-tidbits/Maths/01 - Numbers|integers]], let's expand on that.

When you work with numbers, you want a way to write down which of two numbers is bigger, smaller or equal(or a combination of).
The standard way of doing this is trough the symbols:
- $=$ (equal to)
- $!=$ (not equal to)
- $<$ (Less than)
- $\leq$ (Less or equal to)
- $>$ (Greater than)
- $\geq$ (Greater or equal to)

Now, for the following examples, let's visualise a line of integers.
We'll grab a random point in this line, for these examples we'll use two(2).

# Equal to ($=$)
Everything *neither on the left or the right* of any chosen number is **equal to** that number.
The mathematical way to denote equal to is: $=$.
```
                             |equal to 2|
... -6, -5, -4, -3, -2, -1, 0, 1,|2|, 3, 4, 5, 6, 7, 8, 9, 10, 11 ...
```

Some examples of this are:
- $1 = 1$
- $0 = 0$
- $-5 = -5$

# Not equal to ($\neq$)
Everything *either on the left or the right* of any chosen number is **not equal to** that number.
The mathematical way to denote equal to is: $=$.
```
                   not equal to 2| |not equal to 2
... -6, -5, -4, -3, -2, -1, 0, 1,|2|, 3, 4, 5, 6, 7, 8, 9, 10, 11 ...
```

Some examples of this are:
- $1  \neq 0$
- $20 \neq 5$
- $-5 \neq 40$
- $-10 \neq -6$

# Less than($<$)
Everything to the left of any chosen number is **less than** that number.
The mathematical way to denote less than is: $<$.

```
                  <-- less than 2| 
... -6, -5, -4, -3, -2, -1, 0, 1,|2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ...
```

Some examples of this are:
- $1 < 2$
- $10 < 50$
- $-5 < 0$
- $-20 < -11$
## Less or equal to ($\leq$)
Everything to the left *but also itself* of any chosen number is **less or equal to** that number.
Less or equal to is the same as less than, but it *includes* the number itself.
The mathematical way to denote less or equal to is: $\leq$


```
             <-- less or equal to 2| 
... -6, -5, -4, -3, -2, -1, 0, 1, 2|, 3, 4, 5, 6, 7, 8, 9, 10, 11 ...
```

Some examples of this are:
- $1 \leq 2$
- $10 \leq 10$
- $-6 \leq 3$
- $-2056 \leq -2056$
# Greater than($>$)
Everything to the right of any chosen number is **greater than** that number.
The mathematical way to denote less than is: $>$.

```
                                    |greater than 2 -->
... -6, -5, -4, -3, -2, -1, 0, 1, 2,| 3, 4, 5, 6, 7, 8, 9, 10, 11 ...
```

Some examples of this are:
- $2 > 1$
- $50 > 10$
- $5 > -6$
- $-11 > -20$
## Greater or equal to ($\geq$)
Everything to the right *but also itself* of any chosen number is **greater or equal to** that number.
Greater or equal to is the same as greater than, but it *includes* the number itself.
The mathematical way to denote less or equal to is: $\geq$


```
                                  |greater or equal to 2 -->
... -6, -5, -4, -3, -2, -1, 0, 1, |2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ...
```

Some examples of this are:
- $2 \geq 1$
- $0 \geq -1$
- $10 \geq 10$
- $-3 \geq -6$
- $2056 \geq 2056$

# An easy way to remember the symbols
If you look at the symbol $>$, you will notice that the *left is wider, bigger, or greater than the right*
Same with $<$. The *left is thinner, smaller, or lesser than the right*.

# Comparing big numbers
Comparing big numbers may be harder because of their length.
A solution would be to:
1. write both numbers below each other:<br>
	$256477,256486$<br>
	
	$256477$<br>
	$256486$<br>

2. Compare the top and bottom number, starting on the left. 
	If both numbers are the same, you go one to the right until you find a number that isn't the same:
	- If all the numbers are the same, both numbers are equal to each other ($=$)<br>
	$\boxed{2564}77$<br>
	$\boxed{2564}86$<br>

3. Compare top and bottom to see which of the two is either greater or less (depending on your goal):<br>
	$\boxed{2564}77$<br>
	$\boxed{2564}86$<br>
	$7 < 8$ Or $8 > 7$<br>

4. Now write the whole numbers again:<br>
	$256477 < 256486$ <br>Or <br>$256486 > 256477$


>[!note] next chapter
>The next chapter will go over [[Info-tidbits/Maths/03 - The sum and difference|the sum, difference, product and quotient of numbers]]