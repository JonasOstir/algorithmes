import Reverse from './index';

const r = new Reverse();

test('Definded', () => {
  expect(r).toBeDefined();
});

test('Reversed string', () => {
  expect(r.reverse('abc')).toEqual('cba');
//  expect(r.reverse2('abc')).toEqual('cba');
});

test('Reversed string', () => {
  expect(r.reverse('   Jonas')).toEqual('sanoJ   ');
  // expect(r.reverse2('   Jonas')).toEqual('sanoJ   ');
});

