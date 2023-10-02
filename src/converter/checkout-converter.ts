import { LocalStorageCheckout } from '../type/local-storage';
import { Cart } from '../type/cart';

export default class CheckoutConverter {
  toCart(localStorageCart: LocalStorageCheckout): Cart {
    return {
      cartId: '',
      items: [],
      productsQuantity: localStorageCart.itemsCount,
    };
  }
}
