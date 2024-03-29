import { Cart } from '../type/cart';
import CartConverter from '../converter/cart-converter';
import CheckoutConverter from '../converter/checkout-converter';

/**
 * Ecommerce SDK cart service. Contains cart operations.
 * @class
 */
class CartService {
  private readonly DEFAULT_STORE_LOCATION_PATH = 'store';

  private readonly cartConverter: CartConverter;

  private readonly checkoutConverter: CheckoutConverter;

  private readonly localStorageCartKey: string;

  private readonly localStorageCheckoutKey: string;

  private readonly defaultStoreLocationPath: string;

  constructor(storeId: number, storeLocationPath?: string) {
    this.localStorageCartKey = this.getCartKey(storeId);
    this.localStorageCheckoutKey = this.getCheckoutKey(storeId);
    this.defaultStoreLocationPath = storeLocationPath
      ? this.unifyStoreLocationPath(storeLocationPath)
      : this.DEFAULT_STORE_LOCATION_PATH;
    this.cartConverter = new CartConverter();
    this.checkoutConverter = new CheckoutConverter();
  }

  /**
   * Get cart data in current store.
   * @returns {Promise<Cart>} Promise of current {@link Cart} data.
   */
  get(): Promise<Cart> {
    if (typeof window === 'undefined' || !window || !window.localStorage) {
      return this.createEmptyCartPromise();
    }
    const checkoutRecord = window.localStorage.getItem(this.localStorageCheckoutKey);
    if (checkoutRecord != null) {
      const localStorageCheckout = JSON.parse(checkoutRecord);
      const cart = this.checkoutConverter.toCart(localStorageCheckout);
      return this.createCartPromise(cart);
    }

    const cartRecord = window.localStorage.getItem(this.localStorageCartKey);
    if (cartRecord == null) {
      return this.createEmptyCartPromise();
    }
    const localStorageCart = JSON.parse(cartRecord);
    const cart = this.cartConverter.toCart(localStorageCart);
    return this.createCartPromise(cart);
  }

  /**
   * Navigate to checkout page with current cart data.
   * @param {string} storeLocationPath - Relative URL path to store page.
   * In case argument is provided, it will be used for checkout URL composition.
   * In case argument is not provided and initial {@link StoreOptions} contains storeLocationPath,
   * path from {@link StoreOptions} will be used for checkout URL composition.
   * In case argument is not provided and initial {@link StoreOptions} does not contain
   * storeLocationPath, default path '/store' will be used for checkout URL composition.
   */
  goToCheckout(storeLocationPath?: string) {
    if (typeof window === 'undefined' || !window || !window.location) {
      return;
    }
    const effectiveStoreLocationPath = storeLocationPath
      ? this.unifyStoreLocationPath(storeLocationPath)
      : this.defaultStoreLocationPath;
    window.location.href = `${window.location.origin}/${effectiveStoreLocationPath}#!/~/cart`;
  }

  /**
   * Converts store location path to unified format without leading and trailing slash.
   * @private
   */
  private unifyStoreLocationPath(storeLocationPath: string): string {
    return storeLocationPath.replace(/(^\/)|(\/$)/g, '');
  }

  private getCartKey(storeId: number) {
    return `PSecwid__${storeId}PScart`;
  }

  private getCheckoutKey(storeId: number) {
    return `ec-${storeId}-checkout`;
  }

  private createCartPromise(cart: Cart): Promise<Cart> {
    return Promise.resolve(cart);
  }

  private createEmptyCartPromise(): Promise<Cart> {
    return this.createCartPromise({} as Cart);
  }
}

export default CartService;
