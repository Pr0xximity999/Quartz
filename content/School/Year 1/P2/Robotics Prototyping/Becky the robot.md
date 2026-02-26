---
tags:
  - school/robotics-prototyping
  - school/technische-informatica
  - taal/engels
  - language/english
publish: true
---
Today school gave us a tiny robot. It's intention is to be used in a case with a certain company to achieve a certain goal. The current goal is not yet known.

![[Vault-data/Attachments/becky.gif]]
she does spin though
# Layout
The robot consists of 4 different boards, split on two layers.

The top layer has a raspberry pi, a grove base hat on top that will be used for a bunch of sensors
The bottom layer has a Pololu 32U4 Control board on top of an arduino.
![[Vault-data/Attachments/20241112_123610 1.jpg]]
<sub>``the robot in question``</sub>
Meet Rebecca :3

**UPDATE**:
Becky now looks like this
![[Vault-data/Attachments/Pasted image 20241113213115.png]]

# installing and running the arduino
School had some sheets with how to run the thing, so i just followed those.
Firstly, i had to download the arduino IDE software and the romi microcontroller driver, so that the arduino IDE would detect the romi chip in the first place.
Then i had to install 3 libraries for code used in the romi (the base chip, gyro/accelerometer and a secret third library).

After this i grabbed an example code from file > examples > Rmoi32U4 and selected the romi board on the right COM port.

# Making becky move around
After some messing around, i made her able to drive around and turn once she hits something.

![[Vault-data/Attachments/output-onlinegiftools-ezgif.com-optimize.gif]]

I did this by checking how fast the wheels spin and if they spin about 80% of the normal speed, it probably hit something, and she turns.

She also makes a sound when she hits something, calculated by this function:
![[Vault-data/Attachments/Pasted image 20241114202208.png]]
yes, i did name it screech