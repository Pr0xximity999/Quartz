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