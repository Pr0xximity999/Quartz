---
tags:
  - school/robot-fleet
  - school/cpp
  - language/english
  - taal/engels
  - programming-languages/cpp
---
Some programs need to have multiple tasks to be run at the same time.

> **Multitasking**: the concurrent execution of multiple programs on a computer system.
> **Concurrency**: the ability of a system to deal with multiple tasks at the same time, where tasks can be executed overlapping in time.

> **Program**: A file containing source code that is not yet running.
> **Process**: A running instance of a program. 
> **Task**: A unit of work that can be executed, often within the same process.



![[Vault-data/Attachments/Pasted image 20251006092741.png]]

# Threads
A thread is the smallest unit of execution. Threads within the same process share the same memory and resources, but each thread maintains its own execution context and things like the stack.

**Multithreading** is running multiple threads within the same process. This allows pausing of one thread while other executions don’t stop.


## Thread pitfalls
**Race conditions**: two or more threads try to access the same resource at the same time, leading to unexpected behavior where the read values are not correct.

**Deadlock**: one thread tries to access a resource from another thread, but that thread tries to access a resource from the first thread, leading to an infinite waiting game.

**Starvation**: one thread has a lower priority than another thread when trying to access a resource, in turn not giving it the ability to do anything.

**Overhead**: the creation, scheduling, and swapping of threads can be time and resource intensive


## Thread synchronization
Thread synchronization is important when managing shared resources between threads. Ways to synchronize threads are:
- **Mutex**: Mutual-exclusions; one thread can access a resource, and gets blocked if its already in use
- **Atomics**: Threads trying to access a resource get a queue number, and are handled one after the other
- **Semaphores**: A specified number of threads can access a resource at the same time
- **Tasks**: A higher abstraction above threads, the runtime decides how and when threads are ran by the use of a task scheduler. It allows methods to run asynchronously
- **Condition variables**: Let a thread wait until a condition is satisfied, like waiting for an event to be called. Kind of like the [[#Future and promise|future and promise]] methods
- **Barrier**: Waiting for all threads to reach a certain point, before continuing

# Future and promise
If you want to get the value of something that has been calculated in a different thread, you can use a future and promise object. 
> **Future** object: The object *waiting* for a promised value
> **Promise object**: The object *giving* the promised value


When trying to get the value from a future object, the thread waits until the promise object has been assigned a value.


# OpenMP
OpenMP is an API and compiler-derivatives used for parallel programming, mostly used in scientific calculations. It focuses on data-parallelism by running multiple calculations in parallel.

Compared to threads, it also runs on multiple cpu cores and uses different runtime-libraries, is more focused on rough parallel tasks instead of fine ones, and is more scalable.

## Reductions
Since OpenMP runs on multiple cpu cores, splitting the work could lead to race-conditons and eventual loss of data. 

A parallel is defined inside the `#pragma` section
```cpp
#pragma omp parallel for
for (int i = 0; i < n; ++i) {
    sum += arr[i];
}
```

Whenever sum is being updated, a local copy is made, the value is added to that copy, and that copy then overwrites the old value. If two writes would happen at once, one would *overwrite* the other, leading to loss in data


That’s where reduction comes into play. Reduction tells the parallel method to make their own local copy, and add it back up in the end:
```cpp
int sum = 0;

#pragma omp parallel for reduction(+:sum)
for (int i = 0; i < n; ++i) {
    sum += arr[i];
}

```

the `+` sign tells the parallel to add the number back up, and apply the output value to `sum`