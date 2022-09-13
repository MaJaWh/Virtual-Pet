# VIRTUAL PET

### CONTENTS OF THIS FILE

- Introduction
- Requirements
- Recommended modules
- Installation
- Future Updates

---

### INTRODUCTION

A totaly virtual pet! Our first virtual pet made using Java Script for week 5 of the Manchester Codes Software Engineering Track. This project was our introduction to the world of Object Oriented Programming.

We were also introduced to the NODE CLI and how to run the project inside this virtual sandbox for testing the functionality of our code.

The virtual pet has 4 features.

- Name
- Age
- Hunger
- Fitness

There are also 5 methods which can be called on the virtual pet

- growUP()
- walk()
- feed()
- checkUp()

A message will also appear on the screen if the pet dies

---

### REQUIREMENTS

There are no speacial requirements

---

### RECOMMENDED MODULES

There are no special recommended modules

---

### Installation

Please follow the below steps to set up the virtual pet on your own machine

1. Please clone down the peoject into a folder of your choice using $git clone git@github.com:MaJaWh/virtual-pet.git
2. Once downloaded run $npm install
3. Type $node in the command line to start node
4. Once inside the node command line type $const Pet = require('./src/pet'); This refrences the Java Script file where the virtual pet is.
5. Create a new with any name you like $const pet = new Pet('Bobby'). I called mine Bobby but you can use any name you wish.
6. Now its time to try out some of the methods on you new virtual pet. Pick from the above list. Try $pet.walk() in the command line. This will increase the fitness by 4 points.
   You can check the pets fitness by typing $pet.fitness into the command line. The pets fitness will increase up to a maximum of 10.
7. Go and try some of the other commands to see what happens!

---

### FUTURE UPDATES

I aim to increase the functionality of the pet in the future and create a GUI for a better user experience
