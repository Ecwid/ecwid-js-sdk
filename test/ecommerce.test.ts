import Ecommerce from '../src/ecommerce';

test('Ecommerce initialization', () => {
  const storeOptions = { storeId: 42 };
  const ecommerce = new Ecommerce(storeOptions);
  expect(ecommerce.cart).toBeDefined();
});
