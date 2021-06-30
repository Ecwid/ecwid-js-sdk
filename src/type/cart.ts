/**
 * Details of a specific product in cart.
 */
export interface Product {
  /**
   * Internal unique product ID.
   */
  readonly id: number;
  /**
   * Product SKU.
   */
  readonly sku: string;
  /**
   * Product name.
   */
  readonly name: string;
  /**
   * Product price.
   */
  readonly price: number;
}

/**
 * CartItem represents a single item (product variety) in cart.
 */
export interface CartItem {
  /**
   * The map of product properties (variation properties, if the variation is added to cart).
   */
  readonly product: Product;
  /**
   * Quantity of the given product variety in cart.
   */
  readonly quantity: number;
}

/**
 * The state of current customer's shopping cart.
 */
export interface Cart {
  /**
   * Cart ID you can use later in the cart service.
   */
  readonly cartId: string;
  /**
   * Enlists all items currently present in customer’s cart.
   */
  readonly items: CartItem[];
  /**
   * Total number of product varieties in cart
   */
  readonly productsQuantity: number;
}
