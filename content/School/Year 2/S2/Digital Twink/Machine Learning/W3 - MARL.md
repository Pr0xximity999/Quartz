---
tags:
  - school/digital-twin
  - school/machine-learning
  - taal/engels
  - language/english
banner:
publish: true
---
# Intro
Reinforcement learning agents aren’t bound to just a singular instance. Multiple agents are able to all interact in the same environment together. The principle of how multiple agents interact simultaneously in a shared environment is called **Mulit-Agent Reinforcement Learning (MARL)**.

# Key components of MARL
The main idea is that multiple agents learn at the same time, in the same environment. This means that they can all interact together and with each other, making it a dynamic and non-stationary environment. But even though there are multiple agents, each one prioritizes and aims to maximize its own long-term reward.

Its applications are:
- Computer game ai
- autonomous driving
- multi-robot warehouses
- automated trading
- crowd control simulation
- enhanced cooperation between machines

# Multi-agent systems
A **multi-agent system, or MAS** consists of multiple autonomous agents interacting in a shared environment, just like in MARL. 

Its main components are the environment and the agents. agents can observe and choose how to influence the environment, becoming the dynamic of the environment in the process. Again, like in MARL, agents are goal-directed, typically aiming for long-term returns of their own. This similarity is for a reason though.

>[!important] Why MAS before MARL?
>As you may have noticed, MAS basically provides and *is* the conceptual and structural foundation on which MARL is built.
>- MAS defines *who the agents are and how they interact*
>- MARL defines *how agents learn optimal behaviors inside a MAS*
>
>MARL is essentially *MAS with learning added*.
>

MAS:
- Specifies the environment, agents, and interaction structure
- Models cooperation, competition, and communication between agents
- defines observation, action and reward interfaces

In turn, learning and by proxy MARL is useless without a well set up MAS.

Examples of multi-agent systems can be things like:
- cooperative robots working together to collect apples
- agents trying to simulate a hunter-prey dynamic
- simulating civilisation


# Why MARL?
When controlling multiple agents, each with their own action, their collective action space becomes exponentially larger with each agent added. Too large for a proper Single-agent reinforcement learning setup.

By decomposing the action space to multiple agents, each with their own separate algorithm, it will divide the processing power and will increase the learning rate. It is also more traceable.

Using this method will turn the system into a decentralized decision making environment. Just like in real life, each agent needs to be able to decide for itself. Take autonomous driving for example: each car needs to think for its own instead of one big controller taking care of everything. That’s MARL

# Challenges of MARL
Using multiple agent's does come with a cost on the other hand:
- The environment becomes non-stationary
	- Multiple agents moving around will always make the environment change
- Finding and optimizing equilibrium selection
	- Joint policies between agents need to be stable
- Crediting multiple agents in case of a multi-agent assignment
	- How much should each agent get?
- Scalability
	- Adding agents will add space and complexity
# Games
A game can be seen as the collective environment, the agents inside, and the states. Within this game is a hierarchy of what kind of game can exist.
## Hierarchy
On the top are partially observable stochastic games.
- Contains n amount of agents
- multiple states - all partially observed

Within this layer is the stochastic game
- contains n amount of agents
- multiple states - fully observed

Within this layer are two other same-leveled layers:
- Repeated Normal-Form Game
	- contains n amount of agents
	- Has 1 state
- Markov Decision Process
	- contains 1 agent
	- has multiple states


>[!note] Hierarchy of games
>**Partially Observable Stochastic Game (POSG)**
>- Most general model : multiple agents interact in a dynamic environment, but each agent can only observe a part of the true state.
>
>⇓ (full observability)
>
**Stochastic Game (SG)**
>- Special case of POSG where all agents have access to the complete state of the environment.
>
>⇓ (single state)
>
>**Repeated Normal-Form Game**
>- The same strategic interaction is repeated over time without any change of state. 
>
>⇓ (single agent)
>**Markov Decision Process (MDP)**
>- Single-agent version of stochastic games and the model used in classical RL
### Why do we need hierarchy?
In many real world systems:
- agents take decisions sequentially 
- interact with other agents 
- face uncertainty and incomplete information

Depending on:
- The number of agents,
- how much of the environment they can observe
- how complex the environment dynamics are

From this, different mathematical models are obtained. These models form a *hierarchy*, from the most general to simpler special cases.

