import Ecommers from '../src/ecommerce';

test('Ecommers initialization', () => {
  const storeOptions = { storeId: 42 };
  const ecommers = new Ecommers(storeOptions);
  expect(ecommers.cart).toBeDefined();
});
