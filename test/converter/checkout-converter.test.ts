import CheckoutConverter from '../../src/converter/checkout-converter';
import { LocalStorageCheckout } from '../../src/type/local-storage';

test('LocalStorageCheckout to Cart conversion', () => {
  const cartConverter = new CheckoutConverter();
  const localStorageCheckout: LocalStorageCheckout = {
    id: 'GkpzhWnTX2gBvgBQ',
    itemsCount: 4,
  };
  const expectedResult = {
    cartId: '',
    items: [],
    productsQuantity: 4,
  };
  const actualResult = cartConverter.toCart(localStorageCheckout);
  expect(actualResult).toEqual(expectedResult);
});