## Partially observable stochastic games (POSG)
A POSG is an extension of stochastic games by adding partial observability to it.

It is defined by an 8-tuple:<br>![[Vault-data/Attachments/W3 - MARL.png]]
- I: Set of agents
- S: Set of environment states
- Ai: action set of agent i
- Ri: Reward function of agents i
- T: Transition probability
- u: initial state distribution
- Oi: observation set of agent i
- Oi(a, s, oi): Observation probability function

the i stands for the index. indices are used whenever there are multiple agents.

## Observation function in POSG
Each agent deos not observe the true state directly. instead, it receives an observation according to:<Br>![[Vault-data/Attachments/W3 - MARL-1.png]]

And with the normalisation:<br>![[Vault-data/Attachments/W3 - MARL-2.png]]
- Observations are probabilistic
- Each agent has its own observation space
- This leads to partial and uncertain perception of the environment
# Game types based on reward structures
1. Coorperative games (common-reward)
	- ![[Vault-data/Attachments/W3 - MARL-3.png]]
	- All agents receive the same reward
	- Agents fully coorperate to maximize a common objective
2. Competitive Games (zero-sum)
	- ![[Vault-data/Attachments/W3 - MARL-4.png]]
	- For two agents:
		- ![[Vault-data/Attachments/W3 - MARL-5.png]]
	- One agent’s gain equals the other’s loss
	- Pure competition between agents
3. Mixed-motive games (general-sum)
	- No restriction on reward functions
	- Agents may coorperate or compete depending on the situation
# MARL algorithms for cooperative and competitive games
#nog-af-maken 

# MARL algorithms for mixed-motive games
#nog-af-maken 

# Nash equilibrium
A **Nash equilibrium** is a situation in a game where no player can improve their payoff by changing their strategy alone, assuming other players keep their fixed. This means that each player is playing their best response to the other’s actions. This is a key concept for predicting behavior in strategic games.

Take the prisoners dilemma for example: two players can choose to study or cheat on the test. If one or no students cheat, noting happens. But if both students cheat they both fail. Cheating is easier than studying, but doing it risks the other person cheating. The best would be to always cheat, because for you alone it'll give the highest payoff.

# Minmax Q-learning
The goal is to learn the optimal strategy for two agents playing a zero-sum competitive markov game.

#nog-af-maken 

# Single-agent RL reductions
Reducing the MARL problem into a single agent RL problem has two main aproaches:
- Central learning: Learn a single policy for all agents
- independent learning: Each agent learns independently, ignoring others

# Central Learning principle
A central policy $\pi c$ is learned:
- inputs: local observation of all agents
- output: a joint action
![[Vault-data/Attachments/W3 - MARL-6.png]]

The MARL problem is transformed into a single-agent MDP over joint actions.

Consequence: classical single-agent RL algorithms can be directly applied.

## Central Q-Learning (CQL)
#nog-af-maken 
![[Vault-data/Attachments/W3 - MARL-7.png]]

Advantages:
- Avoids non-stationary
- Simplifies credit assignment
- Guarantees parento-optimal correlated equilibrium (common-reward games)
Limitations:
- Joint action space grows exponentially
- Requires reward scalarization
- Centralized control is often unrealistic

In short, it'll learn faster in some situations, but it will increase the computation requirement by a lot

# Independent Learning Principle
Independend learning trains one pilicy per agent

Each agent:
- learns its own policy PI i
- Uses only its own observations and rewards
- Treats other agents as part as the environment

This approach applies standard single-agent RL to each agent **independently**
## Independent Q-Learning
For each agent i, a local Q-function is learned:
![[Vault-data/Attachments/W3 - MARL-8.png]]

Each agent chooses their own actions

## IQL update rule
Each agent updates its Q-function using only its own reward:<br>![[Vault-data/Attachments/W3 - MARL-9.png]]
Agents do NOT model the policies of others.

Advantages:
- fully decentralized
- scales well with many agents
- simple to implement
Limitations:
- Environment becomes non-stationary
- No convergence guarantees in general
- Possible unstable learning

## Independent Policy Gradient Methods
Policy-gradient methods can also be applied independently in MARL
Each agent i:
- Maintains its own policy
- Learns from its own trajectories and rewards
- Ignores other agnet’ policies during learning

This is the policy gradient analogue of independent Q-Learning
## Update Rule

## Properties

## Policy gradient methods