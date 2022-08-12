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
});
