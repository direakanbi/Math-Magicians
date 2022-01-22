import operate from './operate';

describe('mathematical operations', () => {
  test('Add two numbers', () => {
    expect(operate(5, 10, '+')).toBe('15');
  });
  test('Check if the addition was true', () => {
    expect(operate(5, 10, '+') === '15').toBeTruthy();
  });
  test('Varify if two numbers adds and are both falsy', () => {
    expect(operate(5, 10, '+') === '18').toBeFalsy();
  });
  test('Subtract two numbers', () => {
    expect(operate(20, 10, '-')).toBe('10');
  });
  test('Check if the subtraction was true', () => {
    expect(operate(20, 10, '-') === '10').toBeTruthy();
  });
  test('Varify if two numbers subtracts and are both falsy', () => {
    expect(operate(20, 10, '-') === '30').toBeFalsy();
  });
  test('Multiply two numbers', () => {
    expect(operate(4, 3, 'x')).toBe('12');
  });
  test('Check if the multiplication was true', () => {
    expect(operate(4, 3, 'x') === '12').toBeTruthy();
  });
  test('Varify if two numbers multiplys and are both falsy', () => {
    expect(operate(4, 3, 'x') === '18').toBeFalsy();
  });
  test('Divise two numbers', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });
  test('Check if the divition was true', () => {
    expect(operate(6, 3, '÷') === '2').toBeTruthy();
  });
  test('Varify if two numbers divides and are both falsy', () => {
    expect(operate(6, 3, '÷') === '7').toBeFalsy();
  });
  test('Use Modulo', () => {
    expect(operate(8, 3, '%')).toEqual('2');
  });
  test('Check if the modulo was true', () => {
    expect(operate(8, 3, '%') === '2').toBeTruthy();
  });
  test('Varify if two numbers modulo are falsy', () => {
    expect(operate(8, 3, '%') === '3').toBeFalsy();
  });
});
