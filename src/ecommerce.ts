import CartService from './service/cart-service';
import { StoreOptions } from './type/init';

/**
* Ecommerce SDK entry point.
* @class
*/
export default class Ecommerce {
  readonly cart: CartService;

  /**
   * @constructs Ecommerce
   * @param {StoreOptions} storeOptions An instance of {@link StoreOptions} used to
   * configure Ecommerce SDK.
   * @param {number} storeOptions.storeId - ID of store to operate with.
   * @param {string} storeOptions.storeLocationPath - Relative URL path to store page.
   * Optional, default value '/store'.
   */
  constructor(storeOptions: StoreOptions) {
    this.cart = new CartService(storeOptions.storeLocationPath);
  }
}
