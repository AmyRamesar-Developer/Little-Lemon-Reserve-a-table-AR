function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function isEven(number) {
  return number % 2 === 0;
}

// Unit tests
describe('Math Functions', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('checks if 4 is even', () => {
    expect(isEven(4)).toBe(true);
  });

  test('checks if 5 is even', () => {
    expect(isEven(5)).toBe(false);
  });
});