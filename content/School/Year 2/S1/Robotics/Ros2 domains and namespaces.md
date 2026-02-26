---
tags:
  - school/robot-fleet
  - operating-systems/linux
  - programming-languages/ROS
  - taal/engels
  - language/english
publish: true
---
# Domains
Robots on the same networks sometimes don’t need to share the same topics because this can cause issues with shared variables like driving speed and direction. This can be fixed with domains.

Domains shield off topics from other nodes on different domains. Nodes on the same namespace share the same topics.

Domains with with ID numbers with the environment variable `ROS_DOMAN_ID`

# Namespaces
Another way to start similar nodes are namespaces. Using namespaces lets nodes be on the same domain without node name or topic name conflicts.

![[Vault-data/Attachments/Ros domains and namespaces namespace.png]]

# Ros2 architecture
![[Vault-data/Attachments/Ros2 domains and namespaces architecture.png]]

The DDS implementation layer makes sure that every ros node doesn’t need to go trough a single node, which was the case in Ros1. The decentralized nature fixes this issue.

# DDS software
Another issue arises with the nature of ros2 communication, which goes over [[Info-tidbits/Network protocols/UDP protocol|UDP]]. It broadcasts over its local network, but this cannot happen over the internet. For this issue is yet another solution.

![[Vault-data/Attachments/Ros2 domains and namespaces dds software.png]]

## Zenoh bridge
![[Vault-data/Attachments/Ros2 domains and namespaces zenoh.png]]

Zenoh tunnels the UDP multicast over a tcp tunnel towards another host.
