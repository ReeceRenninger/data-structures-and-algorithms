'use strict';

const { validateBrackets } = require('../index');

describe('validateBrackets', () => {
  test('should return true for balanced brackets', () => {
    expect(validateBrackets('')).toBe(true);
    expect(validateBrackets('()')).toBe(true);
    expect(validateBrackets('[]')).toBe(true);
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('({[]})')).toBe(true);
  });

  test('should return false for unbalanced brackets', () => {
    expect(validateBrackets('}')).toBe(false);
    expect(validateBrackets(')')).toBe(false);
    expect(validateBrackets('(]')).toBe(false);
    expect(validateBrackets('[')).toBe(false);
    expect(validateBrackets('([)]')).toBe(false);
  });
});
