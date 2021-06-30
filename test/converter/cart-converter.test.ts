import CartConverter from '../../src/converter/cart-converter';
import { prepareLocalStorageCartData, prepareCartData } from '../helper/cart-test-data-helpers';

test('LocalStorageCart to Cart conversion', () => {
  const cartConverter = new CartConverter();
  const localStorageCart = prepareLocalStorageCartData();
  const expectedResult = prepareCartData();
  const actualResult = cartConverter.toCart(localStorageCart);
  expect(actualResult).toEqual(expectedResult);
});
