const Pet = require("../pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  it("sets the name property", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });

  it("has initial age of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.age).toEqual(0);
  });
});

describe("growUP", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUP();

    expect(pet.age).toEqual(1);
  });

  it("increases the age by 1, decreases fitness by 3, increase fitness by 5", () => {
    const pet = new Pet("Fido");
    pet.growUP();

    expect(pet.age).toEqual(1);
    expect(pet.fitness).toEqual(7);
    expect(pet.hunger).toEqual(5);
  });
});

describe("walk", () => {
  it("increases fitness by to a maximum of 10", () => {
    const pet = new Pet("fido");

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
  });
});
describe("feed", () => {
  it("decrease hunger by to a minimum of 0", () => {
    const pet = new Pet("Fido");

    pet.hunger = 2;
    pet.feed();

    expect(pet.hunger).toEqual(0);
  });
});
