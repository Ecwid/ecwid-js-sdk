import CartService from './service/cart-service';
import { StoreOptions } from './type/init';
import EventService from './service/event-service';

/**
* Ecommerce SDK entry point.
* @class
*/
class Ecommerce {
  readonly cart: CartService;

  readonly events: EventService;

  /**
   * @constructs Ecommerce
   * @param {StoreOptions} storeOptions An instance of {@link StoreOptions} used to
   * configure Ecommerce SDK.
   * @param {number} storeOptions.storeId - ID of store to operate with.
   * @param {string} storeOptions.storeLocationPath - Relative URL path to store page.
   * Optional, default value '/store'.
   */
  constructor(storeOptions: StoreOptions) {
    this.cart = new CartService(storeOptions.storeId, storeOptions.storeLocationPath);
    this.events = new EventService(storeOptions.storeId, this.cart);
  }
}

export default Ecommerce;
