import { Cart } from '../type/cart';
import CartConverter from '../converter/cart-converter';

/**
 * CartService Class.
 */
export default class CartService {
  private readonly DEFAULT_STORE_LOCATION_PATH = 'store';

  private readonly LOCAL_STORAGE_KEY = 'PSecwid__2PScart';

  private readonly cartConverter: CartConverter;

  private readonly defaultStoreLocationPath: string;

  constructor(storeLocationPath?: string) {
    this.defaultStoreLocationPath = storeLocationPath
      ? this.unifyStoreLocationPath(storeLocationPath)
      : this.DEFAULT_STORE_LOCATION_PATH;
    this.cartConverter = new CartConverter();
  }

  /**
   * Get cart data in current store.
   */
  get(): Promise<Cart> {
    if (!window || !window.localStorage) {
      return this.createEmptyCartPromise();
    }
    const cartRecord = window.localStorage.getItem(this.LOCAL_STORAGE_KEY);
    if (cartRecord == null) {
      return this.createEmptyCartPromise();
    }
    const localStorageCart = JSON.parse(cartRecord);
    const cart = this.cartConverter.toCart(localStorageCart);
    return this.createCartPromise(cart);
  }

  /**
   * Navigate to checkout page with current cart data.
   */
  goToCheckout(storeLocationPath?: string) {
    if (!window || !window.location) {
      return;
    }
    const effectiveStoreLocationPath = storeLocationPath
      ? this.unifyStoreLocationPath(storeLocationPath)
      : this.defaultStoreLocationPath;
    window.location.href = `${window.location.origin}/${effectiveStoreLocationPath}/cart`;
  }

  /**
   * Converts store location path to unified format without leading and trailing slash.
   */
  private unifyStoreLocationPath(storeLocationPath: string): string {
    return storeLocationPath.replace(/(^\/)|(\/$)/g, '');
  }

  private createCartPromise(cart: Cart): Promise<Cart> {
    return Promise.resolve(cart);
  }

  private createEmptyCartPromise(): Promise<Cart> {
    return this.createCartPromise({} as Cart);
  }
}
