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
Policy was discussed [[School/Year 2/S2/Digital Twink/Machine Learning/W1 -  Reinforcement Learning|previously]]. It’s basically the current strategy of the agent which changes over time to improve its rewards.

# Q Learning

## State Value function 
Every tick, the agent is in a state. To get the value of the next state by following a policy is called the **state value**. It is a function that basically calculates “how good is state s if i follow policy PI?” and represents the expected sum of all the future rewards.

The state value function is written as follows:<br>![[Vault-data/Attachments/W2 - Policy Q Learning.png]]

It basically sums up all the rewards gained over each state .A large value of V(s) is a good state. A small value of V(s) is a bad state.

>[!example]
>Let’s say you’re playing a game.
>- The current state is: s = “i am on square 3”
>- The value state is: $V^{\pi}$(3) = 25
>
>Interpretation:
>- “On average, starting from square 3, i will obtain 25 points if i continue following policy PI”

## Action Value Function
Just like the state Value Function, there is a function that calculates how rewarding an action will be. Its difference between this and the State Value Function is that the SVF looks only at the future states, but the AVF will evaluate future actions.

The action value function is written as follows:<br>

![[Vault-data/Attachments/W2 - Policy Q Learning-1.png]]

The function is The reward of the current state, action and next state plus the state value of the next state.

Interpret it as “if i am in state s and take an action now, then continue following PI, how much total reward will i obtain?”

Where $V^{\pi}(s)$ only evaluates the current state, $Q^{\pi}(s,a)$ evaluates a specific action.

## Optimality and Bellman equation
The **optimal state value function** is written as follows:<br>![[Vault-data/Attachments/W2 - Policy Q Learning-2.png]]

The **optimal action value function** is written as follows:<br>![[Vault-data/Attachments/W2 - Policy Q Learning-8.png]]

- $V^{*}(s)$ represents the value of the best possible choice in state s
- $Q^{*}(s,a)$ represents the value of action a when behaving optimally forever after
## To recap
If the Q value is known, the optimal policy can be obtained by calculating:
$$
\pi{*}(s) = arg  \ \underset{a}{max}  \ Q^{*}(s,a)
$$
It goes over all possible states and actions, calculates the reward values, and calculates the best possible value.

This is why it’s called “Q Learning”. It tries to learn the best Q value by using all these calculations.

All in all, the Q learning method is a model-free reinforcement learning algorithm that learnt to find the most optimal action-value function Q \*(s, a)

![[Vault-data/Attachments/W2 - Policy Q Learning-5.png]]

Where:
- alpha is the learning rate
- Y is the discount factor
- R is the reward received after executing action a
- s’ is the next state

And the procedure is:
1. Internalize Q(s, a) arbitrarily
2. Observe the current state s
3. Choose an action a using an exploration strategy (e.g. epsilon-greedy)
4. Execute a, observe reward r and next state s’
5. Update Q(s,a) using the update rule
6. set s ← s’ and repeat until convergence

## Q-Table
The Q-table is the place where all values of Q(s, a) are being stored for each state s and action a. Rows will represent the states s and columns represent actions a. Each cell Q(s, a) estimates the total expected reward if the agent takes action a in state s and continues optimally after. Over time, the agent will update the table and optimize its actions.

# Q-learning to policy gradient
Q-learning is value based and essentially “brute forces” every possible interaction, with the following derived policy:<br>![[Vault-data/Attachments/W2 - Policy Q Learning-9.png]]

It works well, as long as **the action space is small**. Since it makes a table of all actions and states, it will multiplicatively grow with each addition. 

It also cannot directly optimize the policy. There is a solution for that though.

# Policy gradient
Another approach is to learn to policy directly.

![[Vault-data/Attachments/W2 - Policy Q Learning-6.png]]

- The policy is a *neural network*
- Θ(thèta) are the parameters of the network
- The agent directly adjusts theta to maximize expected rewards
- The neural network outputs a probability distribution over actions
	- Hence why it’s called a *gradient*
- The agent samples action from this distribution
	- It chooses the best one
- Again, the goal is to **maximize** the expected total reward
- The parameters of the policy are updated using **gradient ascent**
	- This essentially means: If this change in action leads to more rewards, keep changing it in that direction until the rewards peak
	- The update follows the direction that increases good actions and decreases bad ones.

Using this strategy, it does not need prior knowledge of the environment model. It learns everything from pure interaction with the environment.

## Transition probability
The envirnonment dynamics are described by the transition probability:<br>![[Vault-data/Attachments/W2 - Policy Q Learning-7.png]]

This depicts the probability of reching the next state st+1 after taking action in the current state st.

>[!info] Policy vs Transition Probability
>A policy π(a | s) is a probability distribution over actions given a state and defines the behavior of the agent. It determines how actions are selected in each state.
>In contrast, the transition probability P(s ′ | s, a) describes the dynamics of the environment. 
>In many practical applications, this information is not available, which motivates the use of model-free policy gradient methods.

## The objective function
In policy gradient methods, the policy is parameterized as $\pi \theta(a|s)$, where theta denotes the parameters of the policy network (neural network). The learning problem is formulated as the maximization of the expected return (number go up) trough the objective function:<br>![[Vault-data/Attachments/W2 - Policy Q Learning-10.png]]

By adjusting theta, the agent improves its policy in order to increase the expected return.

## Gradient ascent update rule
After that, the policy parameters (theta) are updated using the gradient ascent rule in order to maximize the expected return. **Gradient ascent** is a function that finds the peak/lowest point of a given function/equation.

The update is performed in the direction of the gradient, since the gradient shows the direction of the maximum increase of the objective function, while its magnitude represents the maximum rate of change (alpha). This rule is defined as:<br>![[Vault-data/Attachments/W2 - Policy Q Learning-11.png]]
where alpha is the learning rate.

## Policy as a neural network
In policy gradient methods, the policy is modeled by a neural network parameterized by theta. The network takes the state s as input and outputs a probability distribution over the possible actions. For discrete actions spaces, the output layer is typically a softmax function. This allows the agent to sample actions according to the learned policy and enables gradient-based optimization<br>![[Vault-data/Attachments/W2 - Policy Q Learning-12.png]]

# Updating the policy
After executing the episode (one “run”) and collecting a trajectory:<br>![[Vault-data/Attachments/W2 - Policy Q Learning-13.png]]

The agent computes the return associated with each action. The policy parameters are then updated to increase the probability of actions that led to high returns and decrease the probability of actions that led to low returns.

This update is also achieved by using the gradient ascent function shown [[#Gradient ascent update rule|above]].

# Sources
- [Q-Learning Explained - A Reinforcement Learning Technique (youtube)](https://www.youtube.com/watch?v=qhRNvCVVJaA)