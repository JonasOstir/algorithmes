// tests for fibonacci
const Reverse = require('./reverse');
import Reverse from './reverse';
const r = new Reverse();

test('Reverse function exists', () => {
  expect(r.reverse).toBeDefined();
});

test('Reverses a string', () => {
  expect(r.reverse('abc')).toEqual('cba');
  expect(r.reverse2('abc')).toEqual('cba');
});

test('Rever a string', () => {
  expect(r.reverse('   jonas')).toEqual('sanoj   ');
  expect(r.reverse2('   jonas')).toEqual('sanoj   ');
});

