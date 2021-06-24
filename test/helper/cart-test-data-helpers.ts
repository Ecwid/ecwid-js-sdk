import { Cart } from '../../src/type/cart';
import { LocalStorageCart } from '../../src/type/local-storage';

export function prepareLocalStorageCartData(): LocalStorageCart {
  return {
    cartId: 'XXXXXXX-XXXXXX-XXXXXX-XXXX',
    order: {
      items: [
        {
          productId: 1000001,
          sku: '00001',
          name: 'Example1',
          price: 99.99,
          quantity: 1,
        },
        {
          productId: 1000002,
          sku: '00002',
          name: 'Example2',
          price: 77.99,
          quantity: 3,
        },
      ],
    },
  };
}

export function prepareCartData(): Cart {
  return {
    cartId: 'XXXXXXX-XXXXXX-XXXXXX-XXXX',
    items: [
      {
        product: {
          id: 1000001,
          sku: '00001',
          name: 'Example1',
          price: 99.99,
        },
        quantity: 1,
      },
      {
        product: {
          id: 1000002,
          sku: '00002',
          name: 'Example2',
          price: 77.99,
        },
        quantity: 3,
      },
    ],
    productsQuantity: 4,
  };
}
