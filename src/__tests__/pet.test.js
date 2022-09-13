const Pet = require("../pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fido")).toBeInstanceOf(Object);
  });

  xit("sets the name property", () => {
    const pet = new Pet("Fido");
    expect(pet.name).toEqual("Fido");
  });

  xit("has initial age of 0", () => {
    const pet = new Pet("Fido");
    expect(pet.age).toEqual(0);
  });
});

describe("growUp", () => {
  it("increments the age by 1", () => {
    const pet = new Pet("Fido");
    pet.growUp();

    expect(pet.age).toEqual(1);
  });

  it("increases the age by 1, decreases fitness by 3, increase fitness by 5", () => {
    const pet = new Pet("Fido");
    pet.growUp();

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

describe("checkUp", () => {
  it("returns a string explaining how the pet is feeling", () => {
    const pet = new Pet("Fido");

    pet.fitness = 3;
    pet.checkUp();

    expect(pet.checkUp()).toEqual("I need a walk");
  });
  it("returns a string explaining how the pet is feeling", () => {
    const pet = new Pet("Fido");

    pet.hunger = 5;
    pet.checkUp();

    expect(pet.checkUp()).toEqual("I am hungry");
  });
  it("returns a string explaining how the pet is feeling", () => {
    const pet = new Pet("Fido");

    pet.fitness = 3;
    pet.hunger = 5;
    pet.checkUp();

    expect(pet.checkUp()).toEqual("I am hungry AND i need a walk");
  });
  it("returns a string explaining how the pet is feeling", () => {
    const pet = new Pet("Fido");

    pet.fitness = 7;
    pet.hunger = 2;
    pet.checkUp();

    expect(pet.checkUp()).toEqual("I feel great");
  });
});

describe("checkUp", () => {
  it("returns a string explaining how the pet is feeling", () => {
    const pet = new Pet("Fido");

    pet.fitness = 3;
    pet.checkUp();

    expect(pet.checkUp()).toEqual("I need a walk");
  });
});

describe("isAlive", () => {
  it("is the pet alive", () => {
    const pet = new Pet("Fido");

    pet.fitness = 0;
    pet.hunger = 10;
    pet.age = 30;

    expect(pet.isAlive).toEqual(false);
  });
});

describe("feed", () => {
  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fido");

    pet.age = 30;
    pet.hunger = 10;

    expect(() => pet.feed()).toThrow("Your pet is no longer alive");
    expect(() => pet.walk()).toThrow("Your pet is no longer alive");
    expect(() => pet.growUp()).toThrow("Your pet is no longer alive");
    expect(() => pet.checkUp()).toThrow("Your pet is no longer alive");
  });
});
