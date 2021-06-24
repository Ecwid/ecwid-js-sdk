/**
 * Details of a specific product in cart.
 */
export interface Product {
  /**
   * Internal unique product ID.
   */
  id: number;
  /**
   * Product SKU.
   */
  sku: string;
  /**
   * Product name.
   */
  name: string;
  /**
   * Product price.
   */
  price: number;
}

/**
 * CartItem represents a single item (product variety) in cart.
 */
export interface CartItem {
  /**
   * The map of product properties (variation properties, if the variation is added to cart).
   */
  product: Product;
  /**
   * Quantity of the given product variety in cart.
   */
  quantity: number;
}

/**
 * The state of current customer's shopping cart.
 */
export interface Cart {
  /**
   * Cart ID you can use later in the cart service.
   */
  cartId: string;
  /**
   * Enlists all items currently present in customer’s cart.
   */
  items: CartItem[];
  /**
   * Total number of product varieties in cart
   */
  productsQuantity: number;
}
