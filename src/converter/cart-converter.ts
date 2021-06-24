import { Cart, CartItem } from '../type/cart';
import { LocalStorageCart, LocalStorageOrderItem } from '../type/local-storage';

export default class CartConverter {
  toCart(localStorageCart: LocalStorageCart): Cart {
    const cartItems: CartItem[] = [];
    localStorageCart.order.items.forEach((orderItem) => {
      cartItems.push(this.toCartItem(orderItem));
    });
    return {
      cartId: localStorageCart.cartId,
      items: cartItems,
      productsQuantity: this.calculateProductsQuantity(cartItems),
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

  private calculateProductsQuantity(cartItems: CartItem[]): number {
    let productsQuantity = 0;
    cartItems.forEach((cartItem) => {
      productsQuantity += cartItem.quantity;
    });
    return productsQuantity;
  }
}
