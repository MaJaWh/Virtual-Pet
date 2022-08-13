const maximumFitness = 10;
const increaseFitnessWalk = 4;
const minimumHunger = 0;
const decreaseHunger = 3;

function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = maximumFitness;
}

Pet.prototype.growUP = function () {
  this.age += 1;
  this.fitness -= 3;
  this.hunger += 5;
};

Pet.prototype.walk = function () {
  if (this.fitness + increaseFitnessWalk <= maximumFitness) {
    this.fitness += increaseFitnessWalk;
  } else {
    this.fitness = maximumFitness;
  }
};

Pet.prototype.feed = function () {
  this.hunger - 3;
  if (this.hunger - decreaseHunger >= minimumHunger) {
    this.hunger -= decreaseHunger;
  } else {
    this.hunger = minimumHunger;
  }
};

module.exports = Pet;
