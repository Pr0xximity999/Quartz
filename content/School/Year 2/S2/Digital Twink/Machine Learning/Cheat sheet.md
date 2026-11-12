---
tags:
  - school/digital-twin
  - school/machine-learning
  - taal/engels
  - language/english
banner:
publish: true
---
# Workshop 1
- **Reinforcement learning**: A self improving algorithm that learns trough a reward system and trial and error.

- **Agent**: The learning entity that makes the decisions
	- example: car
- **Environment**: The external system that the agent gets most of its inputs from and where it navigates trough. This is what the agent reacts to
	- example: The road, pedestrians, traffic
- **State (s)**: The representation of the current situation the agent is in
	- example: wind speed, distance to traffic, velocity, traffic lights, position
- **Action (a)**: The choice or decision the agent makes in the environment
	- example: steer, brake, accelerate, change lanes, 
- **Reward**: The feedback that the agent gets for doing its task. Usually an addition or subtraction of points.
- **Policy**: The current strategy of the agent.

# Workshop 2
- **State/action value**: The reward given at that certain state/action
- **Q Learning**: Taking in account all possible states and action to get the most value out of the environment
	- Essentially brute-forcing optimization
- **Policy gradient**: The policy gradient algorithm is a method that uses gradient ascent to find the most optimal policy, without knowing the environment beforehand.

# Mathematical functions