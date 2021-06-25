import { Cart, CartItem } from '../type/cart';
import { LocalStorageCart, LocalStorageOrderItem } from '../type/local-storage';

export default class CartConverter {
  toCart(localStorageCart: LocalStorageCart): Cart {
    const cartItems = localStorageCart.order.items.map(this.toCartItem);
    const productsQuantity = cartItems
      .reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
    return {
      cartId: localStorageCart.cartId,
      items: cartItems,
      productsQuantity,
    };
  }

  private toCartItem(localStorageOrderItem: LocalStorageOrderItem): CartItem {
    return {
      product: {
        id: localStorageOrderItem.productId,
        sku: localStorageOrderItem.sku,
        name: localStorageOrderItem.name,
        price: localStorageOrderItem.price,
      },
      quantity: localStorageOrderItem.quantity,
    };
  }
}
