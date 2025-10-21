---
tags:
  - school/operating-systems
  - school/robot-fleet
  - taal/engels
  - language/english
  - operating-systems/freertos
---
>**FreeRTOS**: Free Real Time Operating System

>**Thread**: A tiny task inside a process that does something
>**Multi-thread**: A process that has multiple threads; able to do multiple things at the same time

# Processes
> **Process**: an instance of a program running on the cpu

A process can be compared to a house, and a thread an person that lives inside that house. Multi-threading would be multiple people living in the same house, all doing different stuff at the same time.

A process is defined by its:
- Process state
- Program counter (its size in memory)
- CPU registers (tiny memory on the cpu, used for quick computation)
- I/O status info 
- Memory-management info
- CPU scheduling information

All this info is stated in the *Process Control Block (**PCB**)*.


## Process state
A process can be in a certain state based on a handful of criteria.
- **New**: The process is created, nothing happened yet
- **Ready**: The process is assigned to a processor, ready to be executed
- **Running**: The process’s instructions are being executed on the processor. When finished, it goes back to being ready.
- **Waiting**: The process waits for some other event to occur.
- **Terminated**: The process has finished execution and stops.

# CPU Scheduling
The cpu scheduler selects among the processes in memory that are ready to execute.

## Types of scheduling
### First come first serve (FCFS)
FCFS, also called *first in first out(**FIFO**)* executes processes as they arrive. This can be either efficient or inefficient depending on the order of processes .

#### Fixed priority scheduling 
Each process has a fixed priority number. The process with the highest priority will be executed by the CPU.

The issue with this is **starvation**, where a process will be never executed because of its low priority.

The solution for this is simple: each process gets their priority lowered after every execution, balancing out high priority processes.

### Round robin
Round robin executes a process of a number of time (a time slice). After the process’s time slice has ran out, the process will be paused and the next ready process will start.

Tweaking the quantum(time slice) is key, since making it too short will lead to a lot of time loss (changing processes requires time too) and making it too long will just turn it into FCFS.

# Atomics and race conditions
Parallel programs suffer from the issue of race conditions: When two running threads access the same variable at the same time, it might happen that one addition won’t be accounted for. 

This happens because on the lowest level, one addition process is interrupted by the next because of priority shenanigans by the sceduler.

In C, an example of this can be the expression `count = count + 1`. This is a **non-atomic** expression. Non atomic means that the scheduler can interrupt already running operations.


## Critical section
> **Critical section**: A piece of code that makes use of a shared, critical resource

You can shield off a critical section by giving a key to the operation: only one thread can use the key, other threads have to wait until the key is freed again.

In some cases, you may need multiple keys. A real life example can be a parking garage, or a shared front door: multiple instances can access it at the same time, but there is still a limit.

### No keys, but still a critical section
Shared resources can also be freed and closed on a timed base. Take a traffic light on a shared single lane for example: one lane drives for one time, and the other lane for the other.

The act of waiting for a resource is called a **semaphore**(named after the train signal). 

Semaphores work with waiting queues and a number of semaphores. Operating systems usually have two methods for a semaphore: a wait, and a signal (to take and free a key). Once the number of semaphores are all taken, threads are put in the queue until one thread sends a signal the os again.

A semaphore with a single key is also called a **Mutual Exclusion**, **Binary Semaphore**, or **MutEx**.

>[!question] Can the taking and freeing of keys cause race conditions
>This is totally up to the os to handle, the norm is that the taking of keys happens atomically. It should not be possible to have any race conditions here.

A program that waits for an electronic pulse, then waits again, and then runs a program, is called an **Interrupt**. One use-case of this is de-bouncing a button press: physical buttons sometimes jitter a bit when pressed or released, having a chance to cause another button press.

## Example
There are five philosophers on a round table. They all have a plate of spaghetti and a fork to the left and right of them. There are 5 forks. A philosopher need two forks to eat. A philosopher either wants to think or eat (there is unlimited spaghetti).

Every philosopher is a *thread*. The forks are the *critical section*. 

If every philosopher grabbed a single fork, no one would be able to grab the second: a **deadlock**. This is fixed by putting down the fork again if they couldn’t grab a second.

If every philosopher grabbed two forks but never put it back down, other philosophers would not be able to eat: **starvation**. This is fixed by making the philosophers only eat for a certain amount of time, before they have to lay down their fork again.


