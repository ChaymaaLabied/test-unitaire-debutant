const { addition } = require("./math.js");

describe("Opérations mathématiques de base", () => {
  test("additionne 2 et 3 pour obtenir 5", () => {
    expect(addition(2, 3)).toBe(5);
  });

  test("additionne un nombre positif et un nombre négatif", () => {
    expect(addition(5, -2)).toBe(3);
  });
});
