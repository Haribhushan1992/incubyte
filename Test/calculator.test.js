const { add } = require('../src/calculator');

test('should return 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('should return the number itself for a single number', () => {
  expect(add("1")).toBe(1);
});

test('should return the sum for comma-separated numbers', () => {
  expect(add("1,5")).toBe(6);
});

test('should return the sum for numbers with new lines between them', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('should handle custom delimiters', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('should throw an error for negative numbers', () => {
  expect(() => {
    add("1,-2,3,-4");
  }).toThrow("Negative numbers not allowed: -2,-4");
});