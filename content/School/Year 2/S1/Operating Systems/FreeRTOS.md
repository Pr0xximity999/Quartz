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

