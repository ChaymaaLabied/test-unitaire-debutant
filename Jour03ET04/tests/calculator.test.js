const { evaluateExpression } = require("../calculator");

test("addition", () => {
  expect(evaluateExpression("2+3")).toBe(5);
});

test("soustraction", () => {
  expect(evaluateExpression("10-4")).toBe(6);
});

test("multiplication", () => {
  expect(evaluateExpression("3*4")).toBe(12);
});

test("division", () => {
  expect(evaluateExpression("8/2")).toBe(4);
});

test("priorité des opérations", () => {
  expect(evaluateExpression("2+3*4")).toBe(14);
});

test("parenthèses", () => {
  expect(evaluateExpression("(2+3)*4")).toBe(20);
});

test("expression invalide", () => {
  expect(() => evaluateExpression("2+bad")).toThrow("Expression invalide");
});
